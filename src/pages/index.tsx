import { graphql } from "gatsby"
import React from "react"
import Home from "../components/Home/Home"
import SEO from "../components/seo"
import RosesBottomLeft from "../images/Roses_BL.svg"
import RosesBottomRight from "../images/Roses_BR.svg"
import RosesTopLeft from "../images/Roses_TL.svg"
import RosesTopRight from "../images/Roses_TR.svg"

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <img src={RosesTopLeft} className="home__RosesTopLeft" />
      <img src={RosesTopRight} className="home__RosesTopRight" />
      <img src={RosesBottomLeft} className="home__RosesBottomLeft" />
      <img src={RosesBottomRight} className="home__RosesBottomRight" />
      <Home />
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
          id
          house
        }
      }
    }
  }
`

export default IndexPage
