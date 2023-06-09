import { Box, Img, Spinner } from "@chakra-ui/react";
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
  const [isLoading, setIsLoading] = useState(true);
  const [userLocation, setUserLocation] = useState([]);
  const [map, setMap] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation([position.coords.latitude, position.coords.longitude]);
    });
  }, []);

  useEffect(() => {
    if (map) {
      let location =
        userLocation.length > 0 ? userLocation : [-25.4528, -49.2508];
      map.setView(location, 13);
    }
  }, [userLocation]);

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

  useEffect(() => {
    setIsLoading(true);
    const delay = setTimeout(() => {
      api
        .get("/Adm/facade.php", {
          params: {
            filters:
              tags.length > 0
                ? tags.map((tag) => tag.label).join(",")
                : undefined,
            localName: search !== "" ? search : undefined,
          },
        })
        .then((res) => {
          setIsLoading(false);
          if (res.data && res.data.length > 0) setData(res.data);
          if (map) {
            map.setView([-25.4528, -49.2508], 13);
          }
        });
    }, 500);

    return () => clearTimeout(delay);
  }, [tags, search]);

  return (
    <>
      <Box
        w="100%"
        h="100%"
        display={["flex", "flex", "grid"]}
        flexDir="column"
        gridTemplateColumns="2fr 1.5fr"
      >
        <Box display="flex" flexDir="column" p={8}>
          <Searchinput
            tags={tags}
            setTags={setTags}
            search={search}
            setSearch={setSearch}
            data={data}
            setData={setData}
          />
          <Box
            css={scrollbarStyles}
            h={["300px", "300px", "80vh"]}
            mt={5}
            overflow="auto"
          >
            {isLoading ? (
              <Box
                h="full"
                w="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Spinner
                  thickness="6px"
                  speed="0.65s"
                  emptyColor="gray.100"
                  color="green.500"
                  size="xl"
                ></Spinner>
              </Box>
            ) : (
              data.map((local) => <LocalsCard key={`card-${local.id}`} map={map} local={local} />)
            )}
          </Box>
        </Box>

        <Box display="flex" flexDir="column" p={8} h={["500px", "500px", "full"]}>
          <MapDisplay setMap={setMap} map={map} data={data} />
        </Box>
      </Box>
    </>
  );
}
