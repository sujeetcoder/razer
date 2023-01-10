import {
  Box,
} from "@chakra-ui/react";
import React from "react";
import allData from "./allData";
import PcBoxs from "./PcBoxs";
import PcHeading from "./PcHeading";

const PcMain = () => {
  return (
    <Box>
      <Box textAlign="center" bg="#555555" p="3">
        All orders over US$79 will enjoy free standard shipping to the United
        States.
      </Box>
      <PcHeading color="#111111"  title={'LAPTOPS & DESKTOPS'}>Razer systems are crafted to provide the ultimate performance for gaming and work. Enjoy desktop power made mobile with our gaming and productivity laptops, or go all-out for your build as you assemble the most powerful aRGB Chroma powered battlestation.</PcHeading>
      <PcBoxs data={allData.gridData.gridData1}  />
      <PcHeading color="#111111"  title={'PERIPHERALS'}>The most powerful rigs mean nothing without the high-performance gear to match. Understand what it means to wield the unfair advantage as you experience industry-leading levels of precision, control, and immersion.</PcHeading>
      <PcBoxs data={allData.gridData.gridData2}  />
      <PcBoxs data={allData.gridData.gridData3}  />







      {/* <Box bgColor="#111111" pt="10" pb="10">
        <Heading
          textAlign="center"
          as="h1"
          mb="3"
          fontWeight="100"
          color="#44d62c"
        >
          LAPTOPS & DESKTOPS
        </Heading>
        <Text
          pl="40"
          pr="40"
          textAlign="center"
          letterSpacing="1px"
          color="#999076"
        >
          Razer systems are crafted to provide the ultimate performance for
          gaming and work. Enjoy desktop power made mobile with our gaming and
          productivity laptops, or go all-out for your build as you assemble the
          most powerful aRGB Chroma powered battlestation.
        </Text>
      </Box>
      <Box p="10" bg="#252525">
        <Flex gap="5" m={"auto"}>
          <Card
            maxW="sm"
            bg="#111111"
            variant="filled"
            borderRadius="0"
            borderBottom={"1.5px solid #44d62c"}
          >
            <Image src="https://assets2.razerzone.com/images/pnx.assets/381e915d58d2b9759725c30a9f2c3a0f/razer-blade-15-2022-laptop-500x500.jpg" />
            <CardBody>
              <Text mb="2">LAPTOPS</Text>
              <Text fontWeight="thin" mb="2" color="#999076">
                Sleek high-performance gaming laptops
              </Text>
              <Text fontWeight="light" color="#44d62c">
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
            <Image src="https://assets2.razerzone.com/images/pnx.assets/381e915d58d2b9759725c30a9f2c3a0f/desktops-components-category--500x500.jpg" />
            <CardBody>
              <Text mb="2">DESKTOPS & COMPONENTS</Text>
              <Text color="#999076" fontWeight="thin" mb="2">
                Engineered for enthusiasts and designed for performance
              </Text>
              <Text fontWeight="light" color="#44d62c">
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
            <Image src="https://assets2.razerzone.com/images/pnx.assets/381e915d58d2b9759725c30a9f2c3a0f/accessories-category-500x500.jpg" />
            <CardBody>
              <Text mb="2">ACCESSORIES</Text>
              <Text color="#999076" fontWeight="thin" mb="2">
                Crafting the perfect gaming experience
              </Text>
              <Text fontWeight="light" color="#44d62c">
                Learn More{" "}
              </Text>
            </CardBody>
          </Card>
        </Flex>
      </Box> */}

      {/* PERIPHERALS */}
      {/* <Box bgColor="#111111" pt="10" pb="10">
        <Heading
          textAlign="center"
          as="h1"
          mb="3"
          fontWeight="100"
          color="#44d62c"
        >
          PERIPHERALS
        </Heading>
        <Text
          pl="40"
          pr="40"
          textAlign="center"
          letterSpacing="1px"
          color="#999076"
        >
          The most powerful rigs mean nothing without the high-performance gear
          to match. Understand what it means to wield the unfair advantage as
          you experience industry-leading levels of precision, control, and
          immersion.
        </Text>
      </Box>
      <Box p="10" bg="#252525">
        <Flex gap="5">
          <Card
            maxW="sm"
            bg="#111111"
            variant="filled"
            borderRadius="0"
            borderBottom={"1.5px solid #44d62c"}
          >
            <Image src="https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/mice-category-500x500.jpg" />
            <CardBody>
              <Text mb="2">MICE</Text>
              <Text fontWeight="thin" mb="2" color="#999076">
              Pixel-perfect precision for any hand size and grip style
              </Text>
              <Text fontWeight="light" color="#44d62c">
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
            <Image src="https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/mousemats-category-500x500.jpg" />
            <CardBody>
              <Text mb="2">MOUSE MATS</Text>
              <Text color="#999076" fontWeight="thin" mb="2">
              Soft, hard, and hybrid designs to enhance your control
              </Text>
              <Text fontWeight="light" color="#44d62c">
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
            <Image src="https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/keyboards-category-500x500.jpg" />
            <CardBody>
              <Text mb="2">KEYBOARDS</Text>
              <Text color="#999076" fontWeight="thin" mb="2">
              Optical, mechanical, and every type in between
              </Text>
              <Text fontWeight="light" color="#44d62c">
                Learn More{" "}
              </Text>
            </CardBody>
          </Card>
        </Flex>
      </Box> */}
      {/* extra */}
      {/* <Box p="10" bg="#252525">
        <Flex gap="5">
          <Card
            maxW="sm"
            bg="#111111"
            variant="filled"
            borderRadius="0"
            borderBottom={"1.5px solid #44d62c"}
          >
            <Image src="https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/headsets-category-500x500.jpg" />
            <CardBody>
              <Text mb="2">HEADSETS</Text>
              <Text fontWeight="thin" mb="2" color="#999076">
              Tuned for gaming, lifestyle, or a perfect mix of both
              </Text>
              <Text fontWeight="light" color="#44d62c">
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
            <Image src="https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/speakers-category-500x500.jpg" />
            <CardBody>
              <Text mb="2">SPEAKERS</Text>
              <Text color="#999076" fontWeight="thin" mb="2">
                Set the soundstage for full-range immersion
              </Text>
              <Text fontWeight="light" color="#44d62c">
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
            <Image src="https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/chairs-category-500x500.jpg" />
            <CardBody>
              <Text mb="2">CHAIRS</Text>
              <Text color="#999076" fontWeight="thin" mb="2">
              Perfecting the science of comfort and support
              </Text>
              <Text fontWeight="light" color="#44d62c">
                Learn More{" "}
              </Text>
            </CardBody>
          </Card>
        </Flex>
      </Box> */}
   
    </Box>
  );
};

export default PcMain;
