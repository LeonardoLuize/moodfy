import { Box, Icon, Img, useBreakpointValue, Text } from "@chakra-ui/react";
import theme from "../../theme";
import LogoIcon from "../../assets/logo.svg";
import MoodyLogo from "../../assets/moody.svg";

export function LateralBar({ onOpen }) {
  return (
    <Box
      width={["100%", "100%","200px"]}
      height={["80px", "80px","100%"]}
      display={"flex"}
      flexDir={["row", "row", "column"]}
      justifyContent="space-between"
      alignItems="center"
      p={8}
      bg={theme.colors.menuBackground["500"]}
    >
      <>
        <Box>
          <Img alignSelf="flex-end" src={MoodyLogo} />
        </Box>
        <Img src={LogoIcon} w={7} h={7} />
      </>
    </Box>
  );
}
