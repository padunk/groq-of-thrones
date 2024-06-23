import "@testing-library/jest-dom"
import React from "react"
import { render, fireEvent, waitFor, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import App from "../App"

test("app render properly", () => {
  const testMessage = "Welcome"
  const { screen } = render(<App />)
  expect(screen.getByText(testMessage)).toBeInTheDocument()
})
