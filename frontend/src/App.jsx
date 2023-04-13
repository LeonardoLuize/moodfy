import { Box, Text } from "@chakra-ui/react";
import { MapDisplay } from "./components/Maps";
import "./style/global.css";
import { AsideMenu } from "./components/AsideMenu";
import { MainContent } from "./components/MainContent";

export default function App() {
  return (
    <Box display="flex" alignItems="center" width="100%" height="100vh">
      <AsideMenu />
      <MainContent />
    </Box>
  );
}
