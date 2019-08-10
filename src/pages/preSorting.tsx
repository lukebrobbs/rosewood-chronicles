import { graphql } from "gatsby"
import React from "react"
// import EmailCapture from "../components/EmailCapture"
import PreSortingText from "../components/PreSorting/PreSortingText"

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
      <PreSortingText text={edges[0].node.text} />
      {/* <EmailCapture /> */}
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
