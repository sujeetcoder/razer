import { Box, Image, Text} from '@chakra-ui/react'

import { Link } from 'react-router-dom';

import { useMedia } from '../../MediaQuery/UseMedia';

const TopDrawer = ({data}) => {
    const {mediumScreen} =  useMedia() 
    const hstyle = {
        display:"flex",
        overflowX:"auto",
        scrollBehavior:"smooth",
        borderRadius:"15px",
        height:"auto",
        margin:"auto",
        position:"relative",
        gap:"15px"
       }
    console.log( document?.getElementById("sujeet")?.scrollWidth, document?.getElementById("sujeet")?.clientWidth)

  return (
    <Box bgColor={"#1a1a1a"}  borderBottom={"0.5px solid #44d62c"}>
        <Box id="sujeet"  style={hstyle} m="auto" p="15px"  justifyContent={!mediumScreen && document?.getElementById("sujeet")?.scrollWidth > document?.getElementById("sujeet")?.clientWidth?"left":"center"}>
           {data && data.map((el,i)=>(
           <Link to={el.link} key={i}><Box  minW={"80px"}  margin={"auto"} textAlign="center" h="80px">
                <Box style={{display:"flex",alignItems:"center",justifyContent:"center"}} margin={"auto"} h="80%">
                    <Image src={el.img} />
                </Box>
                <Text mt="-5px" fontSize={"13px"} >{el.title} </Text>
            </Box>
            </Link> 
           ))}
        </Box>

    </Box>
  )
}

export default TopDrawer