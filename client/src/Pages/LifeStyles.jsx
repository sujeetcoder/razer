import { Box, Flex, Image, Text } from '@chakra-ui/react'
import MetaData from '../Components/Home/MetaData'
import Offermain from '../Components/Mobile/Offermain'
import TopicBox from '../Components/Mobile/TopicBox'
/* Data */
import allDataLifestyle from '../Components/LifeStyles/allData'
import CategoryComp2 from '../Components/Services/CategoryComp2'
import CategoryComp from '../Components/Mobile/CategoryComp'
import TopDrawer from '../Components/Mobile/TopDrawer'

const LifeStyles = () => {
  return (
    <>
    <MetaData title="Razer Services | Gold, Silver, RazerCare, Razer ID, and more" />
    <Box>
    <TopDrawer data={allDataLifestyle.topDrawer.data1} />
    <Offermain />
    <TopicBox title={"LIFESTYLE"} ></TopicBox>
    <CategoryComp2 {...allDataLifestyle.categoryComp.categoryComp1}  />
    <CategoryComp2 {...allDataLifestyle.categoryComp.categoryComp2} buttonText="Watch Now"  />
    <CategoryComp {...allDataLifestyle.categoryComp.categoryComp3}  />
    <CategoryComp2 {...allDataLifestyle.categoryComp.categoryComp4}  />
    <CategoryComp2 {...allDataLifestyle.categoryComp.categoryComp5}  />
    <CategoryComp2 {...allDataLifestyle.categoryComp.categoryComp6}  />
    <CategoryComp2 {...allDataLifestyle.categoryComp.categoryComp7}  />
    <CategoryComp2 {...allDataLifestyle.categoryComp.categoryComp8}  />
    <CategoryComp2 {...allDataLifestyle.categoryComp.categoryComp9}  />
    <CategoryComp2 {...allDataLifestyle.categoryComp.categoryComp10}  />
    </Box>
    </>
  )
}

export default LifeStyles