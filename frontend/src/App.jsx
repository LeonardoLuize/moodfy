import { Box } from "@chakra-ui/react";
import { MapContainer } from "./components/Maps";
import "./style/global.css";

export default function App() {
  return (
    <Box className="container">
      <MapContainer
        location={{
          address: "Havana Bar",
          lat: -25.450904580556525,
          lng: -49.253065715519305, 
        }}
        zoomLevel={17}
      />
    </Box>
  );
}
