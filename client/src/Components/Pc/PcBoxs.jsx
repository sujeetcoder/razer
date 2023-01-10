import { Box, SimpleGrid } from '@chakra-ui/react'
import SinglePcBox from './SinglePcBox'


const PcBoxs = ({data}) => {
  return (
    <Box w="100%" bgColor={"#1a1a1a"} p="20px">
        <SimpleGrid columns={[1,2,2,3,3]} w={"100%"} justifyItems="center" justifyContent={"space-around"}  spacing={"15px"}   >
            {data && data.map((el,i)=>(
                <SinglePcBox key={i} {...el} />
            ))}
        </SimpleGrid>
    </Box>
  )
}

export default PcBoxs