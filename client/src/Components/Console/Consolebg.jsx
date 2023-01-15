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
 
 <Box  bg="#252525" pl={"8%"}>
        <Flex p="7"  gap="10" flexDirection={["column","column","column","row",'row']}>
        <Box textAlign={"center"} borderBottom={"1px solid #44d62c"}>
        <Box className={styles.small_boxx1}  pt="7%" >
          <Text fontSize='3xl' color="white" fontWeight={"thin"} >RAZER LIMITED EDITION</Text>
          <Text fontSize='2xl' color="gray" fontWeight={"light"} >Play Anywhere. Carry Everywhere.</Text>
          <Flex justifyContent={"center"} gap="10px" mt="2%">
            <Text color="#44d62c" _hover={{textDecoration:'underline'}} fontSize='2xl'><a href='big.jsx'>learn more</a></Text>
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





       
    </>
  )
}

export default consolebg