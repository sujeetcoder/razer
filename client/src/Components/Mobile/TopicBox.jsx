import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const TopicBox = ({children,title,color}) => {
  return (
<Box pt="35px" pb="35px" w="100%" bgColor={color?color:"#1a1a1a"} textAlign="center">
    <Box w={["95%","90%","80%","70%","65%"]} m="auto">
        <Heading
            textAlign="center"
            as="h1"
            fontWeight="100"
            color={"#44d62c"}
          >
            {title}
        </Heading>
        <Text
            textAlign="center"
            letterSpacing="1px"
            color={"#a593a1"}
            mt="10px"
          >
            {children}
          </Text>
    </Box>
</Box>
  )
}

export default TopicBox