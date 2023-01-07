import React from 'react'

import {
  Box,
  Text,
 
} from "@chakra-ui/react";

const consolebox = () => {
  return (
    <>
     <Box textAlign="center" bg="#555555" p="3">
        All orders over US$79 will enjoy free standard shipping to the United
        States.
      </Box>
    <Box textAlign={"center"} mt={"4%"} mb={"4%"}>
        <Text fontSize='4xl' color="#44d62c" fontWeight={"thin"}  >CONSOLE GAMING</Text>
        <Box w="73%" margin="auto">
        <Text fontSize='xl'color="gray" fontWeight="thin" >Whether you own a PlayStation 5, Xbox Series X|S, or Nintendo Switch, enjoy complete console supremacy on any platform with our high-performance headsets, controllers, and accessories.</Text>
        </Box>
    </Box>

    </>
  )
}

export default consolebox