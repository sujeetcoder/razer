import { Box, SimpleGrid } from '@chakra-ui/react'
import SingleBox from './SingleBox'

const GridTopicBox = ({data,column,padding}) => {
  return (
    <Box w="100%" bgColor={"#1a1a1a"} p={padding?`20px ${padding}`:"20px 20px"}>
        <SimpleGrid columns={[1,2,2,column?column:3,column?column:3]} w={"100%"} justifyItems="center" justifyContent={"space-around"}  spacing={"15px"}   >
            {data && data.map((el,i)=>(
                <SingleBox key={i} {...el} />
            ))}
        </SimpleGrid>
    </Box>
  )
}

export default GridTopicBox