import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
});

export default theme;
