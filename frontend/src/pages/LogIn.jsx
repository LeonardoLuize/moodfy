import { Box, Input } from "@chakra-ui/react";
import LogInArt from "../assets/login-art.jpg"

export function LogInPage(){
    return(
        <Box display="flex" w="100%" h="100vh" alignItems="center" justifyContent="center">
            <Box display="grid" gridTemplateColumns="1fr 1fr" w="70%" h="600px" bg="whiteAlpha.100" borderRadius="20" boxShadow="2px 3px 40px -4px rgba(0,0,0,0.48)">
                <Box display="flex" alignItems="center" justifyContent="center">
                    <Text>Log In</Text>
                    <Input type="email" />
                    <Input type="password" />
                </Box>
                <Box display="flex" backgroundImage={LogInArt} backgroundSize="cover" borderRadius="0 20px 20px 0">
                </Box>
            </Box>
        </Box>
    );
}