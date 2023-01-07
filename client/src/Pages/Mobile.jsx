import { Box } from "@chakra-ui/react";
import MetaData from "../Components/Home/MetaData";
import CategoryComp from "../Components/Mobile/CategoryComp";
import GridTopicBox from "../Components/Mobile/GridTopicBox";
import Offermain from "../Components/Mobile/Offermain";
import TopDrawer from "../Components/Mobile/TopDrawer";
import TopicBox from "../Components/Mobile/TopicBox";
/* Data */
import allData from "../Components/Mobile/allData";



const Mobile = () => {
  return (
    <>
      <MetaData title="Mobile Phone Peripherals & Accessories | Gaming Gear For Cell Phones 📱" />
      <Box mb="150px">
        <TopDrawer data={allData.topDrawer.data1} />
        {/* <TopDrawer data={allData.topDrawer.data2} /> */}
        <Offermain />
        <TopicBox title={"ENGINEERED FOR THE GAME, DESIGNED FOR LIFE"}>
          This is freedom of play, redefined. Our mobile gaming and lifestyle
          audio products are crafted to seamlessly integrate gaming into every
          aspect of your life.
        </TopicBox>
        <CategoryComp {...allData.categoryComp.categoryComp1}   />
        <GridTopicBox data={allData.gridData.gridData1}  />
        <CategoryComp {...allData.categoryComp.categoryComp2}  />
        <GridTopicBox data={allData.gridData.gridData2} />
        <GridTopicBox data={allData.gridData.gridData3} />
        <CategoryComp {...allData.categoryComp.categoryComp3}  />
        <GridTopicBox data={allData.gridData.gridData4} />
        
      </Box>
    </>
  );
};

export default Mobile;
