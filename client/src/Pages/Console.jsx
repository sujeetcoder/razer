import React from 'react'
// import MetaData from "../Components/Home/MetaData"
import Consolebox from '../Components/Console/Consolebox'
import Consolebg from '../Components/Console/Consolebg' 
import  Consoletwob  from '../Components/Console/Consoletwob' 
import Consolebgtwo from '../Components/Console/Consolebgtwo'
import { Consolecard } from '../Components/Console/Consolecard'
const Console = () => {
  return (
    <>
    {/* <MetaData title="Razer Console|Laptops,Desktops,and Peripherals"/> */}
    <Consolebox/>
    <Consolebg/>
    <Consoletwob/>
    <Consolebgtwo/>
    <Consolecard/>
    </>
  )
}

export default Console