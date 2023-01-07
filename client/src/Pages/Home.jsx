import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../Styles/Home.module.css";
const Home = () => {
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
      <Box
        className={styles.main_boxx}
        bg="#222222"
        w="100%"
        // border={"2px solid red"}
        mb={"20px"}
      >
        {/* 1 Box */}
        <Box className={styles.first_box} pt="1%" w="100%">
          <Text className={styles.F_text}>
            THE NEW RAZER BLADE 16 & 18
          </Text>
          <Text className={styles.S_text}>
            REGISTER YOUR INTEREST TODAY
          </Text>
          <Flex justifyContent={"center"} gap={20} className={styles.flex_direc}>
            <Flex justifyContent={"center"} alignItems="center" gap={2}>
              <Text
                className={styles.I_text}
                _hover={{ textDecoration: "underline" }}
              >
                Razer Blade 16
              </Text>
              <Box color={"#44d62c"}>{">"}</Box>
            </Flex>
            <Flex justifyContent={"center"} alignItems="center" gap={2}>
              <Text
                className={styles.I_text}
                _hover={{ textDecoration: "underline" }}
              >
                Razer Blade 18
              </Text>
              <Box color={"#44d62c"}>{">"}</Box>
            </Flex>
          </Flex>
        </Box>
        {/* 2 Box */}
        <Box className={styles.second_box} mt="0.5%" w="100%">
          <Text className={styles.F_text}>
            RAZER LEVIATHAN V2 PRO
          </Text>
          <Text className={styles.S_text}>
            HEAD-TRACKING BEAMFORMING SOUNDBAR
          </Text>
          <Flex justifyContent={"center"}  gap={20}>
            <Flex justifyContent={"center"} alignItems="center" gap={2}>
              <Text
                className={styles.I_text}
                _hover={{ textDecoration: "underline" }}
              >
                Learn More
              </Text>
              <Box color={"#44d62c"}>{">"}</Box>
            </Flex>
            <Flex justifyContent={"center"} alignItems="center" gap={2}>
              <Text
                className={styles.I_text}
                _hover={{ textDecoration: "underline" }}
              >
                Buy
              </Text>
              <Box color={"#44d62c"}>{">"}</Box>
            </Flex>
          </Flex>
        </Box>
        {/* 3 Box */}
        <Box className={styles.third_box} mt="0.5%" pt={5} w="100%">
          <Text className={styles.F_text}>
            RAZER KIYO PRO ULTRA
          </Text>
          <Text className={styles.S_text}>
            THE LARGEST SENSOR IN A WEBCAM
          </Text>
          <Flex justifyContent={"center"} gap={20}>
            <Flex justifyContent={"center"} alignItems="center" gap={2}>
              <Text
                className={styles.I_text}
                _hover={{ textDecoration: "underline" }}
              >
                Learn More
              </Text>
              <Box color={"#44d62c"}>{">"}</Box>
            </Flex>
            <Flex justifyContent={"center"} alignItems="center" gap={2}>
              <Text
                className={styles.I_text}
                _hover={{ textDecoration: "underline" }}
              >
                Buy
              </Text>
              <Box color={"#44d62c"}>{">"}</Box>
            </Flex>
          </Flex>
        </Box>
        {/* boxess over now grid */}
        <Box pt={5} h="auto" w="100%" bg={"#222222"} pb="20px">
          <SimpleGrid className={styles.give_grid}>
            <Box w="100%" h="550px">
              <Box className={styles.gone_box} w="100%" h="full" pt={5}>
                <Text fontSize={"2.5rem"} fontWeight="600">
                  PROJECT CAROL
                </Text>
                <Text fontSize={"1.260rem"}>
                  IMMERSIVE HEAD SUPPORT WITH SURROUND SOUND AND HAPTICS
                </Text>
                <Flex
                  justifyContent={"center"}
                  alignItems="center"
                  gap={2}
                  mt="2%"
                >
                  <Text
                    fontSize={"1.100rem"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Learn More
                  </Text>
                  <Box color={"#44d62c"}>{">"}</Box>
                </Flex>
              </Box>
            </Box>
            <Box w="100%" h="550px">
              <Box className={styles.gtwo_box} w="100%" h="full" pt={5}>
                <Text fontSize={"2.5rem"} fontWeight="600">
                  RAZER ENKI PRO
                </Text>
                <Text fontSize={"1.260rem"}>
                  AUTOMOBILI LAMBORGHINI EDITION
                </Text>
                <Flex justifyContent={"center"} gap={"5%"}>
                  <Flex
                    justifyContent={"center"}
                    alignItems="center"
                    gap={2}
                    mt="2%"
                  >
                    <Text
                      fontSize={"1.100rem"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Learn More
                    </Text>
                    <Box color={"#44d62c"}>{">"}</Box>
                  </Flex>
                  <Flex
                    justifyContent={"center"}
                    alignItems="center"
                    gap={2}
                    mt="2%"
                  >
                    <Text
                      fontSize={"1.100rem"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Buy
                    </Text>
                    <Box color={"#44d62c"}>{">"}</Box>
                  </Flex>
                </Flex>
              </Box>
            </Box>
            <Box w="100%" h="550px">
              <Box className={styles.gthree_box} w="100%" h="full" pt={5}>
                <Text fontSize={"2.5rem"} fontWeight="600">
                  RAZER WOLVERINE V2 PRO
                </Text>
                <Text fontSize={"1.260rem"}>CONNECT. CONTROL. CONQUER.</Text>
                <Flex justifyContent={"center"} gap={"5%"}>
                  <Flex
                    justifyContent={"center"}
                    alignItems="center"
                    gap={2}
                    mt="2%"
                  >
                    <Text
                      fontSize={"1.100rem"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Learn More
                    </Text>
                    <Box color={"#44d62c"}>{">"}</Box>
                  </Flex>
                  <Flex
                    justifyContent={"center"}
                    alignItems="center"
                    gap={2}
                    mt="2%"
                  >
                    <Text
                      fontSize={"1.100rem"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Buy
                    </Text>
                    <Box color={"#44d62c"}>{">"}</Box>
                  </Flex>
                </Flex>
              </Box>
            </Box>
            <Box w="100%" h="550px">
              <Box className={styles.gfour_box} w="100%" h="full" pt={5}>
                <Text fontSize={"2.5rem"} fontWeight="600">
                  RAZER VR ACCESSORIES
                </Text>
                <Text fontSize={"1.260rem"}>FOR META QUEST 2</Text>
                <Flex
                  justifyContent={"center"}
                  alignItems="center"
                  gap={2}
                  mt="2%"
                >
                  <Text
                    fontSize={"1.100rem"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Learn More
                  </Text>
                  <Box color={"#44d62c"}>{">"}</Box>
                </Flex>
              </Box>
            </Box>
            <Box w="100%" h="550px">
              <Box className={styles.gfive_box} w="100%" h="full" pt={5}>
                <Text fontSize={"2.5rem"} fontWeight="600">
                  RAZER EDGE
                </Text>
                <Text fontSize={"1.260rem"}>
                  THE ULTIMATE ANDROID GAMING HANDHELD
                </Text>
                <Flex justifyContent={"center"} gap={"5%"}>
                  <Flex
                    justifyContent={"center"}
                    alignItems="center"
                    gap={2}
                    mt="2%"
                  >
                    <Text
                      fontSize={"1.100rem"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Learn More
                    </Text>
                    <Box color={"#44d62c"}>{">"}</Box>
                  </Flex>
                  <Flex
                    justifyContent={"center"}
                    alignItems="center"
                    gap={2}
                    mt="2%"
                  >
                    <Text
                      fontSize={"1.100rem"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Reserve Now
                    </Text>
                    <Box color={"#44d62c"}>{">"}</Box>
                  </Flex>
                </Flex>
              </Box>
            </Box>
            <Box w="100%" h="550px">
              <Box className={styles.gsix_box} w="100%" h="full" pt={5}>
                <Text fontSize={"2.5rem"} fontWeight="600">
                  CHOOSE YOUR BLADE
                </Text>
                <Text fontSize={"1.260rem"}>REDISCOVER OUR 2022 LINE-UP</Text>
                <Flex justifyContent={"center"} gap={"5%"}>
                  <Flex
                    justifyContent={"center"}
                    alignItems="center"
                    gap={2}
                    mt="2%"
                  >
                    <Text
                      fontSize={"1.100rem"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Shop Blade 14
                    </Text>
                    <Box color={"#44d62c"}>{">"}</Box>
                  </Flex>
                  <Flex
                    justifyContent={"center"}
                    alignItems="center"
                    gap={2}
                    mt="2%"
                  >
                    <Text
                      fontSize={"1.100rem"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Shop Blade 15 & 17
                    </Text>
                    <Box color={"#44d62c"}>{">"}</Box>
                  </Flex>
                </Flex>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

export default Home;
