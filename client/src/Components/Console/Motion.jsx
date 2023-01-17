import React from "react";
import Aos from "aos"
 import "aos/dist/aos.css"
 import { useEffect } from 'react'
 import {Box,Flex,Text,Image} from "@chakra-ui/react"
 import ReactPlayer from 'react-player'
const Motion = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  
  return (
    <>
    <video playsinline="" autoplay="true" class="video-bg" muted="muted" preload="auto" volume="0" src="//assets2.razerzone.com/images/pnx.assets/af22101404e95a801e30f7bd763811b7/razer-wolverine-v2-pro-video.mp4" pnxssr_3=""></video>

    <Box data-aos="fade-up" pt={"5%"}>
    <Text fontSize='2xl' fontWeight={"thin"}>RAZER WOLVERINE V2 PRO</Text>
    <Text fontSize='6xl' fontWeight={"bold"} color={"#44d62c"} >CONNECT. CONTROL. CONQUER.</Text>
    <Text fontSize='lg' color={"gray"} pl="15%" pr={"15%"}>Seize the unfair advantage with both hands with the Razer Wolverine V2 Pro—a high-performance wireless controller officially licensed by PlayStation™. Armed with Razer™ HyperSpeed Wireless and a loadout of next-gen features for top-tier competitive play, the time has come to claim your rule on PS5™ and PC.</Text>
    </Box>
    <Box data-aos="fade-up">
      <Flex gap={"2%"} justifyContent="center" pt={"3%"}>
     <Image src="https://assets2.razerzone.com/images/pnx.assets/0ea5d1a6c290538a3d1ad66d487e5050/logo-ps.png" />
     <Image src="https://assets2.razerzone.com/images/pnx.assets/0ea5d1a6c290538a3d1ad66d487e5050/logo-window.png" />
      </Flex>
    </Box>

    <Box data-aos="fade-up" pt={"6%"}>
    <Text fontSize='5xl'  color={"#44d62c"} >AVAILABLE IN</Text>
    <Text fontSize='lg' color={"gray"} pl="15%" pr={"15%"}>Black | White</Text>
    <Image pt={"4%"} pb="3%" src="https://assets2.razerzone.com/images/pnx.assets/e2015bb20f409f7c7020bbdcafe7ee87/razer-wolverine-v2-pro_availablein_desktop_1920x300.jpg" />
    </Box>

   
   
   
   
    <video  playsinline="" autoplay="true" class="video-bg" muted="muted" preload="auto" volume="0" src="//assets2.razerzone.com/images/pnx.assets/a167fecf14d37ffe03bd64ff16019676/black-color-way.mp4" pnxssr_3=""></video>
   <Box p={"5%"} pl="10%">
   <ReactPlayer url="https://www.youtube.com/watch?v=72_IgVEaNQY&t=27s" 
  width='90%'
  height='580px'
  controls={true}
  playing={true}
  volume={0.5}
/>
    </Box>   
  
   
   
   
    
    <Box data-aos="fade-up" >
    <Text fontSize='5xl'  color={"#44d62c"} >RAZER™ HYPERSPEED WIRELESS</Text>
    <Text fontSize='lg' color={"gray"} pl="15%" pr={"15%"}>Delivering an ultra-fast 2.4GHz wireless connection via its included USB Type A dongle, the controller ensures seamless performance that meets the demands of competitive gaming on PS5™ consoles and PC.</Text>
    <Image pt={"4%"} pb="3%" src="https://assets2.razerzone.com/images/pnx.assets/38ff076da8677948e7a187dfdb82cb58/razer-wolverine-v2-pro-hyperspeed-wireless-desktop.jpg" />
    </Box>
    <Box data-aos="fade-up" >
    <Text fontSize='5xl'  color={"#44d62c"} >RAZER™ MECHA-TACTILE ACTION BUTTONS</Text>
    <Text fontSize='lg' color={"gray"} pl="15%" pr={"15%"}>With a shorter actuation distance for quicker button presses and improved tactility to feel every input, the controller brings a whole new level of speed and consistency to your game.</Text>
    <Image pt={"4%"} pb="3%" w={"100%"} src="https://assets2.razerzone.com/images/pnx.assets/91666d41d692cd8afb952f675dcf95ad/razer-wolverine-v2-pro-action-buttons-desktop.jpg" />
    </Box>
  


    <Box data-aos="fade-up">
    <Text fontSize='lg' color={"gray"} pl="15%" pr={"15%"}>Equipped with a 3-million tap life cycle for greater durability and a reduced actuation distance of 0.65mm—35% less than that of the average membrane controller—each button is finely tuned for greater accuracy to showcase your true gaming potential.</Text>
    </Box>

    <Box pl={"10%"} pt="5%" >
      <Flex alignItems={"center"} gap="5%" flexDirection={["column","column","column","row",'row']}>
       <Image src="https://assets2.razerzone.com/images/pnx.assets/74d0eee563cd5334ba27f40fc7bbe5b5/mech-tactile-action-button.gif"/> 
       <Image src="https://assets2.razerzone.com/images/pnx.assets/74d0eee563cd5334ba27f40fc7bbe5b5/actuation-time.jpg"/> 
      </Flex>
    </Box>


    <Box data-aos="fade-up" >
    <Text fontSize='5xl'  color={"#44d62c"} >RAZER™ MECHA-TACTILE ACTION BUTTONS</Text>
    <Text fontSize='lg' color={"gray"} pl="15%" pr={"15%"}>With a shorter actuation distance for quicker button presses and improved tactility to feel every input, the controller brings a whole new level of speed and consistency to your game.</Text>
    <Image pt={"4%"} pb="3%" w={"100%"} src="https://assets2.razerzone.com/images/pnx.assets/e4385453895ae1a7f7018249ce1405d1/razer-wolverine-v2-pro-hypertrigger-desktop.jpg" />
    </Box>
  
   


    <Box data-aos="fade-up">
    <Text fontSize='lg' color={"gray"} pl="15%" pr={"15%"}>
       Toggling the two slide-locks on the controller’s underside greatly reduces the travel distance of the main triggers–an advantage that allows you to spam commands at a faster rate.</Text>
    </Box>

    <Box pl={"15%"} pt="5%" gap={"5%"} pr={"15%"} data-aos="fade-up" >
      <Flex alignItems={"center"} gap="5%" flexDirection={["column","column","column","row",'row']}>
      <Box data-aos="fade-up">
       <Image src="https://assets2.razerzone.com/images/pnx.assets/09921bafff1f0c59d171b82c9b33af1e/shorter-pull.png"/> 
       <Text pt={"5%"} fontSize='3xl'  color={"#44d62c"}>SHORTER PULL</Text>
       <Text fontSize='lg'  color={"gray"}>For FPS Games</Text>
      </Box>
      <Box data-aos="fade-up">
      <Image src="https://assets2.razerzone.com/images/pnx.assets/09921bafff1f0c59d171b82c9b33af1e/shorter-pull.png"/> 
      <Text pt={"5%"} fontSize='3xl'  color={"#44d62c"}>LONGER PULL</Text>
       <Text fontSize='lg'  color={"gray"}>For Racing Games</Text>
      </Box>
      
      </Flex>
    </Box>



    
    <Box data-aos="fade-up" >
    <Text fontSize='5xl'  color={"#44d62c"} >8-WAY MICROSWITCH D-PAD</Text>
    <Text fontSize='lg' color={"gray"} pl="15%" pr={"15%"}>Feel and hear every single directional press as microswitches are engaged, enabling accurate and intentional moves when doing intricate combos.</Text>
    <Image data-aos="fade-up"  pt={"4%"} pb="3%" w={"100%"} src="https://assets2.razerzone.com/images/pnx.assets/cd7a1447261e5de71fd8d16457da7503/razer-wolverine-v2-pro-microswitch-desktop.jpg" />
    </Box>

    <Box data-aos="fade-up" >
    <Text fontSize='5xl'  color={"#44d62c"} >6 REMAPPABLE BUTTONS AND INTERCHANGEABLE THUMBSTICKS</Text>
    <Text fontSize='lg' color={"gray"} pl="15%" pr={"15%"}>Map its 4 extra triggers and 2 custom bumpers to your preferred commands, and further tailor the controller to your playstyle with 2 additional thumbstick caps.</Text>
    <Image data-aos="fade-up" pt={"4%"} pb="3%" w={"100%"} src="https://assets2.razerzone.com/images/pnx.assets/c4371aed224542a49386533b7a2b6c82/razer-wolverine-v2-pro-thumbsticks-desktop.jpg" />
    </Box>



    <Box pl={"20%"} pt="5%" gap={"30%"} pr={"20%"} data-aos="fade-up" >
      <Flex alignItems={"center"} gap="40%" flexDirection={["column","column","column","row",'row']}>
      <Box data-aos="fade-up">
       <Image src="https://assets2.razerzone.com/images/pnx.assets/705b3a3e67ff3d765d0330f221e8f6ab/offensive-shooter.png"/> 
       <Text pt={"5%"} fontSize='3xl'  color={"#44d62c"}>OFFENSIVE
SHOOTER</Text>
       <Text fontSize='2xl'>I.E. SMG, SHOTGUN</Text>
       <Text fontSize='lg'  pt={"3%"} color={"gray"}>SHORTER STICK
MORE SPEED</Text>
      </Box>
      <Box data-aos="fade-up">
      <Image src="https://assets2.razerzone.com/images/pnx.assets/705b3a3e67ff3d765d0330f221e8f6ab/defensive-shooter.png"/> 
      <Text pt={"5%"} fontSize='3xl'  color={"#44d62c"}>LONGER PULL</Text>
       <Text fontSize='2xl' >I.E. SNIPER</Text>
       <Text  pt={"3%"} fontSize='lg'  color={"gray"}>
TALLER STICK
MORE ACCURACY</Text>
      </Box>
      
      </Flex>
    </Box>
    </>
  );
};

export default Motion;
