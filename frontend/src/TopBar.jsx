import React from "react"
import { Box, Input, Button, Flex, Text, Select, Stack, Checkbox } from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons'

class TopBar extends React.Component {
    
    render() {
        return (
        <Box
            bg="#FFFAFA"
            p={4}
        >
            <Flex ml={25}>
                <Stack spacing={10} direction='row' width="100%">
                    <Box>
                        <Text>Country/Region</Text>
                        <Input placeholder='Type a country' />
                    </Box>
                    <Box>
                        <Text>Province/State</Text>
                        <Select placeholder='Select an option' />
                    </Box>
                    <Box>
                        <Text>Data Category</Text>
                        <Select placeholder='Select an option' />
                    </Box>
                    <Box>
                        <Text>Sort Method</Text>
                        <Select placeholder='Select an option' />
                    </Box>
                    <Box>
                        <Flex direction="column" height="100%">
                            <Text alignSelf="flex-start">Ascending</Text>
                            <Flex justifyContent="center" flex="1">
                                <Checkbox />
                            </Flex>
                        </Flex>
                    </Box>
                </Stack>
                <Box alignSelf="center" mr={100}>
                    <Flex direction="column" height="100%" alignContent="center" justifyContent="flex-end">
                        <Button colorScheme='green' size="lg" rightIcon={<ArrowForwardIcon />}>Run</Button>
                    </Flex>
                </Box>
            </Flex>
            </Box>
        )
    }
}

export default TopBar;