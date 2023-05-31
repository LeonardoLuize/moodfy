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
import { LateralBar } from "./LateralBar";

export function AsideMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <LateralBar />
    </>
  );
}
