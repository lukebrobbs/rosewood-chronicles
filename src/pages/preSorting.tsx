import { graphql } from "gatsby"
import React from "react"
import PreSorting from "../components/PreSorting/PreSorting"
import SEO from "../components/seo"

interface IEdges {
  edges: Array<{ node: { introductionText: { introductionText: string } } }>
}

interface IProps {
  data: {
    allContentfulSortingQuiz: IEdges
  }
}

const PreSortingPage = ({ data }: IProps) => {
  const {
    allContentfulSortingQuiz: { edges },
  } = data
  return (
    <>
      <SEO title="Sorting Quiz" />
      <PreSorting text={edges[0].node.introductionText.introductionText} />
    </>
  )
}

export const query = graphql`
  query quizIntroTextQuery {
    allContentfulSortingQuiz(limit: 1) {
      edges {
        node {
          introductionText {
            introductionText
          }
        }
      }
    }
  }
`

export default PreSortingPage
