import React, { useEffect } from "react"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Text,
  Heading,
} from "@chakra-ui/react"
import lessons from "./lessons/data/lessons.json"
import { highlightAll } from "highlight.js"

export const Solutions = () => {
  const solutions = Object.keys(lessons).map((key) => {
    return {
      lessonID: key,
      code: lessons[key].codeSolution,
    }
  })

  useEffect(() => {
    highlightAll()
  }, [])

  return (
    <Flex direction="column" w="xl" mx="auto" alignItems="center">
      <Heading as="h2" fontSize="4xl" py="4" color="green.400">
        Solutions
      </Heading>
      <Text fontSize="2xl" py="4" color="green.400">
        PEEK AT YOUR OWN RISK 🙈
      </Text>
      <Accordion allowMultiple w="full" h="350px" overflowY="auto">
        {solutions.map((solution) => {
          return (
            <AccordionItem border="1px" borderRadius="md">
              <h2>
                <AccordionButton
                  _expanded={{ bg: "green.500", color: "whitesmoke" }}
                >
                  <Box flex="1" textAlign="left">
                    Lesson {solution.lessonID}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              {solution.code.map((code) => {
                return (
                  <AccordionPanel pb={4}>
                    <Box as="pre" whiteSpace="pre-wrap">
                      <code className="language-js">{code}</code>
                    </Box>
                  </AccordionPanel>
                )
              })}
            </AccordionItem>
          )
        })}
      </Accordion>
    </Flex>
  )
}
