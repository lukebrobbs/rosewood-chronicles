import { graphql } from "gatsby"
import React from "react"
import SEO from "../../components/seo"
import SortingQuiz from "../../components/SortingQuiz/SortingQuiz"
import { formatQuizQuestions } from "../../utils/quizQuestions"

const Quiz = ({ data }) => {
  const { edges } = data.allContentfulSortingQuiz
  return (
    <>
      <SEO title="Pre-Sorting" />
      <SortingQuiz
        banners={edges[0].node.houseBanners}
        questions={formatQuizQuestions(data.allContentfulSortingQuiz)}
        image={edges[0].node.studentImage}
      />
    </>
  )
}

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
          studentImage {
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

export default Quiz
