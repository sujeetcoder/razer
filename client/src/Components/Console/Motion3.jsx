
import React from 'react'
import {Box,Flex,Image,} from "@chakra-ui/react"

const Motion3 = () => {
  return (
    <>
    <Box pt={"5%"} pl="20%">
        <Flex alignItems={"baseline"} gap="7%"  >
            <Box>
                <Image w={["400px"]}/*  h="80px" */ src='https://assets2.razerzone.com/images/pnx.assets/53fbbaddf28e7866d051fa802e25881e/wolverine-v2-chroma-table-wolverine-top.jpg'/>
                <Image src='https://assets2.razerzone.com/images/pnx.assets/53fbbaddf28e7866d051fa802e25881e/wolverine-v2-chroma-table-wolverine-2.jpg'/>
            </Box>
            <Box>
                <Image   src='https://assets2.razerzone.com/images/pnx.assets/53fbbaddf28e7866d051fa802e25881e/wolverine-v2-chroma-table-wolverine-chroma-1.gif'/>
                <Image w={["150px","180px","auto",null,null]} src='https://assets2.razerzone.com/images/pnx.assets/1fac324ae75e6767877704c75c779510/razer-wolverine-v2-chroma-logo.jpg'/>
            </Box>
            <Box>
                <Image w={"50%"} src='https://assets2.razerzone.com/images/pnx.assets/1fac324ae75e6767877704c75c779510/razer-wolverine-v2-pro-white-animation.gif'/>
                <Image w={["150px","180px","auto",null,null]}  src='https://assets2.razerzone.com/images/pnx.assets/1fac324ae75e6767877704c75c779510/razer-wolverine-v2-pro-logo.jpg'/>
            </Box>
        </Flex>
    </Box>
    <Box>
        
    </Box>
    </>
  )
}

export default Motion3