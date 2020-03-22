import React, { FunctionComponent } from "react"
import { YearbookStudentProps } from "../types"
import SEO from "./seo"
import { graphql, Link } from "gatsby"
import ForwardArrow from "./images/ForwardArrow"
import BackArrow from "./images/BackArrow"

export const YearbookStudent: FunctionComponent<YearbookStudentProps> = props => {
  return (
    <>
      <SEO
        title={`Yearbook - ${props.data.contentfulStudentDescription.name}`}
      />

      <Link
        to={`/yearbook/${props.pageContext.prevStudent || ""}`}
        className="yearbook__back__button"
      >
        <BackArrow />
      </Link>

      <Link
        to={`/yearbook/${props.pageContext.nextStudent || ""}`}
        className="yearbook__next__button"
      >
        <ForwardArrow />
      </Link>

      <div className="yearbook__wrapper">
        <div className="yearbook__image__wrapper">
          <h1 className="yearbook__header">
            {props.data.contentfulStudentDescription.name}
          </h1>
        </div>
      </div>
    </>
  )
}

export default YearbookStudent

export const query = graphql`
  query($displayName: String!, $house: String!) {
    contentfulStudentDescription(displayName: { eq: $displayName }) {
      house
      name
      birthday(formatString: "MMMM Do")
      inTheirBag {
        inTheirBag
      }
      leastFavouriteThings {
        leastFavouriteThings
      }
      favouriteThings {
        favouriteThings
      }
      quote {
        quote
      }
    }
    contentfulHouseDescription(house: { eq: $house }) {
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
  }
`
