import React from 'react'
import {
    Box,
    Text,
    Flex,
  } from "@chakra-ui/react";
 import styles from "../../Styles/console.module.css"
  

const Consolebgtwo = () => {
  return (
   <>
   <Box textAlign={"center"} borderBottom={"1px solid #44d62c"}>
        <Box className={styles.big_boxx5} w="100%" pt="2%" >
          <Text fontSize='4xl' color="white" fontWeight={"thin"}>GAME. SET. MATCH.</Text>
          <Text fontSize='2xl' color="gray" fontWeight={"light"}>Choose from several striking colors and keep the theme of your Xbox Series X|S setup consistent with a quick charging stand and headset that perfectly matches your official Xbox Wireless Controller.</Text>
          <Flex justifyContent={"center"} gap="10px" mt="1%">
            <Text color="#44d62c" _hover={{textDecoration:'underline'}}
             fontSize='2xl ' >Explore your desired color combo</Text>
            <Box color="#44d62c">{">"}</Box>
          </Flex>
        </Box>
        </Box>
<Box textAlign={"center"} borderBottom={"1px solid #44d62c"}>
        <Box className={styles.big_boxx6} w="100%" pt="4%" >
          <Text fontSize='4xl' color="white" fontWeight={"thin"}>RAZER KAIRA PRO</Text>
          <Text fontSize='2xl' color="gray" fontWeight={"light"}>Dual Wireless PlayStation 5 Headset with Haptics</Text>
          <Flex justifyContent={"center"} gap="10px" mt="2%">
            <Text color="#44d62c" _hover={{textDecoration:'underline'}} fontSize='2xl ' >learn more</Text>
            <Box color="#44d62c">{">"}</Box>
          </Flex>
        </Box>
        </Box>
<Box textAlign={"center"} borderBottom={"1px solid #44d62c"}>
        <Box className={styles.big_boxx7} w="100%" pt="4%" >
          <Text fontSize='4xl' color="white" fontWeight={"thin"}>RAZER WOLVERINE V2 CHROMA</Text>
          <Text fontSize='2xl' color="gray" fontWeight={"light"}>Fully Customizable Xbox Series X|S, Xbox One, and PC Controller</Text>
          <Flex justifyContent={"center"} gap="10px" >
            <Text color="#44d62c" _hover={{textDecoration:'underline'}} fontSize='2xl ' >learn more</Text>
            <Box color="#44d62c">{">"}</Box>
          </Flex>
        </Box>
        
        </Box>
<Box textAlign={"center"} borderBottom={"1px solid #44d62c"}>
        <Box className={styles.big_boxx9} w="100%" pt="4%" >
          <Text fontSize='4xl' color="white" fontWeight={"thin"}>SONIC THE HEDGEHOG LIMITED EDITION</Text>
          <Text fontSize='2xl' color="gray" fontWeight={"light"}>Officially Licensed Xbox Controller and Quick Charging Stand</Text>
          <Flex justifyContent={"center"} gap="10px" >
            <Text color="#44d62c" _hover={{textDecoration:'underline'}} fontSize='2xl ' >learn more</Text>
            <Box color="#44d62c">{">"}</Box>
          </Flex>
        </Box>

        </Box>
       
   </>
  )
}

export default Consolebgtwo