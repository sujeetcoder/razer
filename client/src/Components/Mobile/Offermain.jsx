import { Box } from '@chakra-ui/react'

const Offermain = ({title}) => {
  return (
    <Box textAlign="center" bg="#555555" p="3">
        {title || "All orders over US$79 will enjoy free standard shipping to the United States."}
    </Box>
  )
}

export default Offermain