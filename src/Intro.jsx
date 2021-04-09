import React from "react"
import { Button } from "@chakra-ui/button"
import { Text, Flex, Link, Heading } from "@chakra-ui/layout"

export const Intro = () => {
  return (
    <Flex direction="column" h="full" justifyContent="center">
      <Heading mb="8">Welcome!</Heading>
      <Text>
        Here you will learn about GROQ - Graph Relational Object Queries
      </Text>
      <Text>
        If you want to know more, head to our{" "}
        <Link
          href="/about"
          bgGradient="linear(to-r, #F56565 ,#0BC5EA)"
          bgClip="text"
          fontWeight="semibold"
        >
          About Page
        </Link>
      </Text>
      <Button colorScheme="pink" mt="4" p="0">
        <Link
          href="/lesson/1"
          w="full"
          h="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          Let's Begin
        </Link>
      </Button>
    </Flex>
  )
}
