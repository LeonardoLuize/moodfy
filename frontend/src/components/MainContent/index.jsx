import { Box, Img } from "@chakra-ui/react";
import {MapDisplay} from "../Maps"
import { Searchinput } from "../SearchInput";
import {LocalsCard} from "../LocalsCard";
import { useEffect, useSyncExternalStore } from "react";
import {useState} from "react"
import { api } from "../../lib/axios";

export function MainContent(){
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")
    const [tags, setTags] = useState("rock")

    useEffect(() => {
        // exemplo de chamada a api
        // precisa usar a "/Adm/getLocalsByFilter.php" para o search
        // mas ela ainda não aceita uma string, apenas as tags mesmo
        // para pegar mais de uma tag tem que concatenar com a virgula "rock,pop"
            api.get("/Adm/getLocalsByFilter.php", {params: {filters: tags}}).then(res => {
                setData(res.data)
                console.log(res)
            })
    }, [tags])

    return(
        <>
            <Box w="100%" h="100%" display="grid" gridTemplateColumns="2fr 1.5fr" >
                <Box display="flex" flexDir="column" p={8}>
                    <Searchinput search={search} setSearch={setSearch} data={data} setData={setData} />
                    <LocalsCard />  
                </Box>

                <Box display="flex" flexDir="column" p={8}>
                    <MapDisplay data={data} />
                </Box>
            </Box>
        </>
    );
}