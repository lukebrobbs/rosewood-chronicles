import React, { FunctionComponent, useState } from "react"
import PreSorting from "../components/PreSorting/PreSorting"
import { graphql } from "gatsby"
import { ActiveSortingPage, Edges } from "../types"
import SortingQuiz from "../components/SortingQuiz/SortingQuiz"
import { formatQuizQuestions } from "../utils/quizQuestions"

interface SortingQuizProps {
  data: {
    allContentfulSortingQuiz: Edges
  }
}

const SortingQuizPage: FunctionComponent<SortingQuizProps> = ({ data }) => {
  console.log(data)
  const [activePage, setActivePage] = useState<ActiveSortingPage>("PRE_SORTING")

  const { node } = data.allContentfulSortingQuiz.edges[0]
  if (activePage === "PRE_SORTING") {
    return (
      <PreSorting
        text={node.introductionText.introductionText}
        banners={node.houseBanners}
        setActivePage={setActivePage}
      />
    )
  }
  if (activePage === "SORTING_QUIZ") {
    return (
      <SortingQuiz
        banners={node.houseBanners}
        questions={formatQuizQuestions(data.allContentfulSortingQuiz)}
        images={node.studentImages}
        setActivePage={setActivePage}
      />
    )
  }
}

export default SortingQuizPage
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
