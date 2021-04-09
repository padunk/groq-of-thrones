import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import { Link, useHistory, useParams } from "react-router-dom"
import { parse, evaluate } from "groq-js"
import { Flex, Box } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { GrPlayFill, GrNext } from "react-icons/gr"
import Split from "../libs/Split"
import { ToastContainer, toast } from "react-toastify"
import { Instruction } from "./Instruction"
// import { Lesson } from "./Lesson"
// import { Result } from "./Result"
import CodemirrorLesson from "./Lesson6"
import CodemirrorResult from "./Result6"
import dataset from "../lessons/data/dataset.json"
import lessons from "../lessons/data/lessons.json"
import characters from "../lessons/data/characters.json"
import { getQuotes } from "../lessons/data/quotes"
import { checkResult } from "../libs/helpers"

const toastOptions = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: true,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: false,
  pauseOnHover: true,
}

export const LessonMain = () => {
  let { lessonID } = useParams()
  const history = useHistory()

  const resultRef = useRef(null)
  const buttonRef = useRef(null)
  const [buttonLeftPos, setButtonLeftPos] = useState(0)
  const [codeInput, setCodeInput] = useState(
    lessons[lessonID]?.initialCode || ""
  )
  const [codeResult, setCodeResult] = useState("")
  const [passed, setPassed] = useState(false)

  let init = 0

  // useLayoutEffect(() => {
  //   if (resultRef?.current && buttonRef?.current && init) {
  //     let newPos =
  //       resultRef.current.getBoundingClientRect().x -
  //       buttonRef.current.getBoundingClientRect().width / 2
  //     setButtonLeftPos(newPos + 182)
  //     init = false
  //   }
  // }, [resultRef, buttonRef])

  useEffect(() => {
    if (lessonID > 0 && lessonID <= 10) {
      setCodeInput(lessons[lessonID].initialCode)
      setCodeResult("")
      setPassed(false)
    } else {
      history.push("/no-match")
    }
  }, [lessonID])

  const processCode = async () => {
    let result, isPassed, toastResult
    let lessonNumber = Number(lessonID)
    let query

    try {
      query = parse(`${codeInput}`)
      if (!query) throw new Error(query)
    } catch (error) {
      // TODO: port the error position to Lesson6 and highlight it
      // Decorators is quite complex to apply, let's do this in another version
      // console.log(error.position)
      toast.error(error.message, {
        ...toastOptions,
        position: "top-center",
      })
      return
    }

    try {
      let match
      // if lesson is number 1, 2, 6, and 9
      // the dataset is different
      if (lessonNumber < 3 || lessonNumber === 6 || lessonNumber === 9) {
        match = await evaluate(query, {
          dataset: dataset[lessonID].data,
        })
      } else {
        match = await evaluate(query, {
          dataset: characters,
        })
      }
      result = await match.get()
      setCodeResult(result)
    } catch (error) {
      console.error(error)
      toast.error(error, toastOptions)
    }
    // check result
    // TODO: how not to compare it with hardcode result ?
    // lessonNumber 2, 3, 4, 5 is free exercise
    // as long as it return an array with length > 1, it should passed.
    if (
      lessonNumber >= 2 &&
      lessonNumber < 6 &&
      Array.isArray(result) &&
      result.length > 0
    ) {
      isPassed = true
      toastResult = "success"
    } else {
      if (checkResult(result, lessons[lessonID].result)) {
        isPassed = true
        toastResult = "success"
      } else {
        isPassed = false
        toastResult = "error"
      }
    }

    setPassed(isPassed)
    toastResult === "success"
      ? toast.success(getQuotes("success"), toastOptions)
      : toast.error(getQuotes("error"), toastOptions)
  }

  const handlePlayButtonPosition = () => {
    const { x } = resultRef.current.getBoundingClientRect()
    const { width } = buttonRef.current.getBoundingClientRect()

    // workaround when this function is fired on first mounting and offset its position.
    // if (init < 2) {
    //   // setButtonLeftPos(x - width / 2 + 182)
    //   setButtonLeftPos(x - width / 2)
    //   init++
    // } else {
    setButtonLeftPos(x - width / 2)
    // }
  }

  const handleLesson = () => {
    if (Number(lessonID) < 10) {
      history.push(`/lesson/${Number(lessonID) + 1}`)
    } else {
      history.push("/finished")
    }
  }

  return (
    <Flex w="full" pos="relative">
      <ToastContainer />
      {passed && (
        <Button
          pos="absolute"
          colorScheme="blue"
          rounded="md"
          zIndex="100"
          bottom="8"
          right="12"
          rightIcon={<GrNext />}
          onClick={handleLesson}
        >
          Next
        </Button>
      )}
      <Button
        pos="absolute"
        color="whitesmoke"
        colorScheme="orange"
        rounded="full"
        w="12"
        h="12"
        p="3"
        zIndex="90"
        top="24"
        left={`${buttonLeftPos}`}
        ref={buttonRef}
        onClick={processCode}
      >
        <GrPlayFill size={32} />
      </Button>

      <Instruction lessonID={lessonID} />
      <Split
        cursor="col-resize"
        minSize={[300, 300]}
        gutterSize={5}
        onDrag={handlePlayButtonPosition}
      >
        <div style={{ height: "100%" }}>
          {/* <Lesson codeInput={codeInput} setCodeInput={setCodeInput} /> */}
          <CodemirrorLesson codeInput={codeInput} setCodeInput={setCodeInput} />
        </div>
        <div style={{ height: "100%" }} ref={resultRef}>
          <CodemirrorResult
            codeResult={codeResult}
            handlePlayButtonPosition={handlePlayButtonPosition}
          />
        </div>
      </Split>
    </Flex>
  )
}
