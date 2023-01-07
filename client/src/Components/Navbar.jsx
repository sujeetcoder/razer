import {
  Box,
  useColorModeValue,
  useDisclosure,
  chakra,
  Flex,
  HStack,
  IconButton,
  VStack,
  CloseButton,
  Button,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { BiSearch, BiCartAlt } from "react-icons/bi";
import { FcMenu } from "react-icons/fc";
import { Link } from "react-router-dom";
const Navbar = () => {
  const bg = useColorModeValue("Black");
  const mobileNav = useDisclosure();
  return (
    <React.Fragment>
      <chakra.header
        borderBottom={"2px solid #44d62c"}
        bg={bg}
        color="gray"
        w="100%"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow="md"
      >
        <Flex
          alignItems="center"
          w="100%"
          justifyContent="space-between"
          mx="auto"
        >
          <HStack display="flex" margin={"auto"} w="100%" alignItems="center">
            <Box
              w="100%"
              margin={"auto"}
              display={{
                base: "inline-flex",
                md: "none",
              }}
            >
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<FcMenu size={50} />}
                onClick={mobileNav.onOpen}
              />
              <Link to="/">
                <Flex justifyContent={"space-evenly"} alignItems="center">
                  <Image
                    src="https://assets2.razerzone.com/images/phoenix/razer-ths-logo.svg"
                    w={"40px"}
                    m="auto"
                  />
                  <Button
                    _hover={{ bg: "black", color: "white" }}
                    variant="ghost"
                    size="sm"
                  >
                    <BiCartAlt size={25} />
                  </Button>
                </Flex>
              </Link>
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                <Link to="/store"><Button
                  fontWeight="normal"
                  fontSize={18}
                  w="full"
                  variant="ghost"
                >
                  Store
                </Button></Link>
                <Link to="/pc">
                  <Button
                    fontWeight="normal"
                    fontSize={18}
                    w="full"
                    variant="ghost"
                  >
                    PC
                  </Button>
                </Link>
                <Button
                  fontWeight="normal"
                  fontSize={18}
                  w="full"
                  variant="ghost"
                >
                  Console
                </Button>
                <Link to="/mobile">
                  <Button
                    fontWeight="normal"
                    fontSize={18}
                    w="full"
                    variant="ghost"
                  >
                    Mobile
                  </Button>
                </Link>
                <Button
                  fontWeight="normal"
                  fontSize={18}
                  w="full"
                  variant="ghost"
                >
                  LifeStyle
                </Button>
                <Button
                  fontWeight="normal"
                  fontSize={18}
                  w="full"
                  variant="ghost"
                >
                  Services
                </Button>
                <Button
                  fontWeight="normal"
                  fontSize={18}
                  w="full"
                  variant="ghost"
                >
                  Community
                </Button>
                <Button
                  fontWeight="normal"
                  fontSize={18}
                  w="full"
                  variant="ghost"
                >
                  Support
                </Button>
                <Button
                  fontWeight="normal"
                  fontSize={18}
                  w="full"
                  variant="ghost"
                >
                  Support
                </Button>
              </VStack>
            </Box>

            <HStack
              w="100%"
              justifyContent={"center"}
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
              <Link to="/">
                <Image
                  src="https://assets2.razerzone.com/images/phoenix/razer-ths-logo.svg"
                  mr="2%"
                  w={"38px"}
                />
              </Link>
              <Link to="/store"><Button
                _hover={{ bg: "black", color: "white" }}
                fontWeight="normal"
                fontSize={20}
                variant="ghost"
                size="sm"
              >
                Store
              </Button></Link>
              <Link to="/pc">
                <Button
                  _hover={{ bg: "black", color: "white" }}
                  fontWeight="normal"
                  fontSize={20}
                  variant="ghost"
                  size="sm"
                >
                  PC
                </Button>
              </Link>
              <Link to="/console">
                <Button
                  _hover={{ bg: "black", color: "white" }}
                  fontWeight="normal"
                  fontSize={20}
                  variant="ghost"
                  size="sm"
                >
                  Console
                </Button>
              </Link>
              <Link to="/mobile">
                <Button
                  _hover={{ bg: "black", color: "white" }}
                  fontWeight="normal"
                  fontSize={20}
                  variant="ghost"
                  size="sm"
                >
                  Mobile
                </Button>
              </Link>
              <Button
                _hover={{ bg: "black", color: "white" }}
                fontWeight="normal"
                fontSize={20}
                variant="ghost"
                size="sm"
              >
                LifeStyle
              </Button>
              <Button
                _hover={{ bg: "black", color: "white" }}
                fontWeight="normal"
                fontSize={20}
                variant="ghost"
                size="sm"
              >
                Services
              </Button>
              <Button
                _hover={{ bg: "black", color: "white" }}
                fontWeight="normal"
                fontSize={20}
                variant="ghost"
                size="sm"
              >
                Community
              </Button>
              <Button
                _hover={{ bg: "black", color: "white" }}
                fontWeight="normal"
                fontSize={20}
                variant="ghost"
                size="sm"
              >
                Support
              </Button>
              <Button
                _hover={{ bg: "black", color: "white" }}
                variant="ghost"
                size="sm"
              >
                <BiSearch size={25} />
              </Button>
              <Button
                _hover={{ bg: "black", color: "white" }}
                variant="ghost"
                size="sm"
              >
                <BiCartAlt size={25} />
              </Button>
            </HStack>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};

export default Navbar;
