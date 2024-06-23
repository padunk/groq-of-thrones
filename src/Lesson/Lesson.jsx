import React, { useEffect, useState } from "react"
import { Flex } from "@chakra-ui/layout"
// import CodeMirror from "@uiw/react-codemirror"
import CodeMirror from "../libs/ReactCodemirror"
import "codemirror/addon/edit/closebrackets"
import "codemirror/theme/material-palenight.css"

export const Lesson = ({ codeInput, setCodeInput }) => {
  const options = {
    mode: "javascript",
    theme: "material-palenight",
    lineNumbers: true,
    lineWrapping: true,
    tabSize: 2,
    indentWithTabs: false,
    autocorrect: true,
  }

  const handleBlur = (instance) => {
    setCodeInput(instance.getValue())
  }

  return (
    <Flex h="full" fontSize="2xl">
      <CodeMirror value={codeInput} options={options} onBlur={handleBlur} />
    </Flex>
  )
}
