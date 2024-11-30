import React from "react"
import { Box, Input, Button, Flex, Text, Select, Stack, Checkbox,Modal,ModalOverlay,
    ModalContent,ModalHeader,ModalBody,ModalFooter,ModalCloseButton} from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons'
import MapComponent from "./Map";

class TopBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            country: '',
            province: '',
            category: '',
            sortMethod:'',
            isAscending: false,
            isModalOpen: false,
        }
        this.handleCountrySelect = this.handleCountrySelect.bind(this);
    }
    handleCountryChange= (event) =>{
        this.setState({country: event.target.value});
    }
    handleCountrySelect = (selectedCountry) =>{
        console.log("Selected Country in TopBar:", selectedCountry);
        if(selectedCountry){
        this.setState({country: selectedCountry});
        }
    }
    handleProvinceChange =(event) =>{
        this.setState({province: event.target.value});
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

    openModal = () => {
        this.setState({isModalOpen:true});
    }
    closeModal = () =>{
        this.setState({isModalOpen:false});
    }

    render() {
        const {country, province, category, sortMethod, isAscending, isModalOpen} = this.state;
        
        return (
        <Box
            bg="#FFFAFA"
            p={4}
        >
            <Flex ml={25}>
                <Stack spacing={10} direction='row' width="100%">
                    <Box>
                        <Text>Country/Region</Text>
                        <Input placeholder='Type a country'
                        value ={this.state.country}
                        onChange={this.handleCountryChange} />
                    </Box>
                    <Box>
                        <Text>Province/State</Text>
                        <Select placeholder='Select an option' 
                        value ={this.state.province}
                        onChange={this.handleProvinceChange}/>
                    </Box>
                    <Box>
                        <Text>Data Category</Text>
                        <Select placeholder='Select an option' 
                        value ={this.state.dataCategory}
                        onChange={this.handleDataCategoryChange}>
                            <option value = "deaths">Deaths</option>
                            <option value = "confirmed cases">Confirmed Cases</option>
                            <option value = "recovered cases">Recovered Cases</option>
                        </Select>
                    </Box>
                    <Box>
                        <Text>Sort Method</Text>
                        <Select placeholder='Select an option'
                        value={this.state.sortMethod}
                        onChange={this.handleSortMethodChange}>
                        <option value = "Merge Sort">Merge Sort</option>
                        <option value = "Quick Sort">Quick Sort</option>
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
                        <Button colorScheme='green' size="lg" rightIcon={<ArrowForwardIcon />} onClick={this.openModal}>Run</Button>
                    </Flex>
                </Box>
                <Box>
                <MapComponent CountrySelect ={this.handleCountrySelect} onChange = {this.handleCountrySelect}/>
                </Box>
                
            </Flex>

            <Modal isOpen={isModalOpen} onClose={this.closeModal}>
                <ModalOverlay>
                    <ModalContent>
                        <ModalHeader>Sort Data Summary </ModalHeader>
                        <ModalCloseButton/>
                        <ModalBody>
                        <Text>Country/Region: {country || "Not specified"}</Text>
                        <Text>Province/State: {province || "Not specified"}</Text>
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