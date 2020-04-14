import { graphql } from "gatsby"
import React, { FunctionComponent, useState } from "react"
import PreSorting from "../../components/PreSorting/PreSorting"
import SEO from "../../components/seo"
import SortingQuiz from "../../components/SortingQuiz/SortingQuiz"
import {
  ActiveSortingPage,
  ContentfulHouseDescription,
  Edges,
} from "../../types"
import { formatQuizQuestions } from "../../utils/quizQuestions"

interface SortingQuizProps {
  data: {
    allContentfulSortingQuiz: Edges
    allContentfulHouseDescription: ContentfulHouseDescription
  }
}

const SortingQuizPage: FunctionComponent<SortingQuizProps> = ({ data }) => {
  const [activePage, setActivePage] = useState<ActiveSortingPage>("PRE_SORTING")

  const { node } = data.allContentfulSortingQuiz.edges[0]

  return (
    <>
      <SEO title="Sorting Quiz" />
      {activePage === "PRE_SORTING" && (
        <PreSorting
          text={node.introductionText.introductionText}
          banners={node.houseBanners}
          setActivePage={setActivePage}
        />
      )}
      {activePage === "SORTING_QUIZ" && (
        <SortingQuiz
          banners={node.houseBanners}
          questions={formatQuizQuestions(data.allContentfulSortingQuiz)}
          images={node.studentImages}
          setActivePage={setActivePage}
        />
      )}
    </>
  )
}

export default SortingQuizPage
export const query = graphql`
  query quizQuery {
    allContentfulHouseDescription {
      edges {
        node {
          description {
            description
          }
          desktopInsignia {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          mobileInsignia {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          studentImages {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          id
          house
        }
      }
    }
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
