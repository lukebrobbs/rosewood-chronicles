// tslint:disable-next-line: no-implicit-dependencies
import { Router } from "@reach/router"
import React from "react"
import Home from "../components/Home"
import Layout from "../components/layout"
import PrivateRoute from "../components/PrivateRoute"
import SortingQuiz from "../components/SortingQuiz"

const App = () => (
  <Layout>
    <Router>
      // @ts-ignore
      <PrivateRoute path="/app/home" component={Home} />
      // @ts-ignore
      <PrivateRoute path="/app/sortingQuiz" component={SortingQuiz} />
    </Router>
  </Layout>
)

export default App
