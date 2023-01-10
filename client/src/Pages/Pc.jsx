import React from 'react'
import MetaData from '../Components/Home/MetaData'
import allData from '../Components/Pc/allData'
import PcBoxs from '../Components/Pc/PcBoxs'
import PcCategory from '../Components/Pc/PcCategory'
import PcHeader from '../Components/Pc/PcHeader'
import PcHeading from '../Components/Pc/PcHeading'
import PcMain from '../Components/Pc/PcMain'

const Pc = () => {
  return (
  <>
  <MetaData title="Razer PC | Laptops, Desktops, and PC Peripherals ✔️"/>
      <PcHeader />
      <PcMain/>
      <PcCategory {...allData.categoryComp.categoryComp1}   />
    
      <PcHeading color="#111111"  title={'STREAMING'}>Whether you’re finding your footing, raking in the views, or somewhere in between, we’ve got gear catered to the full spectrum of streamers, so you’ll always have the quality and clarity you need to keep your audience engaged and entertained.</PcHeading>
      <PcBoxs data={allData.gridData.gridData4}  />
      <PcHeading color="#111111"   title={'SOFTWARE'}>Providing an optimal gaming experience to over 100 million users, Razer's software platforms are designed to enhance the performance of our gear and your PC—from custom keybinds to personalized Chroma effects, game optimizations to immersive audio, and more.</PcHeading>
      <PcBoxs data={allData.gridData.gridData5}  />
      <PcBoxs data={allData.gridData.gridData6}  />





  </>
  )
}

export default Pc