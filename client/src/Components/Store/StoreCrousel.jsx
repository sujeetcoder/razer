import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../../Styles/HomeCarousel.module.css";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1023, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const StoreCrousel = () => {
  const [top, setTop] = useState([]);
  axios(`https://mock-server-686g.onrender.com/mishra`)
    .then((res) => setTop(res.data))
    .catch((err) => console.log(err.message));
  return (
    <Box w={"95%"} h="600px" ml="5%" mt={"1%"} mb="5%">
      <Carousel ssr={true} responsive={responsive}>
        {top &&
          top.map((el, i) => (
            <Box h="600px"  w="350px" key={i} bg={"#111111"} className={styles.inn_boxx}>
            <Flex bg={el.bg} w="30%" h={10} fontSize={20} fontWeight="bold" justifyContent={"center"} mt="5%" alignItems="center">{el.head}</Flex>
              <Image  src={el.src} alt="error" w={"100%"} h="300" />
              <Box mt={"10%"} pl={5} pt={5} pr={5} textAlign="left" bg={"#222222"} h="220px">
                <Text color={"white"} fontSize={22}>
                  {el.title}
                </Text>
                <Box >
                  <Text color={"gray"}>
                    {el.description}
                  </Text>
                </Box>
                <Flex justifyContent={"space-between"} mt="22%">
                  <Text
                  >
                    US${el.price}
                  </Text>
                  <Button bg={"#44d62c"} _hover={{bg:"#B6E4A6"}} h="30px">{el.btntxt}</Button>
                  </Flex>
              </Box>
            </Box>
          ))}
      </Carousel>
    </Box>
  );
};

export default StoreCrousel;
