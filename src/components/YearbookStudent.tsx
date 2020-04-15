import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import React, { FunctionComponent, useState } from "react"
import Modal from "react-modal"
import { YearbookStudentProps } from "../types"
import BackArrow from "./images/BackArrow"
import ForwardArrow from "./images/ForwardArrow"
import SEO from "./seo"

export const YearbookStudent: FunctionComponent<YearbookStudentProps> = props => {
  const [modalOpen, setModalOpen] = useState(false)

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
        <Modal
          contentLabel={`${props.data.contentfulStudentDescription.name}'s room`}
          isOpen={modalOpen}
          onRequestClose={() => setModalOpen(false)}
          className="yearbook__modal"
          overlayClassName="yearbook__modal__overlay"
        >
          {props.data.contentfulStudentDescription.roomImage && (
            <div>
              <button
                className="yearbook__modal__closeButton"
                onClick={() => setModalOpen(false)}
              >
                X
              </button>
              <Img
                fluid={props.data.contentfulStudentDescription.roomImage.fluid}
              />
            </div>
          )}
        </Modal>
        <div className="individual__yearbook__wrapper">
          <h1 className="yearbook__pageOne__header">
            {props.data.contentfulStudentDescription.name}
          </h1>
          <div className="yearbook__pageOne">
            <div className="yearbook__student__image">
              <Img
                fluid={props.data.contentfulStudentDescription.image.fluid}
              />
            </div>
            <button
              className="yearbook__studentRoom__button"
              onClick={() => setModalOpen(true)}
            >
              <div className="yearbook__student__roomImage">
                {props.data.contentfulStudentDescription.roomImage && (
                  <Img
                    fluid={
                      props.data.contentfulStudentDescription.roomImage.fluid
                    }
                  />
                )}
              </div>
            </button>
            <div className="yearbook__student__house__image">
              <Img
                fluid={
                  props.data.contentfulHouseDescription.desktopInsignia.fluid
                }
              />
            </div>
          </div>
          <div className="yearbook__pageTwo">
            <h2 className="yearbook__about__header">BIRTHDAY</h2>
            <p>{props.data.contentfulStudentDescription.birthday}</p>
            <h2 className="yearbook__about__header">FAVORITE THINGS</h2>
            <p>
              {
                props.data.contentfulStudentDescription.favouriteThings
                  .favouriteThings
              }
            </p>
            <h2 className="yearbook__about__header">LEAST FAVORITE THINGS</h2>
            <p>
              {
                props.data.contentfulStudentDescription.leastFavouriteThings
                  .leastFavouriteThings
              }
            </p>
            <h2 className="yearbook__about__header">IN THEIR BAG</h2>
            <p>
              {props.data.contentfulStudentDescription.inTheirBag.inTheirBag}
            </p>
            <h2 className="yearbook__about__header">QUOTE</h2>
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
      roomImage {
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
