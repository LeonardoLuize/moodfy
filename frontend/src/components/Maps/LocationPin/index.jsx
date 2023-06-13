import { Icon } from "leaflet";
import { Marker, useMap } from "react-leaflet";
import { Popup } from "../PopUp";
import "./index.css";
import { useEffect } from "react";

export function LocationPin({ setMap, map, local, position }) {
  const mapState = useMap()

  useEffect(() => {
    if(!map){
      setMap(mapState)
    }
  }, [map])

  return (
    <Marker
      icon={
        new Icon({
          iconUrl: "./Location.svg",
          iconSize: [38, 95],
          iconAnchor: [22, 94],
          popupAnchor: [-3, -76],
          shadowSize: [68, 95],
          shadowAnchor: [22, 94],
        })
      }
      position={position}
    >
      <Popup local={local} />
    </Marker>
  );
}
