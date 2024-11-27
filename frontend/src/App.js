import './App.css';
import MapComponent from './Map.jsx';
import { Box, Input, Button, Flex, Text, Select, Stack, Checkbox } from "@chakra-ui/react";
import React, { useState } from 'react';
import { ArrowForwardIcon } from '@chakra-ui/icons'


function App() {
  /*
  const [country, setCountry] = useState('');
  const [province, setProvince] = useState('');
  const [sortMethod, setSortMethod] = useState('');

  const handleCountryChange = (event) => 
    setCountry(event.target.value);

  const handleProvinceChange = (event) => 
    setProvince(event.target.value);

  const handleSortChange = (event) => 
    setSortMethod(event.target.value);
    */

  return (
    <Box>
      <Flex direction="column" height="100vh">
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
        <Box flex="1" position="relative">
          <MapComponent />
        </Box>
      </Flex>
    </Box>
  );
}

export default App;

