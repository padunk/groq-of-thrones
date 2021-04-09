import React from "react"
import { Flex } from "@chakra-ui/layout"
import { LessonPane } from "./LessonPane"
import { Footer } from "./Footer"
import { Nav } from "./Nav"

export const Layout = ({ children }) => {
  return (
    <Flex
      direction="column"
      h="100vh"
      bg="gray.800"
      color="whitesmoke"
      overflow="hidden"
    >
      <Nav />
      <Flex flexGrow="1" flexShrink="1" flexBasis="auto" position="relative">
        <LessonPane />
        {children}
      </Flex>
      <Footer />
    </Flex>
  )
}
