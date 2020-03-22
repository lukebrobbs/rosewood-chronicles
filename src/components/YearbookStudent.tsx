import React, { FunctionComponent } from "react"
import { YearbookStudentProps } from "../types"
import SEO from "./seo"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import ForwardArrow from "./images/ForwardArrow"
import BackArrow from "./images/BackArrow"

export const YearbookStudent: FunctionComponent<YearbookStudentProps> = props => {
  console.log(props)
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
        <div className="individual__yearbook__wrapper">
          <div className="yearbook__pageOne">
            <h1 className="yearbook__header">
              {props.data.contentfulStudentDescription.name}
            </h1>
            <div className="yearbook__student__image">
              <Img
                fluid={props.data.contentfulStudentDescription.image.fluid}
              />
            </div>
            <div className="yearbook__student__house__image">
              <Img
                fluid={
                  props.data.contentfulHouseDescription.desktopInsignia.fluid
                }
              />
            </div>
          </div>
          <div className="yearbook__pageTwo">
            <h2>Birthday</h2>
            <p>{props.data.contentfulStudentDescription.birthday}</p>
            <h2>Favorite Things</h2>
            <p>
              {
                props.data.contentfulStudentDescription.favouriteThings
                  .favouriteThings
              }
            </p>
            <h2>Least Favorite Things</h2>
            <p>
              {
                props.data.contentfulStudentDescription.leastFavouriteThings
                  .leastFavouriteThings
              }
            </p>
            <h2>In Their Bag</h2>
            <p>
              {props.data.contentfulStudentDescription.inTheirBag.inTheirBag}
            </p>
            <h2>Quote</h2>
            <p>{props.data.contentfulStudentDescription.quote.quote}</p>
            <Link to={`/${props.pageContext.house}`}>
              Learn more about {props.pageContext.house} house
            </Link>
          </div>
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
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
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
