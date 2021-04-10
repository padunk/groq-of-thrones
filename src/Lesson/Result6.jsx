// https://gist.github.com/cenguidanos/58efcf54c5539101d9a47345d6cea35d
import React, { useRef, useEffect, useState } from "react"
import { basicSetup, EditorState, EditorView } from "@codemirror/basic-setup"
import { javascript } from "@codemirror/lang-javascript"
import { oneDark } from "@codemirror/theme-one-dark"
import { Flex } from "@chakra-ui/react"
import { useParams } from "react-router"
import { showDatasetStruct } from "../libs/helpers"
import "./index.css"

const CodemirrorResult = ({ codeResult, handlePlayButtonPosition }) => {
  const { lessonID } = useParams()
  const lessonNumber = Number(lessonID)
  // Ref of the editor
  const editor = useRef()

  // Event listener on editor updates
  const onUpdate = () =>
    EditorView.updateListener.of(() => {
      handlePlayButtonPosition()
    })

  // Initialize view
  useEffect(function initEditorView() {
    const el = document.getElementById("codemirror-result")

    if (editor.current) el.children[0]?.remove()
    editor.current = new EditorView({
      state: EditorState.create({
        doc: codeResult || showDatasetStruct(lessonNumber),
        extensions: [
          basicSetup,
          javascript(),
          oneDark,
          onUpdate(),
          EditorView.contentAttributes.of({ contenteditable: false }),
        ],
      }),
      parent: el,
    })

    return () => editor.current.destroy()
  }, [])

  // when the input is change and / or lesson ID change
  useEffect(() => {
    const inputText = editor.current.state.doc.toString()
    if (codeResult === inputText) {
      return
    }

    let insert
    if (typeof codeResult === "object") {
      insert = JSON.stringify(codeResult, null, 2)
    } else {
      insert = codeResult === "" ? showDatasetStruct(lessonNumber) : codeResult
    }

    const changes = [
      { from: 0, to: inputText.length },
      { from: 0, insert },
    ]

    if (editor.current) {
      editor.current.dispatch({ changes })
    }
  }, [codeResult])

  return (
    <Flex h="full" fontSize="xl">
      <div id="codemirror-result" />
    </Flex>
  )
}

export default CodemirrorResult
