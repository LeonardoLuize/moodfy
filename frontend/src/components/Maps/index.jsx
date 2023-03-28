import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'
import { LocationPin } from './LocationPin';

export function MapContainer({location, zoomLevel}) {
  return (
    <div className="map-container">
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo" }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
  );
}
