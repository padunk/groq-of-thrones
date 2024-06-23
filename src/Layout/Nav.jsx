import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  LinkBox,
  Spacer,
  VisuallyHidden,
} from "@chakra-ui/react"
import React, { useContext } from "react"

import { LessonContext } from "../context/LessonContext"
import { NavLink } from "react-router-dom"
import { VscGithubInverted } from "react-icons/vsc"

export const Nav = () => {
  const [openLessonPane, setOpenLessonPane] = useContext(LessonContext)
  return (
    <Flex
      bg="gray.700"
      color="whitesmoke"
      padding="2"
      alignItems="center"
      as="nav"
    >
      <Flex gap="4" alignItems="center">
        <NavLink to="/">
          <Image
            src="/logo.svg"
            display="inline"
            boxSize="40px"
            alt="unofficial groq logo"
          />
        </NavLink>
        <Heading
          fontWeight="light"
          color="green.300"
          display="flex"
          alignItems="center"
          as="h1"
        >
          <p>GROQ of Thrones</p>
        </Heading>
      </Flex>
      <Spacer />
      <Flex as="ul" alignItems="center">
        <Box as="li" listStyleType="none" paddingY="1" paddingX="2">
          <NavLink to="/">Home</NavLink>
        </Box>
        <Box as="li" listStyleType="none" paddingY="1" paddingX="2">
          <NavLink to="/about">About</NavLink>
        </Box>
        <Box as="li" listStyleType="none" paddingY="1" paddingX="2">
          <button onClick={() => setOpenLessonPane(!openLessonPane)}>
            Lessons
          </button>
        </Box>
        <Box as="li" listStyleType="none" paddingY="1" paddingX="2">
          <NavLink to="/solutions">Solutions</NavLink>
        </Box>
        <LinkBox as="li" listStyleType="none" paddingY="1" paddingX="2">
          <Link href="https://github.com/padunk/groq-of-thrones" isExternal>
            <VscGithubInverted />
            <VisuallyHidden>Github Repository</VisuallyHidden>
          </Link>
        </LinkBox>
      </Flex>
    </Flex>
  )
}
