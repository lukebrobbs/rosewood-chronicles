import { graphql } from "gatsby"
import React from "react"
import EmailCapture from "../../components/PreSorting/EmailCapture"
import SEO from "../../components/seo"

const SignUpPage = ({ data }) => {
  const { edges } = data.allContentfulSortingQuiz

  return (
    <>
      <SEO title="Sorting-Quiz Sign-up" />
      <EmailCapture banners={edges[0].node.houseBanners} />
    </>
  )
}

export const query = graphql`
  query signUpQuery {
    allContentfulSortingQuiz(limit: 1) {
      edges {
        node {
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

export default SignUpPage
