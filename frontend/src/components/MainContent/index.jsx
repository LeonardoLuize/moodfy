import { Box, Img } from "@chakra-ui/react";
import MoodyLogo from "../../assets/moody.svg"
import {MapDisplay} from "../Maps"
import { Searchinput } from "../SearchInput";

export function MainContent(){
    return(
        <>
            <Box w="100%" h="100%" display="grid" gridTemplateColumns="2fr 2fr" >
                <Box display="flex" flexDir="column" p={8}>
                    <Searchinput />
                </Box>

                <Box display="flex" flexDir="column" p={8}>
                    <Img mb={8} alignSelf="flex-end" src={MoodyLogo} />
                    <MapDisplay />
                </Box>
            </Box>
        </>
    );
}