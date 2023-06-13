import {
  Button,
  Input,
  Icon,
  InputGroup,
  InputRightElement,
  Box,
  Tag,
  TagLabel,
  TagCloseButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { MagnifyingGlass, PlusCircle } from "@phosphor-icons/react";
import theme from "../../theme";
import axios from "axios"
import {useState, useEffect} from "react"

function SearchButton() {
  return (
    <Button borderRadius="10px" colorScheme={"brand"} size="md">
      <Icon as={MagnifyingGlass} w={5} h={5} />
    </Button>
  );
}

export function Searchinput({search, setSearch, data, setData, tags, setTags}) {
  const [visible, setVisible] = useState(true);
  const removeElement = (element) => {
    setVisible((prev) => !prev);
  };

  function handleSearch(e){
    e.preventDefault();
    setSearch(e.target.value)
  }  

  function handleRemoveTag(tag){
    let newTags = tags.filter(x => x !== tag)
    setTags(newTags)
  }

  function handleSetTags(tag){
    let hasTag = tags.find(x => x === tag)

    if (hasTag) {
      return
    }    
    setTags([...tags, tag])
  }

  return (
    <>
      <InputGroup as="form" onSubmit={handleSearch}>
        <Input borderRadius="10px" p={6} placeholder="Busque um lugar" />
        <InputRightElement mt={1} mr={2} children={<SearchButton type="submit" />} />
      </InputGroup>
      <Box mt={2} display="flex" flexWrap="wrap" gap={2}>
        {tags.map(tag => (
          <Tag
          size="lg"
          colorScheme="brand"
          borderRadius="full"
          transition="background-color .2s"
          _hover={{ bg: theme.colors.brand["200"] }}
          >
            <TagLabel>{tag}</TagLabel>
            <TagCloseButton onClick={() => handleRemoveTag(tag)}/>
          </Tag>
        ))}
        <Menu onChange={(e) => handleSetTags(e.target.value)} >
          <MenuButton
            borderRadius="full"
            as={Button}
            colorScheme="brand"
            leftIcon={<Icon as={PlusCircle} w={5} h={5} />}
          >
            Adicionar Filtro
          </MenuButton>
          <MenuList p={2}>
            <Input my={2} />
            <MenuItem>Rock</MenuItem>
            <MenuItem>Indie</MenuItem>
            <MenuItem>Instagramável</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </>
  );
}
