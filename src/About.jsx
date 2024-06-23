import React from "react"
import {
  Text,
  Box,
  ListIcon,
  List,
  ListItem,
  Link,
  Flex,
  Grid,
} from "@chakra-ui/react"
import { GiInspiration, GiBlackBook, GiRoad, GiSeaDragon } from "react-icons/gi"

const StyledLink = ({ href, children }) => {
  return (
    <Link
      href={href}
      isExternal
      bgGradient="linear(to-l, #F6E05E, #B794F4)"
      bgClip="text"
      _hover={{
        bgGradient: "linear(to-l, #F56565 ,#0BC5EA)",
      }}
    >
      {children}
    </Link>
  )
}

const abouts = {
  roadmap: [
    {
      name: "Highlight the GROQ syntax error in lesson editor.",
      href: "#",
    },
    {
      name: "Don't compare the user result with hardcode code.",
      href: "#",
    },
    { name: "Points system so this lesson looks like a game?", href: "#" },
    {
      name:
        "Restrict lesson so user need to finish one before moving forward? Need auth?",
      href: "#",
    },
    { name: "Preserve user code for each lesson.", href: "#" },
  ],
  anotherSource: [
    { name: "GROQ Documentation", href: "https://www.sanity.io/docs/groq" },
    {
      name: "GROQ Working Draft",
      href: "https://sanity-io.github.io/GROQ/draft/",
    },
    {
      name: "GROQ Cheat Sheet",
      href: "https://www.sanity.io/docs/query-cheat-sheet",
    },
    {
      name: "GROQ Slack Channel",
      href: "https://sanity-io-land.slack.com/archives/C011CAT70DD",
    },
    {
      name: "Learn GROQ in 30 minutes",
      href: "https://hdoro.dev/learn-groq",
    },
  ],
  author: [
    { name: "Is looking for a remote job 🔥 😎.", href: "#" },
    { name: "Live in Indonesia (GMT +7).", href: "#" },
    {
      name: "Love eating noodles, pork chop and 🍻 with friends.",
      href: "#",
    },
    {
      name:
        "Code in HTML, CSS, React, React Native, Svelte, Sanity, Amplify, and Firebase.",
      href: "#",
    },
  ],
}

export const About = () => {
  return (
    <Flex direction="column" h="full" w="full">
      <Box textAlign="center">
        <Text fontSize="4xl" py="4" color="green.400">
          About
        </Text>
      </Box>
      <Grid templateColumns="repeat(2, 1fr)" h="full" color="whiteAlpha.800">
        <Box w="xl" mx="auto">
          <Text fontSize="xl" color="green.500">
            Main inspiration for this project:
          </Text>
          <List spacing={2} maxW="xl" fontSize="md">
            <ListItem>
              <ListIcon
                as={GiInspiration}
                color="yellow.400"
                display="inline"
              />
              <StyledLink href="https://github.com/swyx/FSA-graphql-of-thrones">
                GraphQL of Thrones
              </StyledLink>{" "}
              by <StyledLink href="https://twitter.com/swyx">Swyx.</StyledLink>{" "}
            </ListItem>
            <ListItem>
              <ListIcon
                as={GiInspiration}
                color="yellow.400"
                display="inline"
              />
              Official GROQ playground by <a href="https://sanity.io">Sanity</a>
              : <StyledLink href="https://groq.dev/">GROQ Arcade</StyledLink>.
            </ListItem>
            <ListItem>
              <ListIcon
                as={GiInspiration}
                color="yellow.400"
                display="inline"
              />
              Lesson 1 - 6 of this lessons is from{" "}
              <StyledLink href="https://twitter.com/judofyr">
                Magnus Holm
              </StyledLink>{" "}
              blog:{" "}
              <StyledLink href="https://css-tricks.com/query-json-documents-in-the-terminal-with-groq/">
                Query JSON documents in the Terminal with GROQ.
              </StyledLink>
            </ListItem>
          </List>
        </Box>

        <Box w="xl" mx="auto">
          <Text fontSize="xl" color="green.500">
            Another GROQ Source:
          </Text>
          <List spacing={2} maxW="xl" fontSize="md">
            {abouts.anotherSource.map((source) => {
              return (
                <ListItem key={source.name}>
                  <ListIcon
                    as={GiBlackBook}
                    color="orange.400"
                    display="inline"
                  />
                  <StyledLink href={source.href}>{source.name}</StyledLink>
                </ListItem>
              )
            })}
          </List>
        </Box>

        <Box w="xl" mx="auto">
          <Text fontSize="xl" color="green.500">
            Roadmap:
          </Text>
          <List spacing={2} maxW="xl" fontSize="md">
            {abouts.roadmap.map((road) => {
              return (
                <ListItem key={road.name}>
                  <ListIcon as={GiRoad} color="pink.400" display="inline" />
                  {road.name}
                </ListItem>
              )
            })}
          </List>
        </Box>

        <Box w="xl" mx="auto">
          <Text fontSize="xl" color="green.500">
            The Author of this project:
          </Text>
          <List spacing={2} maxW="xl" fontSize="md">
            {abouts.author.map((auth) => {
              return (
                <ListItem key={auth.name}>
                  <ListIcon
                    as={GiSeaDragon}
                    color="blue.400"
                    display="inline"
                  />
                  {auth.name}
                </ListItem>
              )
            })}
            <ListItem>
              <ListIcon as={GiSeaDragon} color="blue.400" display="inline" />
              This project is built with{" "}
              <StyledLink href="https://vitejs.dev">Vite</StyledLink>,{" "}
              <StyledLink href="https://reactjs.org">React</StyledLink>,{" "}
              <StyledLink href="https://chakra-ui.com">ChakraUI</StyledLink>,{" "}
              <StyledLink href="https://codemirror.net/6/">
                CodeMirror6
              </StyledLink>
              ,{" "}
              <StyledLink href="https://github.com/sanity-io/groq-js">
                GroqJS
              </StyledLink>
              ,{" "}
              <StyledLink href="https://anapioficeandfire.com/">
                An API of Ice And Fire
              </StyledLink>
              , and many more packages...
            </ListItem>
          </List>
        </Box>
      </Grid>
    </Flex>
  )
}
