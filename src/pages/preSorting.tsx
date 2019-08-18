import { graphql } from "gatsby"
import React from "react"
import PreSorting from "../components/PreSorting/PreSorting"
import { IPreSortingPageProps } from "../components/PreSorting/types"
import SEO from "../components/seo"

const PreSortingPage = ({ data }: IPreSortingPageProps) => {
  const {
    allContentfulSortingQuiz: { edges },
  } = data
  return (
    <>
      <SEO title="Sorting Quiz" />
      <PreSorting
        text={edges[0].node.introductionText.introductionText}
        banners={edges[0].node.houseBanners}
      />
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

export default PreSortingPage
