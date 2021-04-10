import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import { Flex, Box, Spacer, Heading, Link } from "@chakra-ui/react"
import { VscGithubInverted } from "react-icons/vsc"
import { LessonContext } from "../context/LessonContext"
import { Image } from "@chakra-ui/image"

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
          <NavLink to="/">
            <Image src="/logo.svg" display="inline" boxSize="40px" />
          </NavLink>
          GROQ of Thrones
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
          <Link href="https://github.com/padunk/groq-of-thrones" isExternal>
            <VscGithubInverted />
          </Link>
        </Box>
      </Flex>
    </Flex>
  )
}
