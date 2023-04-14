import { Box, Icon, Img, useBreakpointValue } from "@chakra-ui/react";
import theme from "../../theme";
import { RiHomeFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import LogoIcon from "../../assets/logo.svg";

export function LateralBar({ onOpen }) {
  const currentBreakpoint = useBreakpointValue({
    base: "base",
    md: "md",
    lg: "lg",
  });

  return (
    <Box
      width={["100%", "100%", "100px"]}
      height={["fit-content", "fit-content", "100%"]}
      display={"flex"}
      flexDir={["row", "row", "column"]}
      justifyContent="space-between"
      alignItems="center"
      p={8}
      bg={theme.colors.menuBackground["500"]}
    >
      {currentBreakpoint === "lg" ? (
        <>
          <Box>
            <Icon
              as={RiHomeFill}
              _hover={{ color: theme.colors.brand["700"] }}
              transition={"all .2s"}
              cursor="pointer"
              color={theme.colors.brand["500"]}
              w={7}
              h={7}
            />
          </Box>
          <Img src={LogoIcon} w={7} h={7} />
        </>
      ) : (
        <Icon
          as={RxHamburgerMenu}
          _hover={{ color: theme.colors.brand["700"] }}
          transition={"all .2s"}
          cursor="pointer"
          color={theme.colors.brand["500"]}
          w={7}
          h={7}
          onClick={onOpen}
        />
      )}
    </Box>
  );
}
