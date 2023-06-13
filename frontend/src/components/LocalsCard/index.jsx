import { Icon, Box, Tag, Text, Heading, Image } from "@chakra-ui/react";
import { MapPin } from "@phosphor-icons/react";

export function LocalsCard({ map, local }) {
  function SetViewOnClick() {
    if (!map) return;

    map.setView([parseFloat(local.latitude), parseFloat(local.longitude)], 15);
  }

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        gap={5}
        mt={5}
        pl={0}
        _hover={{ pl: [0, 0, 5] }}
        transition="all .3s"
        cursor="pointer"
        onClick={SetViewOnClick}
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
          <Image src={local.photo} h="full" />
        </Box>

        <Box
          display="flex"
          flexDir={"column"}
          alignItems="flex-start"
          justifyContent="flex-start"
          gap={5}
        >
          <Box
            display="flex"
            flexDir={"column"}
            alignItems="flex-start"
            justifyContent="flex-start"
            gap="5px"
          >
            <Heading fontSize={[16, 16, 20]}>{local.name}</Heading>
            <Box
              display="flex"
              alignItems="center"
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
        </Box>
      </Box>
    </>
  );
}
