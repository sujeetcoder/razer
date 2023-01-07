import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import MetaData from "../Components/Home/MetaData";
import CategoryComp from "../Components/Mobile/CategoryComp";
import GridTopicBox from "../Components/Mobile/GridTopicBox";
import Offermain from "../Components/Mobile/Offermain";

import TopDrawer from "../Components/Mobile/TopDrawer";
import TopicBox from "../Components/Mobile/TopicBox";

const data = [
  {
    img: "https://assets2.razerzone.com/images/main-menu/icons/icon-mobile-handhelds.svg",
    title: "Handhelds",
    link: "/",
  },
  {
    img: "https://assets2.razerzone.com/images/main-menu/icons/icon-mobile-controller.svg",
    title: "Controllers",
    link: "/",
  },
  {
    img: "https://assets2.razerzone.com/images/main-menu/icons/icon-opus.svg",
    title: "Headphones",
    link: "/pc",
  },
  {
    img: "https://assets2.razerzone.com/images/main-menu/icons/icon-hammerhead.svg",
    title: "Earbuds",
    link: "/console",
  },
  {
    img: "https://assets2.razerzone.com/images/main-menu/icons/icon-dac.svg",
    title: "DAC",
    link: "/",
  },
  {
    img: "https://assets2.razerzone.com/images/main-menu/icons/icon-glasses.svg",
    title: "Smart Glasses",
    link: "/",
  },
  {
    img: "https://assets2.razerzone.com/images/main-menu/icons/icon-cases.svg",
    title: "Cases",
    link: "/",
  },
  {
    img: "https://assets2.razerzone.com/images/main-menu/icons/icon-accessories.svg",
    title: "Accessories",
    link: "/",
  },
  {
    img: "https://assets2.razerzone.com/images/main-menu/icons/icon-customs.svg",
    title: "Customs",
  },
  {
    img: "https://assets2.razerzone.com/images/main-menu/icons/icon-cortexgames.svg",
    title: "Cortex Games",
    link: "/",
  },
  {
    img: "https://assets2.razerzone.com/images/main-menu/icons/icon-androidapps.svg",
    title: "Android Apps",
    link: "/",
  },
  {
    img: "https://assets2.razerzone.com/images/main-menu/icons/icon-iosapps.svg",
    title: "iOS Apps",
    link: "/",
  },
];

const data2 = [
  {
    img: "https://assets2.razerzone.com/images/main-menu/icons/icon-mobile-handhelds.svg",
    title: "Handhelds",
    link: "/",
  },
  {
    img: "https://assets2.razerzone.com/images/main-menu/icons/icon-mobile-controller.svg",
    title: "Controllers",
    link: "/",
  },
  {
    img: "https://assets2.razerzone.com/images/main-menu/icons/icon-opus.svg",
    title: "Headphones",
    link: "/pc",
  },
  {
    img: "https://assets2.razerzone.com/images/main-menu/icons/icon-hammerhead.svg",
    title: "Earbuds",
    link: "/console",
  },
  {
    img: "https://assets2.razerzone.com/images/main-menu/icons/icon-dac.svg",
    title: "DAC",
    link: "/",
  },
];
const gridData1 = [
  {
    img:"https://assets2.razerzone.com/images/pnx.assets/fb8fbcd93487d2645e7a64470407dbaf/500x500_kishi-v2-for-iphone.jpg",
    title:"RAZER KISHI V2 FOR IPHONE",
    des:"Universal Mobile Gaming Controller for iPhone",
    link:"/"
  },
  {
    img:"https://assets2.razerzone.com/images/pnx.assets/fb8fbcd93487d2645e7a64470407dbaf/500x500_kishi-v2-for-android.jpg",
    title:"RAZER KISHI V2 FOR ANDROID",
    des:"Universal Mobile Gaming Controller for Android",
    link:"/"
  },
  {
    img:"https://assets2.razerzone.com/images/pnx.assets/41eb073828afa16458823c1b8cd2290c/razer-kishi-category-500x500.jpg",
    title:"RAZER KISHI",
    des:"Make your move with our award-winning universal mobile controller that fits most smartphone devices, designed to bring console-level control and comfort to your on-the-go gaming.",
    link:"/"
  }
]



const Mobile = () => {
  return (
    <>
      <MetaData title="Mobile Phone Peripherals & Accessories | Gaming Gear For Cell Phones 📱" />
      <Box mb="150px">
        <TopDrawer data={data} />
        {/* <TopDrawer data={data2} /> */}
        <Offermain />
        <TopicBox title={"ENGINEERED FOR THE GAME, DESIGNED FOR LIFE"}>
          This is freedom of play, redefined. Our mobile gaming and lifestyle
          audio products are crafted to seamlessly integrate gaming into every
          aspect of your life.
        </TopicBox>
        <CategoryComp
          lgUrl={
            "https://assets2.razerzone.com/images/pnx.assets/91baf798ef1e551ef8d4e850c28a0050/razer-edge-1920x700-desktop-cat-banner.jpg"
          }
          mdUrl={"https://assets2.razerzone.com/images/pnx.assets/91baf798ef1e551ef8d4e850c28a0050/razer-edge-450x480-mobile-cat-banner.jpg"}
          title="RAZER EDGE"
          des={"The Ultimate Android Gaming Handheld"}
          lUrl="/"
        />
        <GridTopicBox data={gridData1} />
        <CategoryComp
          lgUrl={
            "https://assets2.razerzone.com/images/pnx.assets/6d5e42cc985b839667f80f80f88e6327/stay-in-sync-1920x700.jpg"
          }
          mdUrl={"https://assets2.razerzone.com/images/pnx.assets/6d5e42cc985b839667f80f80f88e6327/stay-in-sync450x480.jpg"}
          title="STAY IN-SYNC WITH YOUR WORLD"
          des={"Whether you’re working from home or immersed in entertainment, our industry-leading Bluetooth low-latency audio deliver smooth, stutter-free sound and seamless connectivity."}
          lData={[{link:"/console",title:"View Over-Ear Headphones"},{link:"/",title:"View True Wireless Earbuds"}]}
        />
        <GridTopicBox data={gridData1} />
        <GridTopicBox data={gridData1} />
        <CategoryComp
          lgUrl={
            "https://assets2.razerzone.com/images/pnx.assets/8d15cb8a565e71ef01f047785d22ce69/gothe-extramile-category-1920x700-desktop.jpg"
          }
          mdUrl={"https://assets2.razerzone.com/images/pnx.assets/8d15cb8a565e71ef01f047785d22ce69/gotheextramile-category-450x480-mobile.jpg"}
          title="GO THE EXTRA MILE"
          des={"When you’re filling those few minutes in line at the coffee shop or commuting to work with a quick game or listening to that banger on repeat, Razer has the accessory that lets fellow gamers know they’re among their own."}
        />
        <GridTopicBox data={gridData1} />
        
      </Box>
    </>
  );
};

export default Mobile;
