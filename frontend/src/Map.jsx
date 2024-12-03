import React from 'react';
import countries from "./assets/custom.geo.json";
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';

class MapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountry: props.selectedCountry,
      hoveredCountry: null,
      geoJsonKey: 0,
      position: [51.505, -0.09]
    };
  }

  highlightFeature = (e) => {
    const layer = e.target;
    this.setState({ hoveredCountry: layer.feature.properties });
  };

  resetHighlight = () => {
    this.setState({ hoveredCountry: null });
  };

  clickFeature = (e) => {
    const layer = e.target;
    this.props.handleCountrySelect(layer.feature.properties)
  };

  onEachFeature = (feature, layer) => {
    layer.on({
      click: this.clickFeature,
      mouseover: this.highlightFeature,
      mouseout: this.resetHighlight,
    });
  };

  style = (feature) => {
    const { selectedCountry, hoveredCountry } = this.state;

    let mapStyle = {
      fillColor: "#4A7856",
      weight: 1,
      opacity: 0,
      color: '#4A7856',
      fillOpacity: 0,
    };

    if (selectedCountry && feature.properties.iso_a3 === selectedCountry.iso_a3) {
      mapStyle.fillColor = '#4A7856';
      mapStyle.color = '#4A7856';
      mapStyle.weight = 2;
      mapStyle.opacity = 1;
      mapStyle.fillOpacity = 0.8;
    } else if (hoveredCountry && feature.properties.iso_a3 === hoveredCountry.iso_a3) {
      mapStyle.fillColor = '#888';
      mapStyle.color = '#444';
      mapStyle.weight = 2;
      mapStyle.opacity = 1;
      mapStyle.fillOpacity = 0.7;
    }

    return mapStyle;
  };


  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.selectedCountry !== this.state.selectedCountry ||
      prevState.hoveredCountry !== this.state.hoveredCountry
    ) {
      this.setState((state) => ({ geoJsonKey: state.geoJsonKey + 1 }));
    }

    if (prevProps.selectedCountry !== this.props.selectedCountry) {
      this.setState({ selectedCountry: this.props.selectedCountry });
    }
  }

  render() {

    return (
      <MapContainer
        maxBounds={[[-90, -180], [90, 180]]}
        center={this.state.position}
        zoom={3}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          minZoom={3}
          maxZoom={20}
        />
        <GeoJSON key={this.state.geoJsonKey} data={countries} style={this.style} onEachFeature={this.onEachFeature} />
      </MapContainer>
    );
  }
}

export default MapComponent;
