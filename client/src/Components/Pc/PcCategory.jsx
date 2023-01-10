import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useMedia } from '../../MediaQuery/UseMedia'

const PcCategory = ({smUrl,mdUrl,lgUrl,title,des,lUrl,lData,buttonText}) => {
    const {smallScreen,mediumScreen,midBr} = useMedia()
    const lgStyle = {
      backgroundImage: `url(${lgUrl})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      minHeight: "700px",
      zIndex: 1,
      backgroundSize: "cover",
      cursor: "pointer"
    }
    const mdStyle = {
      backgroundImage: `url(${mdUrl || lgUrl})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      minHeight: "700px",
      zIndex: 1,
      backgroundSize: "cover",
      cursor: "pointer"
    }
    const smStyle = {
      backgroundImage: `url(${smUrl || mdUrl || lgUrl})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      minHeight: "500px",
      zIndex: 1,
      backgroundSize: "cover",
      cursor: "pointer"
    }


  return (
    <Box  w="100%" display="flex" style={!smallScreen?smStyle:midBr?lgStyle:mdStyle} justifyContent={"center"} borderBottom={"0.5px solid #44d62c"}>
        <Box w={["95%","90%","80%","70%","60%"]}  m="auto"  position={"absolute"}  mt="40px" zIndex={2} >
        <Text lineHeight={["26px","30px","32px","45px","45px"]} fontSize={!smallScreen?"xl": '3xl'} color="white" fontWeight={"thin"}> {title} </Text>
        <Text fontSize={!smallScreen && des.length>74?'md':"lg"} color="gray" lineHeight={!smallScreen && des.length>74?"20px":["26px","30px","32px",null,"35px"]} fontWeight={"light"} mt="5px"> {des} </Text>

        {!lData && <Link to={lUrl || "#"} ><Flex m="auto" justifyContent={"center"}  style={{width:"fit-content"}}  gap="10px" mt="10px">
            <Text color="#44d62c" _hover={{textDecoration:'underline'}} fontSize='mg ' >{buttonText?buttonText:"learn more"}</Text>
            <Text color="#44d62c">{">"}</Text>
          </Flex> </Link> }

        <Flex m="auto" flexDirection={!smallScreen?"column":"row"} justifyContent="space-around" textAlign="center" w={!smallScreen?"95&":["95%","95%","80%","75%","60%"]}>
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

export default PcCategory