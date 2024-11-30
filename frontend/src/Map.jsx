import React, { useState } from 'react';
import countries from "./assets/custom.geo.json";
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';

const MapComponent = () => {
  const position = [51.505, -0.09]; // Example coordinates for London

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [hoveredCountry, setHoveredCountry] = useState(null);

  const highlightFeature = (e) => {
    let layer = e.target;
    setHoveredCountry(layer.feature.properties);
  }

  const resetHighlight = (e) => {
    setHoveredCountry(null);
  }

  const clickFeature = (e) => {
    let layer = e.target;
    console.log(layer.feature.properties);
    setSelectedCountry(layer.feature.properties);
  };  
  
  const onEachFeature = (feature, layer) => {
    layer.on({
      click: clickFeature,
      mouseover: highlightFeature,
      mouseout: resetHighlight,
    });
  }

  const style = (feature) => {
    let mapStyle = {
        fillColor: "#4A7856",
        weight: 1,
        opacity: 0,
        color: '#4A7856',
        fillOpacity: 0
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
  } 

  return (
    <MapContainer maxBounds={[[-90, -180], [90, 180]]} center={position} zoom={3} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        minZoom={3}
        maxZoom={20}      
      />
      <GeoJSON data={countries} style={style} onEachFeature={onEachFeature} />
    </MapContainer>
  );
};

export default MapComponent;