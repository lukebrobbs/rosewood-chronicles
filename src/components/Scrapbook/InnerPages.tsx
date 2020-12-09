import React, { ReactElement } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { FluidObject } from "gatsby-image"
import ForwardArrow from "../images/ForwardArrow"
import BackArrow from "../images/BackArrow"
import SEO from "../seo"

interface InnerPagesProps {
  backLink: string
  forwardLink: string
  fluid: FluidObject
  imageAlt: string
  singlePage?: boolean
  title: string
}

export const InnerPages = ({
  fluid,
  forwardLink,
  backLink,
  imageAlt,
  singlePage = false,
  title,
}: InnerPagesProps): ReactElement => {
  const wrapperClass = singlePage ? "single-page" : "innerPages"
  return (
    <>
      <SEO title={title} />
      <div className={`scrapbook__${wrapperClass}`}>
        <div className={`scrapbook__${wrapperClass}__wrapper`}>
          <Link to={backLink} className="back-button">
            <BackArrow />
          </Link>
          <Link to={forwardLink} className="next-button">
            <ForwardArrow />
          </Link>
          <Img fluid={fluid} alt={imageAlt} />
        </div>
      </div>
    </>
  )
}
