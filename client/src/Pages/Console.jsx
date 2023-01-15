import React from 'react'
import MetaData from "../Components/Home/MetaData"
import Consolebox from '../Components/Console/Consolebox'
import Consolebg from '../Components/Console/Consolebg' 


import TopDrawer from '../Components/Mobile/TopDrawer'
import CategoryComp from '../Components/Mobile/CategoryComp'
import allDataconsole from "../Components/Console/allDataconsole"
import GridTopicBox from '../Components/Mobile/GridTopicBox'
import { Box, Text } from '@chakra-ui/react'

const Console = () => {
  return (
    <>
    <MetaData title="Razer Console|Laptops,Desktops,and Peripherals"/>
    <TopDrawer data={allDataconsole.topDrawer.data1}  />
    <Consolebox/>
    <CategoryComp {...allDataconsole.categoryComp.categoryComp1} />
    
    <Consolebg/>
    {/* <Consoletwob/> */}
    {/* <Consolebgtwo/> */}
    <CategoryComp {...allDataconsole.categoryComp.categoryComp2} />
    <CategoryComp {...allDataconsole.categoryComp.categoryComp3} />
    <CategoryComp {...allDataconsole.categoryComp.categoryComp4} />
    {/* <Consolecard/> */}
    <Box bgColor="black" >
      <Box textAlign="center" >
       
      </Box>
    <GridTopicBox data={allDataconsole.gridData.gridData4} column={4} padding="80px" />
    <CategoryComp {...allDataconsole.categoryComp.categoryComp5}  />
    <CategoryComp {...allDataconsole.categoryComp.categoryComp6}  />
    <CategoryComp {...allDataconsole.categoryComp.categoryComp7}  />
    </Box>
    </>
  )
}

export default Console