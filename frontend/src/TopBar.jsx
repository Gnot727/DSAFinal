import React from "react"
import { Box, Button, Flex, Text, Select, Stack, Checkbox,Modal,ModalOverlay,
    ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, VStack, Spinner
} from "@chakra-ui/react";
import countries from "./assets/custom.geo.json";
import { ArrowForwardIcon } from '@chakra-ui/icons'

class TopBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
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
    
    render() {
        return (
        <Box
            bg="#FFFAFA"
            p={4}
            boxShadow="lg"
            position="relative" zIndex={1}>
            <Flex ml={25}>
                <Stack spacing={10} direction='row' width="100%">
                    <Box>
                        <Text fontWeight={"bold"} mb={2}>Country/Region</Text>
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
                        <Text fontWeight={"bold"} mb={2}>Data Category</Text>
                        <Select placeholder='Select an option' 
                        value ={this.props.dataCategory}
                        onChange={this.props.handleDataCategoryChange}>
                            <option value = "deaths">Deaths</option>
                            <option value = "confirmed">Confirmed Cases</option>
                            <option value = "recovered">Recovered Cases</option>
                        </Select>
                    </Box>
                    <Box>
                        <Text fontWeight={"bold"} mb={2}>Sort Method</Text>
                        <Select placeholder='Select an option'
                        value={this.props.sortMethod}
                        onChange={this.props.handleSortMethodChange}>
                        <option value = "Merge Sort">Merge Sort</option>
                        <option value = "Quick Sort">Quick Sort</option>
                        </Select>
                    </Box>
                    <Box>
                        <Flex direction="column" height="100%">
                            <Text fontWeight={"bold"} mb={2} alignSelf="flex-start">Ascending</Text>
                            <Flex justifyContent="center" flex="1">
                                <Checkbox 
                                isChecked={this.props.isAscending}
                                onChange={this.props.handleAscendingChange}/>
                            </Flex>
                        </Flex>
                    </Box>
                </Stack>
                <Box alignSelf="center" mr={100}>
                    <Flex direction="column" height="100%" alignContent="center" justifyContent="flex-end">
                        <Button colorScheme='green' size="lg" rightIcon={!this.props.loading && <ArrowForwardIcon />} onClick={this.props.runQuery}>
                            {this.props.loading ? (
                                <VStack>
                                    <Spinner color="white" size="sm" />
                                    <Text fontSize="sm">Loading...</Text>
                                </VStack> ) : ("Run" )}
                        </Button>
                    </Flex>
                </Box>
                <Box>
                </Box>
            </Flex>
            </Box>
        )
    }
}

export default TopBar;