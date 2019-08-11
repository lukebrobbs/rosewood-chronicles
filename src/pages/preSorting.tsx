import { graphql } from "gatsby"
import React from "react"
import PreSorting from "../components/PreSorting/PreSorting"
import SEO from "../components/seo"

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
      <SEO title="Sorting Quiz" />
      <PreSorting text={edges[0].node.text} />
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
