import {
  Avatar,
  Box,
  Button,
  CardBody,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { Popup as LeafletPopup } from "react-leaflet";
import { Chat, MapPin, Star } from "@phosphor-icons/react";
import "./index.css";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from "@chakra-ui/react";
import { useState } from "react";

export function Popup({local}) {
  const [isOpen, setIsOpen] = useState(false);

  function onClose() {
    setIsOpen(false);
  }

  function onOpen() {
    setIsOpen(true);
  }

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
          <Avatar src={local.photo} />
          <Box
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Text fontSize={18} fontWeight="bold" m={0} fontFamily="heading">
              {local.name}
            </Text>

            <Box display="flex" alignItems="center" gap={3}>
              <Icon as={MapPin} fontSize={15} color="gray.500" />

              <Text
                color="gray.500"
                gap={2}
                alignItems="center"
                fontFamily="body"
                noOfLines={1}
                m={0}
              >
                {local.address}
              </Text>
            </Box>
          </Box>
        </Box>
        <Button w="full" size="lg" mt={5} colorScheme="brand" onClick={onOpen}>
          Ver Mais
        </Button>
      </Box>

      <AlertDialog
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
        size="2xl"
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                w="full"
                h="250px"
                borderRadius="xl"
                overflow="hidden"
                mt={7}
              >
                <Image w="full" src={local.photo} />
              </Box>
            </AlertDialogHeader>
            <AlertDialogCloseButton />

            <AlertDialogBody>
              <Heading mb={5}>{local.name}</Heading>

              <Box display="flex" alignItems="center" gap={3}>
                <Icon as={MapPin} fontSize={25} color="gray.500" />

                <Text
                  color="gray.500"
                  gap={2}
                  alignItems="center"
                  fontFamily="body"
                  fontWeight="normal"
                  fontSize={18}
                  noOfLines={1}
                  w="400px"
                  m={0}
                >
                 {local.address}
                </Text>
              </Box>

              <Box display="flex" gap={3} mt={5} mb={10}>
                <Icon as={Chat} fontSize={25} color="gray.500" />

                <Text
                  color="gray.500"
                  gap={2}
                  alignItems="center"
                  fontFamily="body"
                  fontWeight="normal"
                  fontSize={18}
                  noOfLines={4}
                  w="400px"
                  m={0}
                >
                  {local.description}
                </Text>
              </Box>

              <Box
                w="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDir="column"
                pb={10}
              >
                <Text color="gray.500" mb={3}>
                  Nota Moody:
                </Text>
                <Box display="flex" alignItems="center" gap={5}>
                  <Icon
                    color="brand.500"
                    as={Star}
                    weight={(local.avaliation / 10) > 1 ? "fill" : "regular"}
                    fontSize={40}
                  />
                  <Icon
                    color="brand.500"
                    as={Star}
                    weight={(local.avaliation / 10) > 2 ? "fill" : "regular"}
                    fontSize={40}
                  />
                  <Icon
                    color="brand.500"
                    as={Star}
                    weight={(local.avaliation / 10) > 3 ? "fill" : "regular"}
                    fontSize={40}
                  />
                  <Icon
                    color="brand.500"
                    as={Star}
                    weight={(local.avaliation / 10) > 4 ? "fill" : "regular"}
                    fontSize={40}
                  />
                  <Icon
                    color="brand.500"
                    as={Star}
                    weight={(local.avaliation / 10) >= 5 ? "fill" : "regular"}
                    fontSize={40}
                  />
                </Box>
              </Box>
            </AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </LeafletPopup>
  );
}
