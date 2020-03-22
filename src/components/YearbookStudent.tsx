import React, { FunctionComponent } from "react"
import { YearbookStudentProps } from "../types"
import SEO from "./seo"
import { graphql, Link } from "gatsby"
import NextArrow from "../images/Arrow.png"

export const YearbookStudent: FunctionComponent<YearbookStudentProps> = props => {
  return (
    <>
      <SEO
        title={`Yearbook - ${props.data.contentfulStudentDescription.name}`}
      />
      {props.pageContext.nextStudent && (
        <Link to={`/yearbook/${props.pageContext.nextStudent}`}>
          <img
            src={NextArrow}
            alt="Next Student"
            className="yearbook__next__button"
          />
        </Link>
      )}
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
