import React, { FunctionComponent } from "react"
import PreSorting from "../components/PreSorting/PreSorting"
import { graphql } from "gatsby"
import { Banners } from "../types"

interface SortingQuizProps {
  data: {
    allContentfulSortingQuiz: {
      edges: Array<{
        node: {
          introductionHeader: string
          introductionText: { introductionText: string }
          houseBanners: Banners
        }
      }>
    }
  }
}

const SortingQuiz: FunctionComponent<SortingQuizProps> = ({ data }) => {
  const { node } = data.allContentfulSortingQuiz.edges[0]
  return (
    <PreSorting
      text={node.introductionText.introductionText}
      banners={node.houseBanners}
    />
  )
}

export default SortingQuiz
export const query = graphql`
  query quizQuery {
    allContentfulSortingQuiz(limit: 1) {
      edges {
        node {
          introductionHeader
          introductionText {
            introductionText
          }
          questions {
            question
            id
            ivyAnswer
            conchAnswer
            stratusAnswer
          }
          introductionStudentImages {
            title
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          studentImages {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          houseBanners {
            conchDesktop {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            conchMobile {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            ivyDesktop {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            ivyMobile {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            stratusDesktop {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            stratusMobile {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  }
`
