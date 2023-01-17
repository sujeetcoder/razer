import React from 'react'
import { Table, Tr, Th, Td,Box } from "@chakra-ui/react"
const Tabl = () => {
  return (
    <>
 <Box style={{ overflowX: "auto" }}  p={"3%"}>
<Table >
  <Tr >
    <Th>Compatibility</Th>
    <Th>Connectivity</Th>
    <Th>Razer Mecha-Tactile Buttons</Th>
    <Th>Multi-Function Buttons</Th>
    <Th>Trigger Stops / Locks</Th>
    <Th>Razer Chroma RGB</Th>
    <Th>Customizable Thumbsticks</Th>
    <Th>Circular D-Pad</Th>
  </Tr>
  <Tr>
    <Td >Xbox Series X|S, Xbox One, PC</Td>
    <Td>Wired / Fixed Cable</Td>
    <Td>Yes</Td>
    <Td>2 Top Buttons</Td>
    <Td>Yes</Td>
    <Td>No</Td>
    <Td>No</Td>
    <Td>No</Td>
  </Tr>
  <Tr>
    <Td>Xbox Series X|S, Xbox One, PC</Td>
    <Td>Wired / Detachable USB-C Cable</Td>
    <Td>Yes</Td>
    <Td>2 Top + 4 Back Buttons</Td>
    <Td>Yes</Td>
    <Td>Yes</Td>
    <Td>Yes</Td>
    <Td>No</Td>
  </Tr>
  <Tr>
    <Td>PS5™ console or PC (Windows)</Td>
    <Td>Razer™ HyperSpeed Wireless</Td>
    <Td>Yes</Td>
    <Td>2 Top + 4 Back Buttons</Td>
    <Td>Razer™ HyperTrigger</Td>
    <Td>Yes</Td>
    <Td>Yes</Td>
    <Td>Yes</Td>
  </Tr>
</Table>
</Box>     
    </>
  )
}

export default Tabl