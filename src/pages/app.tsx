// tslint:disable-next-line: no-implicit-dependencies
import { Router } from "@reach/router"
import { graphql } from "gatsby"
import React from "react"
import { questionMocks } from "../../__mocks__/questionMocks"
import FanArt from "../components/FanArt"
import Home from "../components/Home"
import Layout from "../components/layout/layout"
import MyAccount from "../components/MyAccount"
import PrivateRoute from "../components/PrivateRoute"
import ShortStories from "../components/ShortStories"
import SortingQuiz from "../components/SortingQuiz/SortingQuiz"
import UploadFanArt from "../components/UploadFanArt"
import { formatQuizQuestions, IRawQuestionData } from "../utils/quizQuestions"

const App = ({ data }: { data: IRawQuestionData }) => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/home" component={Home} />
      <PrivateRoute
        path="/app/sortingQuiz"
        component={SortingQuiz}
        questions={formatQuizQuestions(data)}
      />
      <PrivateRoute path="/app/short-stories" component={ShortStories} />
      <PrivateRoute path="/app/fan-art" component={FanArt} />
      <PrivateRoute path="/app/fan-art/upload" component={UploadFanArt} />
      <PrivateRoute path="/app/my-account" component={MyAccount} />
    </Router>
  </Layout>
)

export const query = graphql`
  query SortingQuizQuestionsQuery {
    allContentfulSortingQuizQuestion {
      edges {
        node {
          id
          question
          conchAnswer
          ivyAnswer
          stratusAnswer
        }
      }
    }
  }
`

export default App
