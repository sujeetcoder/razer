import {
  Box,
  Flex,
  Input,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import styles from "../Styles/Support.module.css";
const Support = () => {
  return (
    <Box w={"100%"}>
      <Box className={styles.sup_first} h="500px">
        <Box pt={"80px"}>
          <Text color={"white"} fontSize={40}>
            Welcome to Razer Support
          </Text>
          <Text color="gray" fontSize={22}>
            We’re here to help
          </Text>
          <Input
            w={"40%"}
            h="50px"
            mt={5}
            fontSize={22}
            border="3px solid white"
            placeholder="Search Support (e.g. Blade Pro)"
          />
        </Box>
      </Box>
      <Box bg={"#222222"} h="200px" mt={"-110px"}></Box>
      <Box bg={"#1a1a1a"} py="5%">
        <Flex justifyContent={"center"} gap="20px">
          <Box border={"1px solid white"} w={"30%"} py="25px" pl="20px">
            <Text fontWeight={"bold"} fontSize={25} mb="5px">
              Popular Support Videos
            </Text>
            <UnorderedList>
              <ListItem
                textAlign={"left"}
                _hover={{ color: "#44d62c", cursor: "pointer" }}
                fontSize={16}
              >
                View the latest support videos
              </ListItem>
              <ListItem
                textAlign={"left"}
                _hover={{ color: "#44d62c", cursor: "pointer" }}
                fontSize={16}
              >
                Set up the Razer Katana
              </ListItem>
              <ListItem
                textAlign={"left"}
                _hover={{ color: "#44d62c", cursor: "pointer" }}
                fontSize={16}
              >
                Resolve Razer Synapse when it does not start
              </ListItem>
              <ListItem
                textAlign={"left"}
                _hover={{ color: "#44d62c", cursor: "pointer" }}
                fontSize={16}
              >
                Troubleshoot and resolve headset mic issues
              </ListItem>
              <ListItem
                textAlign={"left"}
                _hover={{ color: "#44d62c", cursor: "pointer" }}
                fontSize={16}
              >
                Detect Razer devices in Synapse 3
              </ListItem>
            </UnorderedList>
          </Box>
          <Box border={"1px solid white"} w={"30%"} py="25px" pl="20px">
            <Text fontWeight={"bold"} fontSize={25} mb="5px">
              Popular Support Videos
            </Text>
            <UnorderedList>
              <ListItem
                textAlign={"left"}
                _hover={{ color: "#44d62c", cursor: "pointer" }}
                fontSize={16}
              >
                Razer online services (self-service tools)
              </ListItem>
              <ListItem
                textAlign={"left"}
                _hover={{ color: "#44d62c", cursor: "pointer" }}
                fontSize={16}
              >
                Razer Synapse 3 FAQs
              </ListItem>
              <ListItem
                textAlign={"left"}
                _hover={{ color: "#44d62c", cursor: "pointer" }}
                fontSize={16}
              >
                Help with 7.1 Surround Sound activation
              </ListItem>
              <ListItem
                textAlign={"left"}
                _hover={{ color: "#44d62c", cursor: "pointer" }}
                fontSize={16}
              >
                Firmware updates for Razer Peripherals
              </ListItem>
              <ListItem
                textAlign={"left"}
                _hover={{ color: "#44d62c", cursor: "pointer" }}
                fontSize={16}
              >
                Device is not detected by Razer Synapse
              </ListItem>
            </UnorderedList>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Support;
