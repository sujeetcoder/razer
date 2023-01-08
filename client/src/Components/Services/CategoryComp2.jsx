import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useMedia } from '../../MediaQuery/UseMedia'

const CategoryComp2 = ({smUrl,mdUrl,lgUrl,title,des,lUrl,lData,buttonText}) => {
  let des2 = des.split("<br/>")
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
    backgroundImage: `url(${mdUrl||lgUrl})`,
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
    <Box>
    <Box  w="100%"  style={!smallScreen?smStyle:midBr?lgStyle:mdStyle} display="flex" justifyContent={"center"}>
      {midBr &&  <Box w={["95%","90%","80%","70%","60%"]}  m="auto"  position={"absolute"}  mt="20px" zIndex={2} >
        <Text lineHeight={["26px","30px","32px",null,"35px"]} fontSize={!smallScreen?"xl": '3xl'} color="white" fontWeight={"thin"} mb="18px" > {title} </Text>
        <Text fontSize={!smallScreen && des.length>74?'md':"lg"} color="gray" lineHeight={"base"} fontWeight={"light"} mt="5px"> {des2 && des2.map((el2,i2)=>(<span key={i2}>{el2}<br/><br/> </span>))} </Text>

        {!lData && <Link to={lUrl || "#"} ><Flex justifyContent={"center"}  gap="10px" mt="-20px">
            <Text color="#44d62c" _hover={{textDecoration:'underline'}} fontSize='mg ' >{buttonText?buttonText:"learn more"}</Text>
            <Text color="#44d62c">{">"}</Text>
          </Flex> </Link> }

        <Flex m="auto" flexDirection={!smallScreen?"column":"row"} justifyContent="space-around" textAlign="center" w={!smallScreen?"955":["95%","95%","80%","75%","60%"]}>
        {lData && lData.map((el,i)=>(
            <Link to={el.link || "#"} key={i} ><Flex justifyContent={"center"}  gap="10px" mt="10px">
            <Text color="#44d62c" _hover={{textDecoration:'underline'}} fontSize='mg ' >{el.title} </Text>
            <Text color="#44d62c">{">"}</Text>
          </Flex> </Link>
        ))}
        </Flex>

        </Box>}
    </Box>
    {!midBr &&  <Box w="100%"  textAlign={"left"} p="20px"   mt="20px" >
        <Text lineHeight={["26px","30px","32px",null,"35px"]} fontSize={!smallScreen?"xl": '3xl'} color="white" fontWeight={"thin"}> {title} </Text>
        <Text fontSize={!smallScreen && des.length>74?'md':"lg"} color="gray" lineHeight={"base"} fontWeight={"light"} mt="5px"> {des2 && des2.map((el2,i2)=>(<span key={i2}>{el2}<br/><br/> </span>))} </Text>

        {!lData && <Link to={lUrl || "#"} ><Flex justifyContent={"center"} textAlign="center"  gap="10px" mt="-20px">
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

        </Box>}
    </Box>
  )
}

export default CategoryComp2