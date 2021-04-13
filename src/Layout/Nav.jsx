import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import {
  Flex,
  Box,
  Spacer,
  Heading,
  Link,
  LinkBox,
  Image,
  VisuallyHidden,
} from "@chakra-ui/react"
import { VscGithubInverted } from "react-icons/vsc"
import { LessonContext } from "../context/LessonContext"

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
      <Box>
        <Heading
          fontWeight="light"
          color="green.300"
          display="flex"
          alignItems="center"
        >
          <LinkBox>
            <NavLink to="/">
              <Image
                src="/logo.svg"
                display="inline"
                boxSize="40px"
                alt="unofficial groq logo"
              />
            </NavLink>
            GROQ of Thrones
          </LinkBox>
        </Heading>
      </Box>
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
