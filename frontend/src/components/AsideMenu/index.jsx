import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  Img,
  useDisclosure,
} from "@chakra-ui/react";
import theme from "../../theme";
import { RiHomeFill } from "react-icons/ri";
import LogoIcon from "../../assets/logo.svg"

export function AsideMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        width="100px"
        height="100%"
        display="flex"
        flexDir="column"
        justifyContent="space-between"
        alignItems="center"
        p={8}
        bg={theme.colors.menuBackground["500"]}
      >
        <Box>
          <Icon
            as={RiHomeFill}
            _hover={{color: theme.colors.brand["700"]}}
            transition={"all .2s"}
            cursor="pointer"
            color={theme.colors.brand["500"]}
            w={7}
            h={7}
          />
        </Box>
        <Img src={LogoIcon} w={7} h={7} />
      </Box>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
