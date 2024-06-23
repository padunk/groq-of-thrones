import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import App from "./App"
import { About } from "./About"
import { Layout } from "./Layout/Layout"
import { LessonContext, lessonCtx } from "./context/LessonContext"
import { LessonMain } from "./Lesson"
import { Finished } from "./Finished"
import { NoMatch } from "./NoMatch"
import { Solutions } from "./Solutions"

export const Routes = () => {
  return (
    <Router>
      <LessonContext.Provider value={lessonCtx()}>
        <Layout>
          <Switch>
            <Route exact path="/">
              <App />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/solutions">
              <Solutions />
            </Route>
            <Route path="/lesson/:lessonID">
              <LessonMain />
            </Route>
            <Route path="/finished">
              <Finished />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Layout>
      </LessonContext.Provider>
    </Router>
  )
}
