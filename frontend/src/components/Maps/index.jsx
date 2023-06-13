import React, { useEffect } from "react";
import "./map.css";
import { LocationPin } from "./LocationPin";
import { MapContainer, TileLayer, useMap, useMapEvent } from "react-leaflet";

export function MapDisplay({ data, setMap, map, eventPosition }) {
  const position = [-25.4528, -49.2508];

  return (
    <div id="map">
      <MapContainer center={position} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
          url="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
        />
        {data?.map((local) => (
          <LocationPin
            key={`pin-${local.id}`}
            setMap={setMap}
            map={map}
            local={local}
            position={[parseFloat(local.latitude), parseFloat(local.longitude)]}
          />
        ))}
      </MapContainer>
    </div>
  );
}
