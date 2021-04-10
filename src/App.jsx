import React from "react"
import "react-sliding-pane/dist/react-sliding-pane.css"
import { Flex } from "@chakra-ui/react"
import { Intro } from "./Intro"

function App() {
  return (
    <Flex alignItems="center" justify="center" w="full">
      <Intro />
    </Flex>
  )
}

export default App
