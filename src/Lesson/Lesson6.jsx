// https://gist.github.com/cenguidanos/58efcf54c5539101d9a47345d6cea35d
import React, { useRef, useEffect, useState } from "react"
import { basicSetup, EditorState, EditorView } from "@codemirror/basic-setup"
import { javascript } from "@codemirror/lang-javascript"
import { oneDark } from "@codemirror/theme-one-dark"
import { Flex } from "@chakra-ui/react"
import "./index.css"

const CodemirrorLesson = ({ codeInput, setCodeInput }) => {
  // Ref of the editor
  const editor = useRef()

  // Event listener on editor updates
  const onBlur = () =>
    EditorView.updateListener.of((v) => {
      const doc = v.state.doc
      const value = doc.toString()
      if (value !== codeInput) setCodeInput(value)
    })

  // Initialize view
  useEffect(function initEditorView() {
    const el = document.getElementById("codemirror-lesson")

    if (editor.current) {
      el.children[0]?.remove()
    }

    editor.current = new EditorView({
      state: EditorState.create({
        doc: codeInput,
        extensions: [basicSetup, javascript(), oneDark, onBlur()],
      }),
      parent: el,
    })
    return () => editor.current.destroy()
  }, [])

  // when the input is change and / or lesson ID change
  useEffect(() => {
    const inputText = editor.current.state.doc.toString()
    if (codeInput === inputText) {
      return
    }

    let insert
    if (typeof codeInput === "object") {
      insert = JSON.stringify(codeInput, null, 2)
    } else {
      insert = codeInput
    }

    const changes = [
      { from: 0, to: inputText.length },
      { from: 0, insert },
    ]

    if (editor.current) {
      editor.current.dispatch({ changes })
    }
  }, [codeInput])

  return (
    <Flex h="full" fontSize="xl">
      <div id="codemirror-lesson" style={{ width: "100%" }} />
    </Flex>
  )
}

export default CodemirrorLesson
