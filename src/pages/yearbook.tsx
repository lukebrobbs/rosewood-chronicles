import React, { FunctionComponent } from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { YearbookProps } from "../types"

const Yearbook: FunctionComponent<YearbookProps> = () => {
  return (
    <>
      <SEO title="Yearbook" />
      <div className="yearbook__wrapper">
        <div className="yearbook__image__wrapper"></div>
      </div>
    </>
  )
}

export default Yearbook

export const query = graphql`
  query yearbookQuery {
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
  }
`
