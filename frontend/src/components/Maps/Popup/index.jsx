import { Avatar, Box, Button, CardBody, Text } from "@chakra-ui/react";
import { Popup as LeafletPopup } from "react-leaflet";
import { HiOutlineExternalLink } from "react-icons/hi";
import "./index.css";

export function Popup() {
  return (
    <LeafletPopup closeButton={false} className="custom-popup">
      <Box
        bg="whiteAlpha.900"
        borderRadius={15}
        p={6}
        display="flex"
        flexDir="column"
        alignItems="center"
        width="100%"
      >
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          width="100%"
          gap={10}
        >
          <Avatar />
          <Box
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Text fontSize={18} fontWeight="bold" m={0} fontFamily="heading">
              Puc
            </Text>
            <Text fontFamily="body" m={0}>41 99999-9999</Text>
          </Box>
          <Button colorScheme={"purple"} p={2} size="md">
            <HiOutlineExternalLink size={20} />
          </Button>
        </Box>
        <Text fontFamily="body" fontSize={14} pt={8}>
          View a summary of all your over the last month view a summary of all
          your over the last month.
        </Text>
      </Box>
    </LeafletPopup>
  );
}