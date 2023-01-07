import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const SingleBox = ({title,des,link,img}) => {
  return (
    <Box borderBottom={"0.5px solid #44d62c"}>
        <Image w={"100%"} src={img} />
        <Flex border={"1px solid red"} flexDirection={"column"} bgColor={"#000000"} p="3px" justifyContent={"space-between"} textAlign={"left"}>
            <Box border={"1px solid blue"}>
            <Text fontSize={"2xl"} >{title} </Text>
            <Text letterSpacing="1px" color="#a593a1" /* style={{flexGrow:1}} */>{des} </Text>
            </Box>
            <Box>
            <Link to={link || "#"} ><Flex justifyContent={"left"}  gap="10px" mt="10px">
            <Text color="#44d62c" _hover={{textDecoration:'underline'}} fontSize='md' >learn more</Text>
            <Text /* mt="8px" */ color="#44d62c">{">"}</Text>
          </Flex> </Link> 
          </Box>
        </Flex>
    </Box>
  )
}

export default SingleBox