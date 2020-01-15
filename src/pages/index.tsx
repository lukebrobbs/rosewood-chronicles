import { graphql } from "gatsby"
import React from "react"
import Home from "../components/Home/Home"
import { NonHomePages } from "../components/NonHomePages"
import { Element } from "../components/Scroll"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <>
      {process.env.GATSBY_VERSION_TWO && (
        <>
          <SEO title="Home" />
          <Element name="title-page">
            <Home />
          </Element>
        </>
      )}
      <NonHomePages data={data} />
    </>
  )
}

export const query = graphql`
  query mainQuery {
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
    allContentfulShop {
      edges {
        node {
          header
          shopButtonLink
          books {
            bookName
            link
            reflectionImage {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            bookImage {
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
            displayName
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
            image {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
          studentsImage {
            fluid {
              ...GatsbyContentfulFluid
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
    allContentfulYearbookLandingPage(limit: 1) {
      edges {
        node {
          header
          description {
            description
          }
          studentImages {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          nextImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          yearbookImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default IndexPage
