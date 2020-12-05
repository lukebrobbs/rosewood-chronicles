import React, { ReactElement } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { FluidObject } from "gatsby-image"
import ForwardArrow from "../images/ForwardArrow"
import BackArrow from "../images/BackArrow"

interface InnerPagesProps {
  backLink: string
  forwardLink: string
  fluid: FluidObject
  imageAlt: string
  mobile?: boolean
}

export const InnerPages = ({
  fluid,
  forwardLink,
  backLink,
  imageAlt,
  mobile = false,
}: InnerPagesProps): ReactElement => {
  const wrapperClass = mobile ? "cover" : "innerPages"
  return (
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
  )
}
