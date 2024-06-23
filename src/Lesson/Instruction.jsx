import React, { useEffect, useState } from "react"
import DOMpurify from "dompurify"
import { Box, Flex } from "@chakra-ui/react"
import "./index.css"

export const Instruction = ({ lessonID }) => {
  const [comp, setComp] = useState()
  useEffect(() => {
    const getLessonInstruction = async (id) => {
      let el = await import(`../lessons/instructions/lesson-${id}.md`)
      let sanitizeEl = DOMpurify.sanitize(el.html, {
        USE_PROFILES: { html: true },
      })
      setComp(sanitizeEl)
    }
    getLessonInstruction(lessonID)
  }, [lessonID])

  return (
    <Flex
      w="sm"
      minW="sm"
      h="calc(100vh - 95px)"
      overflowY="scroll"
      direction="column"
    >
      {comp && (
        <Flex
          direction="column"
          p="4"
          pb="8"
          whiteSpace="break-spaces"
          w="full"
          dangerouslySetInnerHTML={{ __html: comp }}
        ></Flex>
      )}
      <Box h="8" />
    </Flex>
  )
}
