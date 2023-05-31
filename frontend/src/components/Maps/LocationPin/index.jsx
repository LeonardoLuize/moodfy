import { Icon } from "leaflet";
import { Marker } from "react-leaflet";
import { Popup } from "../PopUp";
import "./index.css";

export function LocationPin({ position }) {
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
      <Popup />
    </Marker>
  );
}
