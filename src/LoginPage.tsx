import { useAuth0 } from '@auth0/auth0-react';
import { Box, Typography } from '@mui/material';
import React from 'react'
import Buttons from './components/molecules/Button';
import loginImage from './images/loginImage1.webp';

function LoginPage() {
    const { loginWithRedirect } = useAuth0();
    const {logout}=useAuth0();
  return (
    <Box position={"absolute"} top={"25%"} width={"100%"}>
      <Box display={"flex"} justifyContent="center">
      <Box width="60%" >
        <Box width={"80%"} padding={"5% 10%"}>
        <Typography fontSize={"36px"} fontWeight={700} lineHeight={"45.25px"} width={"50%"} padding={"0% 25%"} textAlign={"left"}>
        Read Read Read…!
        </Typography>
        <Typography fontSize={"20px"} fontWeight={400} lineHeight={"25px"} width={"50%"} padding={"30px 25%"} textAlign={"left"}>
        "A reader lives a thousand lives before he dies . . . The man who never reads lives only one.”
        </Typography>
        <Box display={"flex"} justifyContent={"center"} padding={"30px"}>
        <Buttons name={"Log in"} onClick={() => loginWithRedirect()} classing={'connect'} icon={undefined} end={undefined} />
        </Box>
        </Box>
        </Box>
      <Box width="40%" display={"flex"} justifyContent={"flex-start"}>
      <Box>
        <img
          src={loginImage}
          alt="Login Image"
          height={"400px"}
          width={"400px"}
        />
      </Box>
      </Box>
      </Box>
    </Box>
  )
}

export default LoginPage;