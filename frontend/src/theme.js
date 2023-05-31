import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#F0FDF6",
      100: "#DBFDEC",
      200: "#B9F9D8",
      300: "#82F3BA",
      400: "#45E394",
      500: "#12AF61",
      600: "#12AF61",
      700: "#11844B",
      800: "#13683E",
      900: "#125536",
    },
    menuBackground: {
      500: "#FAFAFA",
    },
    text: {
      500: "#0E0A0F"
    },
    background: {
      100: "#FAFAFA"
    }
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
});

export default theme;
