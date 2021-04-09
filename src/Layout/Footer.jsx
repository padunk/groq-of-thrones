import React from "react"
import { Link, Flex } from "@chakra-ui/layout"
import { Text } from "@chakra-ui/layout"

export const Footer = () => {
  return (
    <Flex
      as="footer"
      align="center"
      justify="center"
      bg="gray.700"
      color="whitesmoke"
      paddingY="2"
    >
      <Text color="gray.500">
        Made by{" "}
        <Link
          fontWeight="bold"
          href="https://anakagung.com"
          isExternal
          _hover={{ color: "yellow.400" }}
        >
          Abraham A. A.
        </Link>
      </Text>
    </Flex>
  )
}
