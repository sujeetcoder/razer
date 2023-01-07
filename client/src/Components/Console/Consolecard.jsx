import React from 'react'
import styles from "../../Styles/console.module.css"
import {
    Box,
    Text,
    Flex,
    Card,
    Image,
    CardBody
  } from "@chakra-ui/react";

export const Consolecard = () => {
  return (
   <>
    <Box p="5%" bg="#252525" pt={"3%"} pb="2%">

        <Box textAlign={"center"}>
        <Text fontSize='4xl' color="white" fontWeight={"thin"}>GAME. SET. MATCH.</Text>
        <Text fontSize='2xl' color="gray" fontWeight={"light"}>Introducing our White Edition headsets and controllers for Xbox Series X|S.</Text>
         </Box >
          <Flex gap={"1%"} mt="4%">
            
            <Card
            maxW="sm"
            bg="#111111"
            variant="filled"
            borderRadius="0"
            borderBottom={"1.5px solid #44d62c"}
          >
            <Image bgColor={"black"} src="https://assets2.razerzone.com/images/pnx.assets/659b9c018fff41847dfe1cb0e1706b7f/razer-wolverine-v2-white_500x500.png" />
            <CardBody textAlign="left">
              <Text mb="2">RAZER WOLVERINE V2</Text>
              <Text fontWeight="thin" mb="2"  color="gray">
              Wired Gaming Controller for Xbox Series X|S with additional remappable front-facing buttons
              </Text>
              <Text fontWeight="light" color="#44d62c" mt="5%">
                Learn More{" "}
              </Text>
            </CardBody>
          </Card>
            
            
            
            <Card
            maxW="sm"
            bg="#111111"
            variant="filled"
            borderRadius="0"
            borderBottom={"1.5px solid #44d62c"}
          >
            <Image bgColor={"black"} src="https://assets2.razerzone.com/images/pnx.assets/659b9c018fff41847dfe1cb0e1706b7f/razer-wolverine-v2-white_500x500.png" />
            <CardBody textAlign="left">
              <Text mb="2">RAZER WOLVERINE V2 CHROMA WHITE</Text>
              <Text fontWeight="thin" mb="2"  color="gray" >
              Fully Customizable Xbox Series X|S Controller with RGB Lighting
              </Text>
              <Text fontWeight="light" color="#44d62c" mt="5%">
                Learn More{" "}
              </Text>
            </CardBody>
          </Card>
          
          
          <Card
            maxW="sm"
            bg="#111111"
            variant="filled"
            borderRadius="0"
            borderBottom={"1.5px solid #44d62c"}
          >
            <Image bgColor={"black"} src="https://assets2.razerzone.com/images/pnx.assets/659b9c018fff41847dfe1cb0e1706b7f/500x500-kaira-white.png" />
            <CardBody textAlign="left">
              <Text mb="2">RAZER KAIRA FOR XBOX</Text>
              <Text fontWeight="thin" mb="2"  color="gray" >
              Wireless Xbox Series X|S headset with cutting-edge drivers and mic
              </Text>
              <Text fontWeight="light" color="#44d62c" mt="5%">
                Learn More{" "}
              </Text>
            </CardBody>
          </Card>  
          <Card
            maxW="sm"
            bg="#111111"
            variant="filled"
            borderRadius="0"
            borderBottom={"1.5px solid #44d62c"}
          >
            <Image bgColor={"black"} src="https://assets2.razerzone.com/images/pnx.assets/659b9c018fff41847dfe1cb0e1706b7f/500x500-kaira-white.png" />
            <CardBody textAlign="left">
              <Text mb="2">RAZER KAIRA PRO FOR XBOX</Text>
              <Text fontWeight="thin" mb="2" color="gray" >
              Wireless, Bluetooth-capable Xbox Series X|S headset that supports mobile Xbox gaming
              </Text>
              <Text fontWeight="light" color="#44d62c" mt="5%">
                Learn More{" "}
              </Text>
            </CardBody>
          </Card>
          
          
          </Flex>
    </Box>
    



    <Box textAlign={"left"} borderBottom={"1px solid #44d62c"} >
        <Box className={styles.big_boxx_last} w="100%" pt="2%" pl="2%">
          <Text fontSize='3xl' color="white" w="30%" fontWeight={"thin"}>GAMEPADS ENGINEERED FOR TOTAL CONTROL</Text>
          <Text fontSize='2xl' color="gray" w="30%" fontWeight={"light"}>See how the Razer Raiju goes from the drawing board and into your hands, thanks to a combination of science, design and engineering.</Text>
          <Flex justifyContent={"left"} gap="10px" mt="1%">
            <Text color="#44d62c" _hover={{textDecoration:'underline'}}
             fontSize='2xl' fontWeight={"thin"}>learn more</Text>
            <Box color="#44d62c">{">"}</Box>
          </Flex>
        </Box>
        </Box>
   
   
   </>
  )
}
