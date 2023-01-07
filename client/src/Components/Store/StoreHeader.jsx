import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const StoreHeader = () => {
  return (
    <Flex w={"90%"} m="auto" mt={10} mb={20} >
       <Box h="120px" w="14%" cursor="pointer" _hover={{color:"#44d62c"}}>
        <Image src='https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-blade-16_200x150.png' alt="err" w={"70%"} m={"auto"}/>
        <Text _hover={{color:"#44d62c"}} fontSize="16px">Laptops</Text>
       </Box>
       <Box h="120px" w="13%" cursor="pointer" _hover={{color:"#44d62c"}}>
        <Image src='https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-store-v2_components_icon_188x150.png' alt="err" w={"70%"} m={"auto"}/>
        <Text _hover={{color:"#44d62c"}} fontSize="16px">Components</Text>
       </Box>
       <Box h="120px" w="13%" cursor="pointer" _hover={{color:"#44d62c"}}>
        <Image src='https://assets2.razerzone.com/images/pnx.assets/d3c009aecfca0d406f63fe42575891e5/razer-basilisk-v3-pro_90x150.png' alt="err" w={"37%"} m={"auto"}/>
        <Text _hover={{color:"#44d62c"}} fontSize="16px">Mice</Text>
       </Box>
       <Box h="120px" w="13%" cursor="pointer" _hover={{color:"#44d62c"}}>
        <Image src='https://assets2.razerzone.com/images/pnx.assets/8a4cf27b0557ec77704bd4de1d471a17/tenkeyless_2x.png' alt="err" w={"70%"} m={"auto"}/>
        <Text _hover={{color:"#44d62c"}} fontSize="16px">Keyboards</Text>
       </Box>
       <Box h="120px" w="13%" cursor="pointer" _hover={{color:"#44d62c"}}>
        <Image src='https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-store-v2_audio_icon_168x150.png' alt="err" w={"70%"} m={"auto"}/>
        <Text _hover={{color:"#44d62c"}} fontSize="16px">Audio</Text>
       </Box>
       <Box h="120px" w="13%" cursor="pointer" _hover={{color:"#44d62c"}}>
        <Image src='https://assets2.razerzone.com/images/pnx.assets/d3c009aecfca0d406f63fe42575891e5/razer-kiyo-pro-ultra_118x150.png' alt="err" w={"52%"} m={"auto"}/>
        <Text _hover={{color:"#44d62c"}} fontSize="16px">Streaming</Text>
       </Box>
       <Box h="120px" w="13%" cursor="pointer" _hover={{color:"#44d62c"}}>
        <Image src='https://assets2.razerzone.com/images/pnx.assets/d3c009aecfca0d406f63fe42575891e5/chair-front-bright_2x.png' alt="err" w={"35%"} m={"auto"}/>
        <Text _hover={{color:"#44d62c"}} fontSize="16px">Chairs</Text>
       </Box>
       <Box h="120px" w="13%" cursor="pointer" _hover={{color:"#44d62c"}}>
        <Image src='https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-wolverine-v2-pro-white_144x150.png' alt="err" w={"60%"} m={"auto"}/>
        <Text _hover={{color:"#44d62c"}} fontSize="16px">Console</Text>
       </Box>
       <Box h="120px" w="13%" cursor="pointer" _hover={{color:"#44d62c"}}>
        <Image src='https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-edge_186x150.png' alt="err" w={"78%"} m={"auto"}/>
        <Text _hover={{color:"#44d62c"}} fontSize="16px">Mobile</Text>
       </Box>
       <Box h="120px" w="13%" cursor="pointer" _hover={{color:"#44d62c"}}>
        <Image src='https://assets2.razerzone.com/images/pnx.assets/8a4cf27b0557ec77704bd4de1d471a17/rogue-15-chromatic_2x.png' alt="err" w={"48%"} m={"auto"}/>
        <Text _hover={{color:"#44d62c"}} fontSize="16px">Gear</Text>
       </Box>
    </Flex>
  )
}

export default StoreHeader