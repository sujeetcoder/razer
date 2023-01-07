import { Box, Flex, HStack, Image, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react'

const StoreBigCrousel = () => {
    const arrowStyles = {
        cursor: "pointer",
        pos: "absolute",
        top: "30%",
        w: "auto",
        p: "16px",
        color: "#44d62c",
        fontSize: "90px",
        transition: "0.6s ease",
        borderRadius: "0 3px 3px 0",
        userSelect: "red",
        _hover: {
          opacity: 0.8,
        },
      };
      const slides = [
        {
          img: "https://assets2.razerzone.com/images/pnx.assets/186921c07aa55486994e5d5de6ecc511/1920x400_edge-store.png",
          label: "RAZER EDGE",
          description: "The Ultimate Android Gaming Handheld",
          btntxt:"Reserve Now"
        },
        {
          img: "https://assets2.razerzone.com/images/pnx.assets/8e59bf4756003c288c33ed287d3371bc/1920x400-(3).jpg",
          label: "RAZER LAPTOP SKINS",
          description: "The Ultimate Android Gaming Handheld",
          btntxt:"Choose Your Style"
        },
        {
          img: "https://assets2.razerzone.com/images/pnx.assets/3ab06c5a17df1ec96d6616f360e65e43/razer-refurbished-laptops_desktop_1920x400.jpg",
          label: "RAZER CERTIFIED REFURBISHED PRODUCTS",
          description:
            "The Ultimate Android Gaming Handheld",
            btntxt:"Shop All Refurbished Products"
        },
      ];
      const [currentSlide, setCurrentSlide] = useState(0);
      const slidesCount = slides.length;
    
      const prevSlide = () => {
        setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
      };
    
      const nextSlide = () => {
        setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
      };
    
      const setSlide = (slide) => {
        setCurrentSlide(slide);
      };
    
      const carouselStyle = {
        transition: "all .5s",
        ml: `-${currentSlide * 100}%`,
      };
  return (
    <Flex
      w="100%" 
      alignItems="center"
      justifyContent="center"
    >
      <Flex w="100%" pos="relative" overflow="hidden">
        <Flex h="400px" w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
              <Image
                src={slide.img}
                alt="carousel image"
                boxSize="full"
                backgroundSize="cover"
              />
              <Stack
                pos="absolute"
                bottom="150px"
                textAlign="left"
                w="30%"
                ml={"60%"}
                color="white"
              >
                <Text fontSize={28}>{slide.label}</Text>
                <Text fontSize={20} color="gray">{slide.description}</Text>
                <Flex justifyContent={"flex-start"} alignItems="center">
                <Text color={"#44d62c"}>{slide.btntxt}</Text><Box color={"#44d62c"} h={6}>{">"}</Box>
                </Flex>
              </Stack>
            </Box>
          ))}
        </Flex>
        <Text {...arrowStyles} left="0" onClick={prevSlide}>
          &#10094;
        </Text>
        <Text {...arrowStyles} right="0" onClick={nextSlide}>
          &#10095;
        </Text>
        <HStack justify="center" pos="absolute" bottom="8px" w="full">
          {Array.from({
            length: slidesCount,
          }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor="pointer"
              boxSize={["7px", null, "15px"]}
              m="0 2px"
              bg={currentSlide === slide ? "#44d62c" : "whiteAlpha.600"}
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{
                bg: "#44d62c",
              }}
              onClick={() => setSlide(slide)}
            ></Box>
          ))}
        </HStack>
      </Flex>
    </Flex>
  )
}

export default StoreBigCrousel