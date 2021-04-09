import React from "react"
import { Text, ListItem, Flex, OrderedList, Link } from "@chakra-ui/layout"
import lessons from "../lessons/data/lessons.json"

export const SideNav = () => {
  const lessonPath = Object.entries(lessons)

  return (
    <Flex bg="gray.800" w="full" align="center" flexDir="column" p="2" pl="8">
      <Text>Groq Lesson List:</Text>
      <OrderedList mx="auto" color="whiteAlpha.800" spacing={2}>
        {lessonPath.map((lesson, i) => {
          return (
            <ListItem px="4" key={i}>
              <Text color="pink.400">Lesson - {lesson[0]}</Text>
              <Link
                href={`/lesson/${lesson[0]}`}
                textTransform="capitalize"
                letterSpacing="wide"
              >
                {lesson[1].title}
              </Link>
            </ListItem>
          )
        })}
      </OrderedList>
    </Flex>
  )
}
