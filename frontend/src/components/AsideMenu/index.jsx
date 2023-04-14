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
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import theme from "../../theme";
import { RiHomeFill } from "react-icons/ri";
import LogoIcon from "../../assets/logo.svg"
import { LateralBar } from "./LateralBar";

export function AsideMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <LateralBar onOpen={onOpen} />
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
