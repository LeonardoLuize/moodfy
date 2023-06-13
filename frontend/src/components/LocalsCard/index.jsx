import {
  Icon,
  Box,
  Tag,
  Text,
  Heading,
  Image,
} from "@chakra-ui/react";
import { MapPin } from "@phosphor-icons/react";

export function LocalsCard({ local }) {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        gap={5}
        mt={10}
        pl={0}
        _hover={{ pl: 5 }}
        transition="all .3s"
      >
        <Box
          display="flex"
          rounded="xl"
          alignItems="center"
          justifyContent="center"
          w="100px"
          h="100px"
          overflow="hidden"
        >
          <Image src={local.photo} w="full" h="full"/>
        </Box>

        <Box
          display="flex"
          flexDir={"column"}
          alingItems="flex-start"
          justifyContent="flex-start"
          gap={5}
        >
          <Box
            display="flex"
            flexDir={"column"}
            alingItems="flex-start"
            justifyContent="flex-start"
            gap="5px"
          >
            <Heading fontSize={20}>{local.name}</Heading>
            <Box
              display="flex"
              alingItems="center"
              justifyContent="flex-start"
              gap={3}
            >
              <Icon as={MapPin} fontSize={18} />
              <Text
                fontSize={12}
                noOfLines={1}
                w="200px"
                textDecorationLine="underline"
                color="gray.500"
              >
                {local.address}
              </Text>
            </Box>
          </Box>

          <Box display="flex" justifyContent="flex-start" gap={3}>
            {local.filters.map((filter) => (
              <Tag
                fontFamily="Poppins"
                fontStyle="normal"
                fontWeight="700"
                fontSize="12px"
                color="#C3C3C3"
              >
                {filter}
              </Tag>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
