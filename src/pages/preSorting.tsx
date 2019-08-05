import { graphql, Link } from "gatsby"
import React from "react"

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
      <Link to="/signUp">SIGN UP</Link>
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
