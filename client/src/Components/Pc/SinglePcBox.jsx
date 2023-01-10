import { Box, Card, CardBody, CardFooter, Flex, Image, Spacer, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const SinglePcBox = ({title,des,link,img}) => {
  return (
    <Card textAlign={"left"} maxW='sm' borderBottom={"0.5px solid #44d62c"} bgColor={"#000000"} >
        <Image w={"100%"} src={img} />
        <CardBody>
            <Box>
            <Text fontSize={"2xl"} >{title} </Text>
            <Text letterSpacing="1px" color="#a593a1"  >{des} </Text>
            </Box>
            </CardBody>
            <CardFooter>
            <Link to={link || "#"} ><Flex justifyContent={"left"}   gap="10px" mt="-25px">
            <Text color="#44d62c" _hover={{textDecoration:'underline'}} fontSize='md' >learn more</Text>
            <Text color="#44d62c">{">"}</Text>
          </Flex> </Link> 
          </CardFooter>        
    </Card>
  )
}

export default SinglePcBox