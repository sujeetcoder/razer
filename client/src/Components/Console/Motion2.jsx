import React from "react";
import Aos from "aos"
 import "aos/dist/aos.css"
 import { useEffect } from 'react'
 import {Box,Flex,Text,Image,SimpleGrid} from "@chakra-ui/react"


const Motion2 = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
      }, []);
  return (
    <>
     <Box  bgColor="#433F3E " mt="10%">
        <Box pl={"10%"} pr={"10%"} pt={"5%"}>
            <Text fontSize='5xl'   color={"#44d62c"}>ADVANCED APP CONFIGURATION</Text>
            <Text color={"gray"} fontSize="xl">Download the Razer™ Controller App to customize the controller to match your playstyle. Easily remap buttons, adjust lighting effects, and pin-point sensitivity settings.
</Text>
        </Box>
        <Box data-aos="fade-up" >
      <Flex gap={"2%"} justifyContent="center" pt={"3%"}>
     <Image src="https://assets2.razerzone.com/images/pnx.assets/090ab06a0aa60e75c2c1b8c5f221e257/app-store.png" />
     <Image src="https://assets2.razerzone.com/images/pnx.assets/090ab06a0aa60e75c2c1b8c5f221e257/google-play.png" />
      </Flex>
    </Box>

    <Box alignItems={"center"}>
        <SimpleGrid alignItems={"center"} justifyItems="center" columns={[1,2,4,4]} p={"6%"} gap="20px" flexDirection={["column","column","column","row",'row']}>
            <Image data-aos="fade-up" src="https://assets2.razerzone.com/images/pnx.assets/090ab06a0aa60e75c2c1b8c5f221e257/razer-wolverine-v2-pro-app_screens-01-v2.jpg"/>
            <Image data-aos="fade-up" src="https://assets2.razerzone.com/images/pnx.assets/090ab06a0aa60e75c2c1b8c5f221e257/razer-wolverine-v2-pro-app_screens-02-v2.jpg"/>
            <Image data-aos="fade-up" src="https://assets2.razerzone.com/images/pnx.assets/090ab06a0aa60e75c2c1b8c5f221e257/razer-wolverine-v2-pro-app_screens-03-v2.jpg"/>
            <Image data-aos="fade-up" src="https://assets2.razerzone.com/images/pnx.assets/090ab06a0aa60e75c2c1b8c5f221e257/razer-wolverine-v2-pro-app_screens-04-v2.jpg"/>
        </SimpleGrid >
    </Box>
 </Box>
  <Box>
  <Text fontSize='5xl' pt={"5%"}  color={"#44d62c"}>ADVANCED APP CONFIGURATION</Text>
  <Image data-aos="fade-up" pt={"5%"} pl={"45%"}  pr={"45%"} src="https://assets2.razerzone.com/images/pnx.assets/86ac9ea57efaea4f745f84509a598e17/razer-chroma-rgb-white.png"/>
  <Image data-aos="fade-up" pl={"20%"} pr={"20%"} mt={["-10px","-50","-70px","-200"]} src="https://assets2.razerzone.com/images/pnx.assets/86ac9ea57efaea4f745f84509a598e17/black-wolverine-rgb.gif"/>
  </Box>
   
    </>
  )
}

export default Motion2