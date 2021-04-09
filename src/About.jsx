import React from "react"
import {
  Text,
  Box,
  ListIcon,
  List,
  ListItem,
  Link,
  Flex,
} from "@chakra-ui/layout"
import { GiInspiration, GiBlackBook, GiRoad, GiSeaDragon } from "react-icons/gi"
import { Grid } from "@chakra-ui/layout"

const StyledLink = ({ href, children }) => {
  return (
    <Link
      href={href}
      isExternal
      bgGradient="linear(to-l, #F6E05E, #B794F4)"
      bgClip="text"
      _hover={{
        bgGradient: "linear(to-r, #F56565 ,#0BC5EA)",
      }}
    >
      {children}
    </Link>
  )
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
            <ListItem>
              <ListIcon as={GiBlackBook} color="orange.400" display="inline" />
              GROQ{" "}
              <StyledLink href="https://www.sanity.io/docs/groq">
                Documentation.
              </StyledLink>
            </ListItem>
            <ListItem>
              <ListIcon as={GiBlackBook} color="orange.400" display="inline" />
              GROQ{" "}
              <StyledLink href="https://sanity-io.github.io/GROQ/draft/">
                Working Draft.
              </StyledLink>
            </ListItem>
            <ListItem>
              <ListIcon as={GiBlackBook} color="orange.400" display="inline" />
              GROQ{" "}
              <StyledLink href="https://www.sanity.io/docs/query-cheat-sheet">
                Cheat Sheet.
              </StyledLink>
            </ListItem>
          </List>
        </Box>

        <Box w="xl" mx="auto">
          <Text fontSize="xl" color="green.500">
            Roadmap:
          </Text>
          <List spacing={2} maxW="xl" fontSize="md">
            <ListItem>
              <ListIcon as={GiRoad} color="pink.400" display="inline" />
              Highlight the GROQ syntax error in lesson editor.
            </ListItem>
            <ListItem>
              <ListIcon as={GiRoad} color="pink.400" display="inline" />
              Don't compare the user result with hardcode code.
            </ListItem>
            <ListItem>
              <ListIcon as={GiRoad} color="pink.400" display="inline" />
              Points system so this lesson looks like a game?
            </ListItem>
            <ListItem>
              <ListIcon as={GiRoad} color="pink.400" display="inline" />
              Restrict lesson so user need to finish one before going to
              another? Need auth?
            </ListItem>
            <ListItem>
              <ListIcon as={GiRoad} color="pink.400" display="inline" />
              Preserve user code for each lesson.
            </ListItem>
          </List>
        </Box>

        <Box w="xl" mx="auto">
          <Text fontSize="xl" color="green.500">
            The Author of this project:
          </Text>
          <List spacing={2} maxW="xl" fontSize="md">
            <ListItem>
              <ListIcon as={GiSeaDragon} color="blue.400" display="inline" />
              Is looking for a remote job.
            </ListItem>
            <ListItem>
              <ListIcon as={GiSeaDragon} color="blue.400" display="inline" />
              Live in Indonesia (GMT +7).
            </ListItem>
            <ListItem>
              <ListIcon as={GiSeaDragon} color="blue.400" display="inline" />
              Love eating noodles, pork chop and 🍻 with friends.
            </ListItem>
            <ListItem>
              <ListIcon as={GiSeaDragon} color="blue.400" display="inline" />
              Code in HTML, CSS, React, React Native, Svelte, Sanity, Amplify,
              and Firebase.
            </ListItem>
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
