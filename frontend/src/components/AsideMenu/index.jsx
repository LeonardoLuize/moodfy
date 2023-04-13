import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import theme from "../../theme";
import {TiHome} from "react-icons/ti"

export function AsideMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        width="100px"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="self-start"
        p={8}
        bg={theme.colors.menuBackground["500"]}
      >
       <Box>
        <Icon as={TiHome} color={theme.colors.brand["500"]} w={7} h={7}/>
       </Box>
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
