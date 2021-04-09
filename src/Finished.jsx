import React from "react"
import { Flex, Text, Box } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image"

export const Finished = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      w="full"
    >
      <Text color="purple.500" fontSize="2xl">
        YOU DID IT!
      </Text>
      <Box h="full" display="flex" justifyContent="center" alignItems="center">
        <Image
          src="https://media.giphy.com/media/3o7qE2VAxuXWeyvJIY/giphy.gif"
          alt="dancing boy"
          borderRadius="md"
          objectFit="cover"
        />
      </Box>
    </Flex>
  )
}
