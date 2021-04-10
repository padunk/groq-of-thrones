import React from "react"
import { Flex } from "@chakra-ui/react"
import { Image } from "@chakra-ui/image"

export const NoMatch = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      w="full"
      bg="black"
    >
      <Image
        src="https://media.giphy.com/media/YyKPbc5OOTSQE/giphy.gif"
        alt="404 page not found"
      />
    </Flex>
  )
}
