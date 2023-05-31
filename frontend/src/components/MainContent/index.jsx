import { Box, Img } from "@chakra-ui/react";
import {MapDisplay} from "../Maps"
import { Searchinput } from "../SearchInput";

export function MainContent(){
    return(
        <>
            <Box w="100%" h="100%" display="grid" gridTemplateColumns="2fr 1.5fr" >
                <Box display="flex" flexDir="column" p={8}>
                    <Searchinput />
                </Box>

                <Box display="flex" flexDir="column" p={8}>
                    <MapDisplay />
                </Box>
            </Box>
        </>
    );
}