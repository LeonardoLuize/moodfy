import { HiLocationMarker } from "react-icons/hi";
import "./index.css";

export function LocationPin({ text }) {
  return (
    <div className="location-container">
      <HiLocationMarker size={25} />
      <p className="location-text">{text}</p>
    </div>
  );
}
