import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import MetaData from '../Components/Home/MetaData'
/* Data */
import allDataCommunity from '../Components/Community/allData'
import TopDrawer from '../Components/Mobile/TopDrawer'
import Offermain from '../Components/Mobile/Offermain'
import TopicBox from '../Components/Mobile/TopicBox'
import { useMedia } from '../MediaQuery/UseMedia'
import CategoryComp from '../Components/Mobile/CategoryComp'

const Community = () => {
  const {mediumScreen,midBr} = useMedia()
  const lgStyle = {
    backgroundImage: `url("https://assets2.razerzone.com/images/pnx.assets/657269bc69a904f4ef0bc2752c978c08/razer-community-hero.jpg")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "700px",
    zIndex: 1,
    backgroundSize: "cover",
    cursor: "pointer"
  }
  const mdStyle = {
    backgroundImage: `url("https://assets2.razerzone.com/images/pnx.assets/657269bc69a904f4ef0bc2752c978c08/razer-community-hero-768x500.jpg")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "300px",
    zIndex: 1,
    backgroundSize: "cover",
    cursor: "pointer"
  }
  return (
    <>
    <MetaData title="Razer Community | Razer Updates, Giveaways and Events" />
    <Box>
    <TopDrawer data={allDataCommunity.topDrawer.data1} />
    <Offermain />
    {/* box 1 st */}
    <Box style={!midBr?mdStyle:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",...lgStyle}}>
       {midBr && <Box width="100%" margin={"auto"} >
          <Text fontSize={"4xl"} lineHeight="none" >WELCOME TO THE</Text>
          <Text fontSize={"8xl"} lineHeight="none" color="#44d62c" fontWeight={"bold"} style={{letterSpacing:"-2px"}} >RAZER COMMUNITY</Text>
        </Box>}
    </Box>
    {!midBr && <Box textAlign={"center"} p="30px 10px" >
          <Text fontSize={"2xl"} lineHeight="none" >WELCOME TO THE</Text>
          <Text fontSize={"3xl"} lineHeight="none" color="#44d62c" fontWeight={"bold"}  >RAZER COMMUNITY</Text>
      </Box>}
    {/* box 1 end */}
    <Box w="100%"  pt="75px" pb="75px"  bgColor={"#44d62c"} style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
      <Box w={["95%",null,null,null,"60%"]} textAlign="center" color={"black"} fontSize="large" >
          Welcome to the Razer Community – where millions of gamers connect to get our latest news, take part in giveaways, and interact with us be it live on stream, or through our posts. <br/><br/> Have an awesome Razer setup you’d like to show us? Drawn a cool piece of fanart? Drop us a message or tag us @Razer on our social pages. You might just get featured and be rewarded with cool Razer swag.
      </Box>
    </Box>

    <CategoryComp {...allDataCommunity.categoryComp.categoryComp1} buttonText="Discover" />
    <CategoryComp {...allDataCommunity.categoryComp.categoryComp2} buttonText="Get Started" />
    <CategoryComp {...allDataCommunity.categoryComp.categoryComp3} buttonText="Discover Events" />
    <CategoryComp {...allDataCommunity.categoryComp.categoryComp4} buttonText="This is Esports" />

    {/* main */}
    </Box>
    </>
  )
}

export default Community