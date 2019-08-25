import { graphql } from "gatsby"
import React from "react"
import Home from "../components/Home/Home"
import Nav from "../components/Nav"
import { NonHomePages } from "../components/NonHomePages"
import { Element } from "../components/Scroll"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO title="Home" />
      <Element name="title-page">
        <Home />
      </Element>
      <Nav />
      <NonHomePages data={data} />
    </>
  )
}

export const query = graphql`
  query mainQuery {
    allContentfulSortingQuiz(limit: 1) {
      edges {
        node {
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
    allContentfulMeetTheStudents {
      edges {
        node {
          house
          houseDetails {
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
          }
          studentDescriptions {
            name
            birthday(formatString: "MMMM Do")
            favouriteThings {
              favouriteThings
            }
            leastFavouriteThings {
              leastFavouriteThings
            }
            inTheirBag {
              inTheirBag
            }
            quote {
              quote
            }
          }
          studentsImage {
            fluid {
              aspectRatio
              base64
              sizes
              src
              srcSet
              srcSetWebp
              srcWebp
              tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
