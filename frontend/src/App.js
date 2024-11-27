import './App.css';
import MapComponent from './Map.jsx';
import { Box, Input, HStack, Select } from "@chakra-ui/react";
import React, {useState} from 'react';


function App() {
  const [country, setCountry] = useState('');
  const [province, setProvince] = useState('');
  const [sortMethod, setSortMethod] = useState('');
  const handleCountryChange = (event) => 
    setCountry(event.target.value);
  const handleProvinceChange = (event) => 
    setProvince(event.target.value);
  const handleSortChange = (event) => 
    setSortMethod(event.target.value);
  return (
    <Box className="App">
      <HStack spacing = {4} align = "stretch">
        
        <Input placeholder="Search Country"
        value={country}
        onChange={handleCountryChange}
        />
        <Input placeholder="Search Provice (optional)"
        value={province}
        onChange={handleProvinceChange}/>
          <Select placeholder= "Sort Method"
          value ={sortMethod}
          onChange ={handleSortChange}
          >
          <option value = "MergeSort">Merge Sort</option>
          <option value = "QuickSort">Quick Sort</option>
        </Select>
      
      </HStack>
      <Box className="map-area">
        <MapComponent />
      </Box>
    </Box>
  
  );
}

export default App;

