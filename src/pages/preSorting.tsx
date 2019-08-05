import { graphql } from "gatsby"
import React from "react"
import EmailCapture from "../components/EmailCapture"
interface IEdges {
  edges: Array<{ node: { text: string } }>
}

interface IProps {
  data: {
    allContentfulSortingQuizIntroTextTextTextNode: IEdges
  }
}

const PreSortingPage = ({ data }: IProps) => {
  const {
    allContentfulSortingQuizIntroTextTextTextNode: { edges },
  } = data
  return (
    <>
      <h1>House Sorting Quiz</h1>
      <p data-testid="preSortingDescription">{edges[0].node.text}</p>
      <EmailCapture />
    </>
  )
}

export const query = graphql`
  query quizIntroTextQuery {
    allContentfulSortingQuizIntroTextTextTextNode {
      edges {
        node {
          text
        }
      }
    }
  }
`

export default PreSortingPage
