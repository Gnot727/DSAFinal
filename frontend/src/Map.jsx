import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapComponent = () => {
  const position = [51.505, -0.09]; // Example coordinates for London

  return (
    <MapContainer maxBounds={[[-90, -180], [90, 180]]} center={position} zoom={3} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        minZoom={3}
        maxZoom={20}      
      />
    </MapContainer>
  );
};

export default MapComponent;