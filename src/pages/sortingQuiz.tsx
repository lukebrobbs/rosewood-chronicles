import { graphql } from "gatsby"
import React from "react"
import SortingQuiz from "../components/SortingQuiz/SortingQuiz"
import { formatQuizQuestions, IRawQuestionData } from "../utils/quizQuestions"

const SortingQuizPage = ({ data }: { data: IRawQuestionData }) => {
  return (
    <SortingQuiz
      questions={formatQuizQuestions(data)}
      image={data.allContentfulSortingQuiz.edges[0].node.studentImage}
      banners={data.allContentfulSortingQuiz.edges[0].node.houseBanners}
    />
  )
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

export default SortingQuizPage
