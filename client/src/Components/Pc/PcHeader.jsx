import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Link,
  Center,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
const PcHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const links = [
    { text: "Laptops" },
    { text: "Desktops & Components" },
    { text: "Monitors" },
    { text: "Mice" },
    { text: "Mats" },
    { text: "Keyboards" },
    { text: "Headsets" },
    { text: "Speakers" },
    { text: "Streaming" },
    { text: "Productivity" },
    { text: "Chairs" },
    { text: "Software" },
  ];

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        borderBottom={"1px solid #44d62c"}>
  
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}  px="100">
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {links.map((link) => (
                <Link>{link.text}</Link>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {links.map((link) => (
                <Link>{link.text}</Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      
      </Box>

    
    </>
  );
};

export default PcHeader;
