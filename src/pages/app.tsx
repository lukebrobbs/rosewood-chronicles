// tslint:disable-next-line: no-implicit-dependencies
import { Router } from "@reach/router"
import React from "react"
import FanArt from "../components/FanArt"
import Home from "../components/Home"
import Layout from "../components/layout/layout"
import MyAccount from "../components/MyAccount"
import PrivateRoute from "../components/PrivateRoute"
import ShortStories from "../components/ShortStories"
import SortingQuiz from "../components/SortingQuiz"
import UploadFanArt from "../components/UploadFanArt"

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/home" component={Home} />
      <PrivateRoute path="/app/sortingQuiz" component={SortingQuiz} />
      <PrivateRoute path="/app/short-stories" component={ShortStories} />
      <PrivateRoute path="/app/fan-art" component={FanArt} />
      <PrivateRoute path="/app/fan-art/upload" component={UploadFanArt} />
      <PrivateRoute path="/app/my-account" component={MyAccount} />
    </Router>
  </Layout>
)

export default App
