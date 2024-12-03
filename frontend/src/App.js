import './App.css';
import MapComponent from './Map.jsx';
import TopBar from './TopBar.jsx';
import { Box, Flex } from "@chakra-ui/react";
import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountry: "",
    };

    this.handleCountrySelect = this.handleCountrySelect.bind(this);
  }

  handleCountrySelect(country) {
    this.setState({ selectedCountry: country });
  }
  
  render() {
    return (
      <Box>
        <Flex direction="column" height="100vh">
          <TopBar selectedCountry={this.state.selectedCountry}
          handleCountrySelect={this.handleCountrySelect}/>
          <Box flex="1" position="relative">
            <MapComponent handleCountrySelect={this.handleCountrySelect} selectedCountry={this.state.selectedCountry} />
          </Box>
        </Flex>
      </Box>
    )
  }
}

export default App;

