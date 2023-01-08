import React from 'react'
// import MetaData from "../Components/Home/MetaData"
import Consolebox from '../Components/Console/Consolebox'
import Consolebg from '../Components/Console/Consolebg' 
import  Consoletwob  from '../Components/Console/Consoletwob' 
import Consolebgtwo from '../Components/Console/Consolebgtwo'
import { Consolecard } from '../Components/Console/Consolecard'
import TopDrawer from '../Components/Mobile/TopDrawer'
let data1 = [
  {
    img: "https://assets2.razerzone.com/images/main-menu/icons/icon-xboxlogo.svg",
    title: "Xbox",
    link: "/",
  },
  {
    img: "https://assets2.razerzone.com/images/main-menu/icons/icon-playstationlogo.svg",
    title: "Silver",
    link: "/",
  },
  {
    img: "https://assets2.razerzone.com/images/main-menu/icons/icon-goldpins.svg",
    title: "Gold PINs",
    link: "/pc",
  },
  {
    img: "https://assets2.razerzone.com/images/main-menu/icons/icon-goldwebshop.svg",
    title: "Gold Webshop",
    link: "/console",
  },
  {
    img: "https://assets2.razerzone.com/images/main-menu/icons/icon-giftcards.svg",
    title: "Gift Cards",
    link: "/",
  },
  {
    img: "https://assets2.razerzone.com/images/main-menu/icons/icon-razercare.svg",
    title: "RazerCare",
    link: "/",
  },
  {
    img: "https://assets2.razerzone.com/images/main-menu/icons/icon-razerid.svg",
    title: "Razer ID",
    link: "/",
  }
]
const Console = () => {
  return (
    <>
    {/* <MetaData title="Razer Console|Laptops,Desktops,and Peripherals"/> */}
    <TopDrawer data={data1} />
    <Consolebox/>
    <Consolebg/>
    <Consoletwob/>
    <Consolebgtwo/>
    <Consolecard/>
    </>
  )
}

export default Console