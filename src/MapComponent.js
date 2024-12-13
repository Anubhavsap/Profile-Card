// src/components/MapComponent.js
import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const MapComponent = ({ location }) => {
  return (
    <GoogleMap
      center={location}
      zoom={10}
      mapContainerStyle={{ height: "400px", width: "800px" }}
    >
      <Marker position={location} />
    </GoogleMap>
  );
};

export default MapComponent;
