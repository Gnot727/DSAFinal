import React from "react"
import { Box, Button, Flex, Text, Select, Stack, Checkbox,Modal,ModalOverlay,
    ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton
} from "@chakra-ui/react";
    import countries from "./assets/custom.geo.json";
import { ArrowForwardIcon } from '@chakra-ui/icons'
import axios from "axios";
import  geojson_to_db_map from "./helpers/geojsonDBMap.js"

class TopBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            category: '',
            sortMethod:'',
            isAscending: false,
            isModalOpen: false,
            selectedCountry: props.selectedCountry,
            inputValue: this.props.selectedCountry ? this.props.selectedCountry.name : ''
        }

        this.countryOptions = countries.features
            .map(feature => feature.properties.name)
            .sort((a, b) => a.localeCompare(b));
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedCountry !== this.props.selectedCountry) {
            this.setState({
                selectedCountry: this.props.selectedCountry,
                inputValue: this.props.selectedCountry ? this.props.selectedCountry.name : ''
            });
        }
    }

    handleCountryChange = (event) => {
        const inputValue = event.target.value;

        this.setState({ inputValue });
        
        const matchedCountry = countries.features.find(feature => 
            feature.properties.name.toLowerCase() === inputValue.toLowerCase()
        );

        if (matchedCountry) {
            this.props.handleCountrySelect(matchedCountry.properties)
        }
    }

    handleDataCategoryChange = (event) =>{
        this.setState({category: event.target.value});
    }

    handleSortMethodChange = (event) =>{
        this.setState({sortMethod: event.target.value});
    }

    handleAscendingChange = (event) =>{
        this.setState({isAscending:event.target.checked});
    }

    runQuery = () => {

        let countryName = geojson_to_db_map[this.state.selectedCountry.name];

        let options = {
            country: countryName,
            dataCategory: this.state.category,
            sortMethod: this.state.sortMethod,
            ascending: this.state.isAscending
        }

        console.log(options)
    
        axios.post("http://localhost:8080/api/query", options)
            .then(response => {
                console.log(response)
            })
    }

    openModal = () => {
        this.setState({isModalOpen:true});
    }

    closeModal = () =>{
        this.setState({isModalOpen:false});
    }
    
    render() {
        const { category, sortMethod, isAscending, isModalOpen } = this.state;

        return (
        <Box
            bg="#FFFAFA"
            p={4}
        >
            <Flex ml={25}>
                <Stack spacing={10} direction='row' width="100%">
                    <Box>
                        <Text>Country/Region</Text>
                            <Select
                                placeholder='Select a country'
                                value={this.state.inputValue || ''}
                                
                                onChange={this.handleCountryChange}>
                                {this.countryOptions.map((countryName) => (
                                    <option key={countryName} value={countryName}>
                                        {countryName}
                                    </option>
                                ))}
                            </Select>
                    </Box>
                    <Box>
                        <Text>Data Category</Text>
                        <Select placeholder='Select an option' 
                        value ={this.state.dataCategory}
                        onChange={this.handleDataCategoryChange}>
                            <option value = "deaths">Deaths</option>
                            <option value = "confirmed">Confirmed Cases</option>
                            <option value = "recovered">Recovered Cases</option>
                        </Select>
                    </Box>
                    <Box>
                        <Text>Sort Method</Text>
                        <Select placeholder='Select an option'
                        value={this.state.sortMethod}
                        onChange={this.handleSortMethodChange}>
                        <option value = "merge">Merge Sort</option>
                        <option value = "quick">Quick Sort</option>
                        </Select>
                    </Box>
                    <Box>
                        <Flex direction="column" height="100%">
                            <Text alignSelf="flex-start">Ascending</Text>
                            <Flex justifyContent="center" flex="1">
                                <Checkbox 
                                isChecked={this.state.isAscending}
                                onChange={this.handleAscendingChange}/>
                            </Flex>
                        </Flex>
                    </Box>
                </Stack>
                <Box alignSelf="center" mr={100}>
                    <Flex direction="column" height="100%" alignContent="center" justifyContent="flex-end">
                        <Button colorScheme='green' size="lg" rightIcon={<ArrowForwardIcon />} onClick={this.runQuery}>Run</Button>
                    </Flex>
                </Box>
                <Box>
                </Box>
                
            </Flex>

            <Modal isOpen={isModalOpen} onClose={this.closeModal}>
                <ModalOverlay>
                    <ModalContent>
                        <ModalHeader>Sort Data Summary </ModalHeader>
                        <ModalCloseButton/>
                        <ModalBody>
                        <Text>Country/Region: {this.state.inputValue || "Not specified"}</Text>
                        <Text>Data Category: {category || "Not selected"}</Text>
                        <Text>Sort Method: {sortMethod || "Not selected"}</Text>
                        <Text>Ascending: {isAscending ? "Yes" : "No"}</Text>
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme="blue" mr={3} onClick={this.closeModal}>
                                Close
                            </Button>
                            
                        </ModalFooter>
                    </ModalContent>
                </ModalOverlay>
            </Modal>
            </Box>
        )
    }
}

export default TopBar;