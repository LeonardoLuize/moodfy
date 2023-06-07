import { Box, Text } from "@chakra-ui/react";
import { MapDisplay } from "./components/Maps";
import "./style/global.css";
import { AsideMenu } from "./components/AsideMenu";
import { MainContent } from "./components/MainContent";
import { useEffect } from "react";
import { api } from "./lib/axios";

export default function App() {
  useEffect(() => {
    console.log("req")

    api.get("/getAllFilters.php").then(data => console.log(data))
  }, [])

  return (
    <Box
      display="flex"
      flexDir={["column", "column", "row"]}
      alignItems="center"
      width="100%"
      height="100vh"
    >
      <AsideMenu />
      <MainContent />
    </Box>
  );
}
