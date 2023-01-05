import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Divider,
  Image,
  Flex,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg={useColorModeValue("#111111")}>
      <Container as={Stack} maxW={"6x1"} py={10} w="85%">
        <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }}>
          <Stack align={"flex-start"}>
            <Text color={"white"} fontSize={17}>
              Shop
            </Text>
            <Link href={"#"} color={"gray"} _hover={{ color: "white" }}>
              RazerStores
            </Link>
            <Link href={"#"} color={"gray"} _hover={{ color: "white" }}>
              RazerCafe
            </Link>
            <Link href={"#"} color={"gray"} _hover={{ color: "white" }}>
              Store Locator
            </Link>
            <Link href={"#"} color={"gray"} _hover={{ color: "white" }}>
              Purchase Programs
            </Link>
            <Link href={"#"} color={"gray"} _hover={{ color: "white" }}>
              Education
            </Link>
            <Link href={"#"} color={"gray"} _hover={{ color: "white" }}>
              Exclusives
            </Link>
            <Link href={"#"} color={"gray"} _hover={{ color: "white" }}>
              RazerStore Rewards
            </Link>
            <Link href={"#"} color={"gray"} _hover={{ color: "white" }}>
              Newsletter
            </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Text color={"white"} fontSize={17}>
              Explore
            </Text>
            <Link href={"#"} color={"gray"} _hover={{ color: "white" }}>
              Technology
            </Link>
            <Link href={"#"} color={"gray"} _hover={{ color: "white" }}>
              Chroma RGB
            </Link>
            <Link href={"#"} color={"gray"} _hover={{ color: "white" }}>
              Concepts
            </Link>
            <Link href={"#"} color={"gray"} _hover={{ color: "white" }}>
              Esports
            </Link>
            <Link href={"#"} color={"gray"} _hover={{ color: "white" }}>
              Collabs
            </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Text color={"white"} fontSize={17}>
              Support
            </Text>
            <Link href={"#"} color={"gray"} _hover={{ color: "white" }}>
              Get Help
            </Link>
            <Link href={"#"} color={"gray"} _hover={{ color: "white" }}>
              Registration & Warranty
            </Link>
            <Link href={"#"} color={"gray"} _hover={{ color: "white" }}>
              RazerStore Support
            </Link>
            <Link href={"#"} color={"gray"} _hover={{ color: "white" }}>
              RazerCare
            </Link>
            <Link href={"#"} color={"gray"} _hover={{ color: "white" }}>
              Manage Razer ID
            </Link>
            <Link href={"#"} color={"gray"} _hover={{ color: "white" }}>
              Support Videos
            </Link>
            <Link href={"#"} color={"gray"} _hover={{ color: "white" }}>
              Accessibility Statement
            </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Text color={"white"} fontSize={17}>
              Company
            </Text>
            <Link href={"#"} color={"gray"} _hover={{ color: "white" }}>
              About Us
            </Link>
            <Link href={"#"} color={"gray"} _hover={{ color: "white" }}>
              Careers
            </Link>
            <Link href={"#"} color={"gray"} _hover={{ color: "white" }}>
              Press Room
            </Link>
            <Link href={"#"} color={"gray"} _hover={{ color: "white" }}>
              zVentures
            </Link>
            <Link href={"#"} color={"gray"} _hover={{ color: "white" }}>
              Contact Us
            </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Text color={"#44d62c"} fontSize={16}>
            FOR GAMERS. BY GAMERS.™
            </Text>
            <Flex pl={"30%"}>
              <Image src="https://assets2.razerzone.com/images/phoenix/SM0001-facebook.svg" w={10}/>
              <Image src="https://assets2.razerzone.com/images/phoenix/SM0003-instagram.svg" w={10}/>
              <Image src="https://assets2.razerzone.com/images/phoenix/SM0005-twitter.svg" w={10}/>
            </Flex>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box py={10} w="85%" m={"auto"}>
        <Divider w={"100%"} m="auto" />
        <Flex justifyContent={"space-between"}>
        <Text pt={6} color={"gray"}>
          Copyright © 2022 Razer Inc. All rights reserved.
        </Text>
        <Text pt={6} color={"gray"}>Site Map | Legal Terms | Privacy Policy | Cookie Policy</Text>
          <Text pt={6} color={"gray"}>United States | change Location </Text>
          </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
