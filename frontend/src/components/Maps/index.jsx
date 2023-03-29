import React from "react";
import "./map.css";
import { LocationPin } from "./LocationPin";
import { MapContainer, TileLayer } from "react-leaflet";

export function MapDisplay() {
  const position = [-25.4528, -49.2508];

  return (
    <div id="map">
      <MapContainer center={position} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
          url="http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
        />
        <LocationPin position={position}/>
      </MapContainer>
    </div>
  );
}
