import { Box, Card, CardBody, CardFooter, Flex, Image, Spacer, Text } from '@chakra-ui/react'
import MetaData from '../Components/Home/MetaData'
import Offermain from '../Components/Mobile/Offermain'
import TopicBox from '../Components/Mobile/TopicBox'
import CategoryComp2 from '../Components/Services/CategoryComp2'
/* Data */
import allDataService from '../Components/Services/allData'
import TopDrawer from '../Components/Mobile/TopDrawer'

const Services = () => {
  return (
  <>
  <MetaData title="Razer Services | Gold, Silver, RazerCare, Razer ID, and more" />
    <Box w={"100%"} >
    <TopDrawer data={allDataService.topDrawer.data1} />
    <Offermain />
    <TopicBox title={"RAZER SERVICES"} color="black" >
    Join over millions of users who enjoy using Razer Services to enrich their gaming experience.<br/>Razer Gold and Silver offers users the competitive advantage in any battlefield. Use Gold PINs to purchase from our ever-expanding list of games in the Gold Webshop. Protect your gear with RazerCare and use Razer ID to access all the best services Razer has to offer.<br/><br/> Unlock your ultimate gaming potential with Razer Services now.
    </TopicBox>
    <CategoryComp2 {...allDataService.categoryComp.categoryComp1}  />
    <CategoryComp2 {...allDataService.categoryComp.categoryComp2}  />
    <CategoryComp2 {...allDataService.categoryComp.categoryComp3}  />
    <CategoryComp2 {...allDataService.categoryComp.categoryComp4}  />
    <CategoryComp2 {...allDataService.categoryComp.categoryComp5}  />
    <CategoryComp2 {...allDataService.categoryComp.categoryComp6}  />
    <CategoryComp2 {...allDataService.categoryComp.categoryComp7}  />
    


    </Box>
  </>
  )
}

export default Services