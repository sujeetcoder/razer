import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useMedia } from '../../MediaQuery/UseMedia'

const CategoryComp = ({smUrl,mdUrl,lgUrl,title,des,lUrl,lData}) => {
    const {smallScreen,mediumScreen} = useMedia()
  return (
    <Box  w="100%" display="flex" justifyContent={"center"} borderBottom={"0.5px solid #44d62c"}>
        <Box w="100%">
        <Image w="100%" h={!smallScreen?"450px": "100%"} src={!smallScreen? smUrl || mdUrl : !mediumScreen? mdUrl : lgUrl} alt="image" />
        </Box>
        <Box w={["95%","90%","80%","70%","60%"]}  m="auto"  position={"absolute"}  mt="20px" zIndex={2} >
        <Text lineHeight={["26px","30px","32px",null,"35px"]} fontSize={!smallScreen?"xl": '3xl'} color="white" fontWeight={"thin"}> {title} </Text>
        <Text fontSize={!smallScreen && des.length>74?'md':"lg"} color="gray" lineHeight={!smallScreen && des.length>74?"20px":["26px","30px","32px",null,"35px"]} fontWeight={"light"} mt="5px"> {des} </Text>

        {!lData && <Link to={lUrl || "#"} ><Flex justifyContent={"center"}  gap="10px" mt="10px">
            <Text color="#44d62c" _hover={{textDecoration:'underline'}} fontSize='mg ' >learn more</Text>
            <Text color="#44d62c">{">"}</Text>
          </Flex> </Link> }

        <Flex m="auto" flexDirection={!smallScreen?"column":"row"} justifyContent="space-around" textAlign="center" w={!smallScreen?"95&":"60%"}>
        {lData && lData.map((el,i)=>(
            <Link to={el.link || "#"} key={i} ><Flex justifyContent={"center"}  gap="10px" mt="10px">
            <Text color="#44d62c" _hover={{textDecoration:'underline'}} fontSize='mg ' >{el.title} </Text>
            <Text color="#44d62c">{">"}</Text>
          </Flex> </Link>
        ))}
        </Flex>

        </Box>
    </Box>
  )
}

export default CategoryComp