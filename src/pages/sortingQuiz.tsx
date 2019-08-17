import { graphql } from "gatsby"
import React from "react"
import SortingQuiz from "../components/SortingQuiz/SortingQuiz"
import { formatQuizQuestions, IRawQuestionData } from "../utils/quizQuestions"

const SortingQuizPage = ({ data }: { data: IRawQuestionData }) => {
  return <SortingQuiz questions={formatQuizQuestions(data)} />
}

export const query = graphql`
  query SortingQuizQuestionsQuery {
    allContentfulSortingQuiz(limit: 1) {
      edges {
        node {
          questions {
            question
            id
            ivyAnswer
            conchAnswer
            stratusAnswer
          }
        }
      }
    }
  }
`

export default SortingQuizPage
