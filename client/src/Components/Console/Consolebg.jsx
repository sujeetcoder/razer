import React from 'react'

import {
    Box,
    Text,
    Flex,
  } from "@chakra-ui/react";
 import styles from "../../Styles/console.module.css"
  
const consolebg = () => {
  return (
    <>
       
        
        <Box textAlign={"center"} borderBottom={"1px solid #44d62c"}>
        <Box className={styles.big_boxx} w="100%" pt="4%" >
          <Text fontSize='4xl' color="white" fontWeight={"thin"}>RAZER WOLVERINE V2 PRO</Text>
          <Text fontSize='2xl' color="gray" fontWeight={"light"}>Wireless Pro Gaming Controller for PS5™ and PC</Text>
          <Flex justifyContent={"center"} gap="10px" mt="2%">
            <Text color="#44d62c" _hover={{textDecoration:'underline'}} fontSize='2xl ' >learn more</Text>
            <Box color="#44d62c">{">"}</Box>
          </Flex>
        </Box>
        </Box>
 
 
 
 <Box  bg="#252525" pl={"8%"}>
        <Flex p="7"  gap="10" >
        <Box textAlign={"center"} borderBottom={"1px solid #44d62c"}>
        <Box className={styles.small_boxx1}  pt="7%" >
          <Text fontSize='3xl' color="white" fontWeight={"thin"} >RAZER LIMITED EDITION</Text>
          <Text fontSize='2xl' color="gray" fontWeight={"light"} >Play Anywhere. Carry Everywhere.</Text>
          <Flex justifyContent={"center"} gap="10px" mt="2%">
            <Text color="#44d62c" _hover={{textDecoration:'underline'}} fontSize='2xl ' >learn more</Text>
            <Box color="#44d62c">{">"}</Box>
          </Flex>
        </Box>
        </Box><Box textAlign={"center"} borderBottom={"1px solid #44d62c"}>
        <Box className={styles.small_boxx}  pt="7%" >
          <Text fontSize='3xl' color="white" fontWeight={"thin"}>RAZER HAMMERHEAD HYPERSPEED</Text>
          <Text fontSize='2xl' color="gray" fontWeight={"light"}>Play Anywhere. Carry Everywhere.</Text>
          <Flex justifyContent={"center"} gap="10px" mt="2%">
            <Text color="#44d62c" _hover={{textDecoration:'underline'}} fontSize='2xl ' >learn more</Text>
            <Box color="#44d62c">{">"}</Box>
          </Flex>
        </Box>
    </Box>
</Flex>
   
</Box>




<Box textAlign={"center"} borderBottom={"1px solid #44d62c"}>
        <Box className={styles.big_boxx2} w="100%" pt="2%" >
          <Text fontSize='4xl' color="white" fontWeight={"thin"}>RAZER HAMMERHEAD HYPERSPEED</Text>
          <Text fontSize='2xl' color="gray" fontWeight={"light"}>Play Anywhere. Carry Everywhere.</Text>
          <Flex justifyContent={"center"} gap="10px" mt="1%">
            <Text color="#44d62c" _hover={{textDecoration:'underline'}} fontSize='2xl ' >learn more</Text>
            <Box color="#44d62c">{">"}</Box>
          </Flex>
        </Box>
        </Box>
<Box textAlign={"center"} borderBottom={"1px solid #44d62c"}>
        <Box className={styles.big_boxx3} w="100%" pt="4%" >
          <Text fontSize='4xl' color="white" fontWeight={"thin"}>STORMTROOPER LIMITED EDITION</Text>
          <Text fontSize='2xl' color="gray" fontWeight={"light"}>Officially Licensed Xbox Controller and Quick Charging Stand</Text>
          <Flex justifyContent={"center"} gap="10px" mt="2%">
            <Text color="#44d62c" _hover={{textDecoration:'underline'}} fontSize='2xl ' >learn more</Text>
            <Box color="#44d62c">{">"}</Box>
          </Flex>
        </Box>
        </Box>
<Box textAlign={"center"} borderBottom={"1px solid #44d62c"}>
        <Box className={styles.big_boxx4} w="100%" pt="4%" >
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

export default consolebg