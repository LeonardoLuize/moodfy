import {
  Avatar,
  Box,
  Button,
  Heading,
  Icon,
  Image,
  Link,
  Tag,
  Text,
} from "@chakra-ui/react";
import { Popup as LeafletPopup } from "react-leaflet";
import { Chat, MapPin, Star } from "@phosphor-icons/react";
import "./index.css";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from "@chakra-ui/react";
import { useState } from "react";

export function Popup({ local }) {
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

              <Text color="gray.500" fontFamily="body" noOfLines={1} m={0}>
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
        size={["sm", "sm", "2xl"]}
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
              <Heading fontSize={[20, 20, 25]} mb={1}>
                {local.name}
              </Heading>

              <Box display="flex" justifyContent="flex-start" gap={3} mb={5}>
                {local.filters.map((filter) => (
                  <Tag
                    key={`${local.id}-${filter}`}
                    fontFamily="Poppins"
                    fontStyle="normal"
                    fontWeight="700"
                    fontSize="12px"
                    color="gray.500"
                  >
                    {filter}
                  </Tag>
                ))}
              </Box>

              <Box display="flex" alignItems="center" gap={3}>
                <Icon as={MapPin} fontSize={[20, 20, 25]} color="gray.500" />

                <Link
                  href={`https://www.google.com/maps/place/${local.address}`}
                  color="gray.500"
                  fontFamily="body"
                  fontWeight="normal"
                  fontSize={[14, 14, 18]}
                  noOfLines={1}
                  w="400px"
                  m={0}
                >
                  {local.address}
                </Link>
              </Box>

              <Box display="flex" gap={3} mt={5} mb={10}>
                <Icon as={Chat} fontSize={25} color="gray.500" />

                <Text
                  color="gray.500"
                  gap={2}
                  alignItems="center"
                  fontFamily="body"
                  fontWeight="normal"
                  fontSize={[14, 14, 18]}
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
                    weight={
                      parseInt(local.avaliation) / 10 > 1 ? "fill" : "regular"
                    }
                    fontSize={[30, 30, 40]}
                  />
                  <Icon
                    color="brand.500"
                    as={Star}
                    weight={
                      parseInt(local.avaliation) / 10 > 2 ? "fill" : "regular"
                    }
                    fontSize={[30, 30, 40]}
                  />
                  <Icon
                    color="brand.500"
                    as={Star}
                    weight={
                      parseInt(local.avaliation) / 10 > 3 ? "fill" : "regular"
                    }
                    fontSize={[30, 30, 40]}
                  />
                  <Icon
                    color="brand.500"
                    as={Star}
                    weight={
                      parseInt(local.avaliation) / 10 > 4 ? "fill" : "regular"
                    }
                    fontSize={[30, 30, 40]}
                  />
                  <Icon
                    color="brand.500"
                    as={Star}
                    weight={
                      parseInt(local.avaliation) / 10 >= 5 ? "fill" : "regular"
                    }
                    fontSize={[30, 30, 40]}
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
