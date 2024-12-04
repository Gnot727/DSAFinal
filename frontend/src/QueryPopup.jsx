import './App.css';
import React, { Component } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Flex,
    List,
    ListItem,
    ListIcon,
    Tab,
    Modal,ModalOverlay,
    ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton,
    Box,
    Text,
    Stack,
    Spacer
} from '@chakra-ui/react'

class QueryPopup extends React.Component {
    count = 0;

    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps) {
        if (this.props.response !== prevProps.response) {
            this.count = 0;
        }
    }

    render() {
        const { response } = this.props;
        let time = ''
        let rowsNum = ''
        let resultArray = []
        let memoryUsage = ''
        let comparisons = ''
        let merges = ''
        let swaps = ''
        let partitions = ''

        if (response) {
            time = response.time;
            rowsNum = response.sorted.length;
            resultArray = response.sorted;
            memoryUsage = response.memoryUsage;
            comparisons = response.comparisons;
            
            if (this.props.sortMethod == 'Quick Sort') {
                swaps = response.swaps;
                partitions = response.partitions;
            } else {
                merges = response.merges;
            }       
        }

        return (
            <Modal isOpen={this.props.modalStatus} onClose={this.props.closeModal}>
                <ModalOverlay>
                    <ModalContent minWidth="75vw" height="75vh">
                        <ModalHeader>Sort Data Summary </ModalHeader>
                        <ModalCloseButton/>
                        <ModalBody>
                            <Flex>
                                <Box w="100%" maxW="300px">
                                    <Stack spacing = {10}>
                                        <Spacer></Spacer>
                                        <Flex justify = "space-between">
                                        <Text fontWeight={"bold"}>Sorted using: </Text>
                                        <Text fontWeight={"semibold"}>{this.props.sortMethod}</Text>
                                        </Flex>

                                        <Flex justify = "space-between">
                                        <Text fontWeight={"bold"}>Execution time:</Text>
                                        <Text fontWeight={"semibold"}>{time}s</Text>
                                        </Flex>

                                        <Flex justify = "space-between">
                                        <Text fontWeight={"bold"}>Rows retrieved: </Text>
                                        <Text fontWeight={"semibold"}>{rowsNum}</Text>
                                        </Flex>
                                        {this.props.sortMethod === 'Quick Sort' ? (
                                            <>
                                            <Flex justify = "space-between">
                                                <Text fontWeight={"bold"}>Number of swaps:</Text>
                                                <Text fontWeight={"semibold"}>{swaps}</Text>
                                                </Flex>
                                                <Flex justify = "space-between">
                                                <Text fontWeight={"bold"}>Number of partitions: </Text>
                                                <Text fontWeight={"semibold"}>{partitions}</Text>
                                                </Flex>
                                            </>
                                        ) : (
                                            <Flex justify = "space-between">
                                            <Text fontWeight={"bold"}>Number of merges: </Text>
                                            <Text fontWeight={"semibold"}>{merges}</Text>
                                            </Flex>
                                        )}
                                        <Flex justify = "space-between">
                                        <Text fontWeight={"bold"}>Number of comparisons: </Text>
                                        <Text fontWeight={"semibold"}>{comparisons}</Text>
                                        </Flex>
                                        <Flex justify = "space-between">
                                        <Text fontWeight={"bold"}>Memory Usage: </Text>
                                        <Text fontWeight={"semibold"}>{memoryUsage}mb</Text>
                                        </Flex>
                                        
                                    </Stack>
                                </Box>
                                <Box overflow="hidden">
                                    <TableContainer
                                    maxHeight="60vh"
                                    overflowY="auto"
                                    overflowX="auto">
                                        <Table variant='simple'>
                                            <Thead>
                                                <Tr>
                                                    <Th>Country/Region</Th>
                                                    <Th>Province/State</Th>
                                                    <Th>Observed Date</Th>
                                                    <Th isNumeric>Confirmed Cases</Th>
                                                    <Th isNumeric>Deaths</Th>
                                                    <Th isNumeric>Recovered</Th>
                                                    <Th>Last Update</Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody>
                                                {resultArray.map((elem) => {
                                                    if (this.count > 100) { return; }
                                                    this.count++;

                                                    let observedDate = new Date(1970, 0, 1);
                                                    observedDate.setSeconds(elem.observationDate.seconds);

                                                    let lastUpdate = new Date(1970, 0, 1);
                                                    lastUpdate.setSeconds(elem.lastUpdate.seconds);

                                                    return (
                                                    <Tr key={elem.sNo}>
                                                        <Td>{elem.countryRegion}</Td>
                                                        <Td>{elem.province}</Td>
                                                        <Td>{observedDate.toDateString()}</Td>
                                                        <Td>{elem.confirmed}</Td>
                                                        <Td>{elem.deaths}</Td>
                                                        <Td>{elem.recovered}</Td>
                                                        <Td>{lastUpdate.toDateString()}</Td>
                                                    </Tr>
                                                    )
                                                })}
                                            </Tbody>
                                        </Table>
                                    </TableContainer>
                                </Box>
                            </Flex>
                        </ModalBody>
                    </ModalContent>
                </ModalOverlay>
            </Modal>
        )
    }
}

export default QueryPopup;