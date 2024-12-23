import './App.css';
import MapComponent from './Map.jsx';
import TopBar from './TopBar.jsx';
import { Box, Flex } from "@chakra-ui/react";
import React, { Component } from 'react';
import QueryPopup from './QueryPopup.jsx';
import axios from "axios";
import geojson_to_db_map from "./helpers/geojsonDBMap.js"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountry: "",
      category: "",
      sortMethod: "",
      isAscending: false,
      modalStatus: false,
      loading: false,
      response: null
    };

    this.handleCountrySelect = this.handleCountrySelect.bind(this);
    this.handleDataCategoryChange = this.handleDataCategoryChange.bind(this);
    this.handleSortMethodChange = this.handleSortMethodChange.bind(this);
    this.handleAscendingChange = this.handleAscendingChange.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.runQuery = this.runQuery.bind(this);
  }

  handleCountrySelect(country) {
    this.setState({ selectedCountry: country });
  }

  handleDataCategoryChange = (event) => {
    this.setState({category: event.target.value});
  }
  
  handleSortMethodChange = (event) => {
    this.setState({sortMethod: event.target.value});
  }

  handleAscendingChange = (event) => {
    this.setState({isAscending: event.target.checked});
  }

  openModal() {
    this.setState({ modalStatus: true})
  }

  closeModal() {
    this.setState({ modalStatus: false})
  }

  runQuery = () => {
    if (this.state.selectedCountry === "" || this.state.category === "" || this.state.sortMethod === "") {
      alert("Please select a country, data category, and sort method.");
      return;
    }

    this.setState({ loading: true });
    this.setState({ response: null });
    let countryName = geojson_to_db_map[this.state.selectedCountry.name];

    let options = {
        country: countryName,
        dataCategory: this.state.category,
        sortMethod: this.state.sortMethod,
        ascending: this.state.isAscending
    }

    axios.post("https://covid-19-visualizer.onrender.com/api/query", options)
      .then(resp => {
      this.setState({ loading: false });
      this.setState({ response: resp.data });
      this.openModal();
      }).catch(err => {
        this.setState({ loading: false });
        this.setState({ response: null });
        this.openModal();
    });
  }
  
  render() {
    return (
      <Box>
        <Flex direction="column" height="100vh">
          <TopBar selectedCountry={this.state.selectedCountry}
            handleCountrySelect={this.handleCountrySelect}
            handleDataCategoryChange={this.handleDataCategoryChange}
            handleSortMethodChange={this.handleSortMethodChange}
            handleAscendingChange={this.handleAscendingChange}
            category={this.state.category}
            sortMethod={this.state.sortMethod}
            isAscending={this.state.isAscending}
            runQuery={this.runQuery}
            loading={this.state.loading}
          />
          <Box flex="1"
            position="relative"
            zIndex={0}>
            <MapComponent handleCountrySelect={this.handleCountrySelect} selectedCountry={this.state.selectedCountry} />
          </Box>
        </Flex>
        <QueryPopup modalStatus={this.state.modalStatus} closeModal={this.closeModal}
          response={this.state.response} sortMethod={this.state.sortMethod}
          country={this.state.selectedCountry}
        />
      </Box>
    )
  }
}

export default App;

