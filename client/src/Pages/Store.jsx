import { Box, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import StoreBigCrousel from '../Components/Store/StoreBigCrousel';
import StoreCrousel from '../Components/Store/StoreCrousel';
import StoreCrouselthree from '../Components/Store/StoreCrouselthree';
import StoreCrouseltwo from '../Components/Store/StoreCrouseltwo';
import StoreHeader from '../Components/Store/StoreHeader';
import styles from "../Styles/Store.module.css";
const Store = () => {
  return (
    <>
    <Box
        bg={"#555555"}
        w="100%"
        h={10}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        className={styles.mobile_side}
      >
        All orders over US$79 will enjoy free standard shipping to the United
        States.
      </Box>
      <Box bg={"#11111"} w="100%">
      {/* header */}
      <Box w="100%" m="auto"><StoreHeader /></Box>
      {/* main page */}
      <Box w={"100%"}>
      <Flex w={"90%"} m="auto" justifyContent={"space-between"} textAlign="left">
        <Box>
        <Text color={"#44d62c"} fontSize={40} fontWeight="bold">THE LATEST AND GREATEST GAMING GEAR</Text>
        <Text fontSize={21} fontWeight="bold">RAZER MICE, KEYBOARDS, HEADSETS, LAPTOPS & MORE</Text>
        </Box>
        <Flex w="16%" gap={"10px"} alignItems="center">
          <Image src='https://assets2.razerzone.com/images/pnx.assets/8a4cf27b0557ec77704bd4de1d471a17/razerstore-icon.svg' w={"20%"}/>
          <Text _hover={{textDecoration:"underline"}}>Find a RazerStore<br/> near you </Text><Box color={"#44d62c"} ml="-30%" w="8%" h={6} mt="11.5%">{">"}</Box>
        </Flex>
        </Flex>
        <Box textAlign={"left"}w={"90%"} m="auto" mt={"5%"}>
        <Text fontSize={28} fontWeight="bold">FRESH OFF THE LINE</Text>
        <Text fontSize={23}>Check out our latest releases to secure the most up-to-date upgrades for your setup</Text>
        </Box>
         {/* for Crousel 1 */}
         <Box w={"100%"}>
          <StoreCrousel/>
        </Box>
        {/* box full carousel */}
        <Box w={"100%"} mt="-10">
          <Image src='https://i.ibb.co/XVrW7P6/Screenshot-20230107-132514.png' w={"100%"}/>
        </Box>
        
        <Box w={"90%"} m="auto" textAlign="left">
        <Text color={"#44d62c"} fontSize={40} fontWeight="bold">ONLY AT RAZER.COM</Text>
        <Text fontSize={21} fontWeight="bold">DISCOVER EXCLUSIVE GEAR AND SERVICES FOUND NOWHERE ELSE</Text>
        </Box>
        <Flex w={"90%"} m="auto" justifyContent={"space-between"} mt={"3%"} textAlign="left">
        <Box >
        <Text fontSize={28} fontWeight="bold">RAZER EXCLUSIVES</Text>
        <Text fontSize={21} fontWeight="bold">Explore unique products only available at our official online store</Text>
        </Box>
        <Flex w="16%"  gap={"5px"} alignItems="center">
          <Text _hover={{textDecoration:"underline"}}>View All</Text><Box color={"#44d62c"} h={6}>{">"}</Box>
        </Flex>
        </Flex>
        {/* corusel 2 */}
        <Box w={"100%"}>
          <StoreCrouseltwo />
        </Box>
        {/* FULL SCREEN CAROUSEL */}
        <Box>
        <StoreBigCrousel />
        </Box>
        {/* GRID SECTION */}
        <SimpleGrid columns={2} spacingY={"15vh"} justifyContent="center" w="80%" m={"auto"} ml="15%" mt={"80px"}>
          <Box  h={"110%"} w={"70%"}>
            <Image src='https://assets2.razerzone.com/images/pnx.assets/fcab8716aea0f5c6a069b0b9210a1c70/razer-store-v2_razerstorerewards_500x500.jpg' />
            <Text fontWeight={"bold"} fontSize={38}>RAZERSTORE<br/>REWARDS</Text>
          </Box>
          <Box h={"110%"} w={"70%"}>
            <Image src='https://assets2.razerzone.com/images/pnx.assets/8bb73d36a73c2f69b3cffb43669c4978/500x500-copy.jpg' />
            <Text fontWeight={"bold"} fontSize={38}>RAZER<br/>CUSTOMS</Text>
          </Box>
          <Box h={"110%"} w={"70%"}>
            <Image src='https://assets2.razerzone.com/images/pnx.assets/fcab8716aea0f5c6a069b0b9210a1c70/razer-store-v2_purchaseprograms_500x500.jpg' />
            <Text fontWeight={"bold"} fontSize={38}>PURCHASE PROGRAMS</Text>
          </Box>
          <Box h={"110%"} w={"70%"}>
            <Image src='https://assets2.razerzone.com/images/pnx.assets/fcab8716aea0f5c6a069b0b9210a1c70/razer-store-v2_razercare_500x500.jpg' />
            <Text fontWeight={"bold"} fontSize={38}>RAZERCARE</Text>
          </Box>
        </SimpleGrid>
      <Flex w={"90%"} m="auto" justifyContent={"space-between"} mt={"10%"} textAlign="left">
        <Box >
        <Text fontSize={27} fontWeight="bold">RAZER LAST CHANCE</Text>
        <Text fontSize={21} fontWeight="bold">A curated selection of our classic gear—exclusively priced with full warranty</Text>
        </Box>
        <Flex w="16%"  gap={"5px"} alignItems="center">
          <Text _hover={{textDecoration:"underline"}}>View All</Text><Box color={"#44d62c"} h={6}>{">"}</Box>
        </Flex>
        </Flex>
      {/* caraousel 3 */}
      <Box w={"100%"}>
          <StoreCrouselthree />
        </Box>

        <Box textAlign={"center"} w="80%" m={"auto"} mb={20}>
          <Text fontSize={40} fontWeight="600" color={"#44d62c"}>WHY BUY FROM RAZER.COM</Text>
          <SimpleGrid mt={10} className={styles.final_gridd}>
            <Box  >
              <Image m={"auto"} src='https://assets2.razerzone.com/images/pnx.assets/c26dadd460db814353e32536f8f160b7/first-dibs-icon.svg' w={"30%"}/>
              <Text fontSize={26} fontWeight="bold" mb={2}>Get First Dibs</Text>
              <Text fontSize={17} color="gray">Razer.com is the only place where you<br/>can buy our most anticipated Razer<br/>gear immediately upon release.</Text>
            </Box>
            <Box >
              <Image m={"auto"} src='https://assets2.razerzone.com/images/pnx.assets/c26dadd460db814353e32536f8f160b7/largest-array-icon.svg' w={"30%"}/>
              <Text fontSize={26} fontWeight="bold" mb={2}>The Largest Array Of<br/>Razer Gear</Text>
              <Text fontSize={17} color="gray">As Razer’s official online store, we<br/>hold a massive collection of products<br/>that can’t be matched anywhere else.</Text>
            </Box>
            <Box  >
              <Image m={"auto"} src='https://assets2.razerzone.com/images/pnx.assets/c26dadd460db814353e32536f8f160b7/exclusives-icon.svg' w={"30%"}/>
              <Text fontSize={26} fontWeight="bold" mb={2}>Exclusive Razer Gear<br/>And Swag</Text>
              <Text fontSize={17} color="gray">Get access to limited edition Razer<br/>gear that’s only available on<br/>Razer.com.</Text>
            </Box>
            <Box  >
              <Image m={"auto"} src='https://assets2.razerzone.com/images/pnx.assets/c26dadd460db814353e32536f8f160b7/buynow-paylater-icon.svg' w={"30%"}/>
              <Text fontSize={26} fontWeight="bold" mb={2}>Play Now, Pay Later</Text>
              <Text fontSize={17} color="gray">With our 0% installment plan, spend <br/>more time gaming with your sweet <br/>new gear and less time fussing <br/>over payment.</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
      </Box>
    </>
  )
}

export default Store