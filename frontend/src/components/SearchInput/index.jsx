import { Button, Input, Icon, InputGroup, InputRightElement, Box, Tag, TagLabel, TagCloseButton } from "@chakra-ui/react";
import {FiSearch} from "react-icons/fi"
import {BsPlusCircleDotted, BsPlusCircleFill, BsPlusLg} from "react-icons/bs"
import theme from "../../theme";

function SearchButton() {
  return (
    <Button borderRadius="10px" colorScheme={"brand"}  size="md">
      <Icon
        as={FiSearch}
        w={5}
        h={5}
      />
    </Button>
  );
}

export function Searchinput() {
  return (
    <>
    <InputGroup>
      <Input borderRadius="10px" p={6} placeholder="Busque um lugar" />
      <InputRightElement mt={1} mr={2} children={<SearchButton />} />
    </InputGroup>
    <Box mt={2} display="flex" flexWrap="wrap" gap={2}>
        <Tag size='lg' colorScheme='brand' borderRadius='full' transition="background-color .2s" _hover={{bg: theme.colors.brand["200"]}}>
            <TagLabel>Rock</TagLabel>
            <TagCloseButton />
        </Tag>
        <Tag size='lg' colorScheme='brand' borderRadius='full' transition="background-color .2s" _hover={{bg: theme.colors.brand["200"]}}>
            <TagLabel>Indie</TagLabel>
            <TagCloseButton />
        </Tag>
        <Tag size='lg' colorScheme='brand' borderRadius='full' transition="background-color .2s" _hover={{bg: theme.colors.brand["200"]}}>
            <TagLabel>Instagramável</TagLabel>
            <TagCloseButton />
        </Tag>
        <Tag size='lg' colorScheme='brand' borderRadius='full' cursor="pointer" transition="background-color .2s" _hover={{bg: theme.colors.brand["200"]}}>
            <Icon as={BsPlusLg} w={5} h={5} />
        </Tag>
    </Box>
    </>
  );
}
