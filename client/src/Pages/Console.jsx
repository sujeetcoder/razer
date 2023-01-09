import React from 'react'
import MetaData from "../Components/Home/MetaData"
import Consolebox from '../Components/Console/Consolebox'
import Consolebg from '../Components/Console/Consolebg' 
import  Consoletwob  from '../Components/Console/Consoletwob' 
import Consolebgtwo from '../Components/Console/Consolebgtwo'
import { Consolecard } from '../Components/Console/Consolecard'
import TopDrawer from '../Components/Mobile/TopDrawer'
import CategoryComp from '../Components/Mobile/CategoryComp'
import allDataconsole from "../Components/Console/allDataconsole"
import GridTopicBox from '../Components/Mobile/GridTopicBox'
import { Box, Text } from '@chakra-ui/react'

const Console = () => {
  return (
    <>
    <MetaData title="Razer Console|Laptops,Desktops,and Peripherals"/>
    <TopDrawer data={allDataconsole.topDrawer.data1} />
    <Consolebox/>
    <CategoryComp {...allDataconsole.categoryComp.categoryComp1}  />
    <CategoryComp {...allDataconsole.categoryComp.categoryComp1}  />
    <Consolebg/>
    {/* <Consoletwob/> */}
    <Consolebgtwo/>
    {/* <Consolecard/> */}
    <Box bgColor="black" >
      <Box textAlign="center" >
        <Text>absdfbbg</Text>
      </Box>
    <GridTopicBox data={allDataconsole.gridData.gridData4} column={4} padding="80px" />
    </Box>
    </>
  )
}

export default Console