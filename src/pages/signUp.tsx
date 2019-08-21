import { graphql } from "gatsby"
import React from "react"
import EmailCapture from "../components/PreSorting/EmailCapture"
import { ISignUpProps } from "../components/PreSorting/types"

const SignUp = ({ data, location }: ISignUpProps) => {
  const {
    allContentfulSortingQuiz: { edges },
  } = data
  return (
    <EmailCapture
      banners={edges[0].node.houseBanners}
      origin={location.origin}
    />
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

export default SignUp
