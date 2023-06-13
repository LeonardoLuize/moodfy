import { Box, Img } from "@chakra-ui/react";
import { MapDisplay } from "../Maps";
import { Searchinput } from "../SearchInput";
import { LocalsCard } from "../LocalsCard";
import { useEffect, useSyncExternalStore } from "react";
import { useState } from "react";
import { api } from "../../lib/axios";

export function MainContent() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const scrollbarStyles = {
    "&::-webkit-scrollbar": {
      width: "4px",
    },
    "&::-webkit-scrollbar-track": {
      width: "6px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#C3C3C3",
      borderRadius: "30px",
    },
  };

  /* useEffect(() => {
    console.log(search);
    api
      .get("/Adm/getLocation.php", {
        params: {
          filters:
            tags.length > 0
              ? tags.map((tag) => tag.label).join(",")
              : undefined,
          localName: search !== "" ? search : "",
        },
      })
      .then((res) => {
        if (!res.data.id) {
          return;
        }

        setData(res.data.data);
      });
  }, [tags, search]); */

  useEffect(() => {
    const delay = setTimeout(() => {
      api
        .get("/Adm/getLocation.php", {
          params: {
            filters:
              tags.length > 0
                ? tags.map((tag) => tag.label).join(",")
                : undefined,
            localName: search !== "" ? search : "",
          },
        })
        .then((res) => {
          if (!res.data.id) {
            return;
          }

          setData(res.data.data);
        });
    }, 2000);

    return () => clearTimeout(delay);
  }, [tags, search]);

  return (
    <>
      <Box w="100%" h="100%" display="grid" gridTemplateColumns="2fr 1.5fr">
        <Box display="flex" flexDir="column" p={8}>
          <Searchinput
            tags={tags}
            setTags={setTags}
            search={search}
            setSearch={setSearch}
            data={data}
            setData={setData}
          />
          <Box css={scrollbarStyles} h="70vh" overflow="auto">
            {data.map((local) => (
              <LocalsCard local={local} />
            ))}
          </Box>
        </Box>

        <Box display="flex" flexDir="column" p={8}>
          <MapDisplay data={data} />
        </Box>
      </Box>
    </>
  );
}
