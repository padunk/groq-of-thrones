import React from "react"
import { Flex, Image } from "@chakra-ui/react"

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
