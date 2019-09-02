import { graphql } from "gatsby"
import React from "react"
import PreSorting from "../../components/PreSorting/PreSorting"
import SEO from "../../components/seo"

const PreSortingPage = ({ data }) => {
  const { edges } = data.allContentfulSortingQuiz
  return (
    <>
      <SEO title="Pre-Sorting" />
      <PreSorting
        header={edges[0].node.introductionHeader}
        text={edges[0].node.introductionText.introductionText}
        images={edges[0].node.introductionStudentImages}
        banners={edges[0].node.houseBanners}
      />
    </>
  )
}

export const query = graphql`
  query sortingQuery {
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
          id
          house
        }
      }
    }
  }
`

export default PreSortingPage
