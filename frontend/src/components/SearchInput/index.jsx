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

export function Searchinput({setData}) {
  const [search, setSearch] = useState("")

  useEffect(() => {
    if(search == "") return

    axios({
      method: 'get',
      url: 'http://localhost:5435',
      params: {
        query: search,
        tags: undefined
      }
    }).then(data => {
      console.log("teste")
      setData(data)
    })
  }, [search])

  function handleSearch(e){
    e.preventDefault();
    setSearch(e.target.value)
  }

  const [visible, setVisible] = useState(true);
  const removeElement = (element) => {
    setVisible((prev) => !prev);
  };

  return (
    <>
      <InputGroup as="form" onSubmit={handleSearch}>
        <Input borderRadius="10px" p={6} placeholder="Busque um lugar" />
        <InputRightElement mt={1} mr={2} children={<SearchButton type="submit" />} />
      </InputGroup>
      <Box mt={2} display="flex" flexWrap="wrap" gap={2}>
        <Tag
          size="lg"
          colorScheme="brand"
          borderRadius="full"
          transition="background-color .2s"
          _hover={{ bg: theme.colors.brand["200"] }}
        >
          <TagLabel>Rock</TagLabel>
          <TagCloseButton onClick={removeElement}/>
        </Tag>
        <Tag
          size="lg"
          colorScheme="brand"
          borderRadius="full"
          transition="background-color .2s"
          _hover={{ bg: theme.colors.brand["200"] }}
        >
          <TagLabel>Indie</TagLabel>
          <TagCloseButton onClick={removeElement}/>
        </Tag>
        <Tag
          size="lg"
          colorScheme="brand"
          borderRadius="full"
          transition="background-color .2s"
          _hover={{ bg: theme.colors.brand["200"] }}
        >
          <TagLabel>Instagramável</TagLabel>
          <TagCloseButton onClick={removeElement}/>
        </Tag>
        <Menu>
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
