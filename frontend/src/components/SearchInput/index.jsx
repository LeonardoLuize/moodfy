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
import { useState, useEffect } from "react";
import { api } from "../../lib/axios";

function SearchButton() {
  return (
    <Button borderRadius="10px" colorScheme={"brand"} size="md">
      <Icon as={MagnifyingGlass} w={5} h={5} />
    </Button>
  );
}

export function Searchinput({
  search,
  setSearch,
  data,
  setData,
  tags,
  setTags,
}) {
  const [visible, setVisible] = useState(true);
  const [allTags, setAllTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const removeElement = (element) => {
    setVisible((prev) => !prev);
  };

  function handleSearch(e) {
    e.preventDefault();
    setSearch(search);
  }

  function handleRemoveTag(tag) {
    let newTags = tags.filter((x) => x.value !== tag.value);
    setTags(newTags);
  }

  function handleSetTags(tag) {
    let hasTag = tags.find((x) => x === tag);

    if (hasTag) {
      return;
    }
    setTags([...tags, tag]);
  }

  useEffect(() => {
    api.get("/Adm/getAllFilters.php").then((res) => {
      let filteredTags = res.data.data.map((tag) => {
        return {
          label: tag[1],
          value: tag[0],
        };
      });

      setAllTags(filteredTags);
    });
  }, [setAllTags]);

  return (
    <>
      <InputGroup as="form" onSubmit={handleSearch}>
        <Input value={search} onChange={(e) => setSearch(e.target.value)} borderRadius="10px" p={6} placeholder="Busque um lugar" />
        <InputRightElement
          mt={1}
          mr={2}
        />
      </InputGroup>
      <Box mt={2} display="flex" flexWrap="wrap" gap={2}>
        {tags.map((tag) => (
          <Tag
            size="lg"
            colorScheme="brand"
            borderRadius="full"
            transition="background-color .2s"
            _hover={{ bg: theme.colors.brand["200"] }}
          >
            <TagLabel>{tag.label}</TagLabel>
            <TagCloseButton onClick={() => handleRemoveTag(tag)} />
          </Tag>
        ))}
        <Menu onChange={(e) => handleSetTags(e)}>
          <MenuButton
            borderRadius="full"
            as={Button}
            colorScheme="brand"
            leftIcon={<Icon as={PlusCircle} w={5} h={5} />}
          >
            Adicionar Filtro
          </MenuButton>
          <MenuList p={2}>
            <Input my={2} onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
            {allTags.filter(x => x.label.includes(inputValue)).map((tag) => (
              !tags.find((x) => x.value === tag.value) && (
                <MenuItem onClick={() => handleSetTags(tag)}>
                  {tag.label}
                </MenuItem>
              )
            ))}
          </MenuList>
        </Menu>
      </Box>
    </>
  );
}
