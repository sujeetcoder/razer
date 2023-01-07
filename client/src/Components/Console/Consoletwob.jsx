import React from 'react'
import {
    Box,
    Text,
    Flex,
    Card,
    Image,
    CardBody
   
  } from "@chakra-ui/react";
const consoletwob = () => {
  return (
   <>
   <Box p="10" bg="#252525" pl="20%">
        <Flex gap="5">
          <Card
            maxW="sm"
            bg="#111111"
            variant="filled"
            borderRadius="0"
            borderBottom={"1.5px solid #44d62c"}
          >
            <Image src="https://assets2.razerzone.com/images/pnx.assets/861e1148c49fd799f8821cca84916df0/razer-universal-quick-charging-stand-xbox-500x500.png" />
            <CardBody textAlign="left">
              <Text mb="2">UNIVERSAL QUICK CHARGING STANDS FOR XBOX</Text>
              <Text fontWeight="thin" mb="2" color="#999076" >
              Quick Charger for Xbox ControllersSleek high-performance gaming laptops
              </Text>
              <Text fontWeight="light" color="#44d62c" mt="5%">
                Learn More{" "}
              </Text>
            </CardBody>
          </Card>

          <Card
            maxW="sm"
            bg="#111111"
            variant="filled"
            borderRadius="0"
            borderBottom={"1.5px solid #44d62c"}
          >
            <Image src="https://assets2.razerzone.com/images/pnx.assets/861e1148c49fd799f8821cca84916df0/razer-quick-charging-for-ps5-category-latest.jpg" />
            <CardBody textAlign="left">
              <Text mb="2">RAZER QUICK CHARGING STAND FOR PS5™</Text>
              <Text color="#999076" fontWeight="thin" mb="2">
              Quick Charging Stand for PS5™ DualSense™ Wireless Controller
              </Text>
              <Text fontWeight="light" color="#44d62c" mt="10%">
                Learn More{" "}
              </Text>
            </CardBody>
          </Card>
        
        </Flex>
      </Box>
  
  
   </>
  )
}

export default consoletwob