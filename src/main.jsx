import React from "react"
import ReactDOM from "react-dom"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { Routes } from "./routes"
import { Fonts } from "./GlobalChakra"
import "highlight.js/styles/atom-one-dark.css"
import "react-toastify/dist/ReactToastify.css"
import "./index.css"

const theme = extendTheme({
  fonts: {
    body: "Ubuntu",
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Fonts />
      <Routes />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
