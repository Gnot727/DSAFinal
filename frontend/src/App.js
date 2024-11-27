import './App.css';
import MapComponent from './Map.jsx';
import TopBar from './TopBar.jsx';
import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from 'react';


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
        <TopBar/>
        <Box flex="1" position="relative">
          <MapComponent />
        </Box>
      </Flex>
    </Box>
  );
}

export default App;

