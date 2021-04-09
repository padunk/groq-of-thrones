import React from "react"
import { Flex } from "@chakra-ui/layout"
import CodeMirror from "@uiw/react-codemirror"
// import CodeMirror from "../libs/ReactCodemirror";

export const Result = ({ codeResult, handlePlayButtonPosition }) => {
  const options = {
    theme: "material-palenight",
    lineNumbers: true,
    tabSize: 2,
    indentWithTabs: false,
    autocorrect: true,
    readOnly: true,
  }

  return (
    <Flex h="full">
      <CodeMirror
        value={
          codeResult !== ""
            ? JSON.stringify(codeResult, null, 2)
            : "// Please follow the instruction"
        }
        options={options}
        height="calc(100vh - 95px)"
        onUpdate={handlePlayButtonPosition}
      />
    </Flex>
  )
}
