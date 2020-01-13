import Img from "gatsby-image"
import React, { FunctionComponent } from "react"
import { YearbookLandingPageProps } from "../types"

export const YearbookLandingPage: FunctionComponent<YearbookLandingPageProps> = props => {
  const {
    description,
    header,
    studentImages,
    yearbookImage,
    nextImage,
  } = props.data.edges[0].node
  return (
    <div className="yearbookLanding__wrapper">
      <div className="yearbookLanding__content">
        <h1 className="yearbookLanding__header">{header}</h1>
        <div className="yearbookLanding__studentImages__wrapper">
          {studentImages.map((studentImage, index) => {
            return (
              <Img
                fluid={studentImage.fluid}
                className="yearbookLanding__studentImage"
                key={`student-image-${index}`}
              />
            )
          })}
        </div>
        <p className="yearbookLanding__paragraph">{description.description}</p>
      </div>
      <div className="yearbookLanding__yearbook__wrapper">
        <div className="yearbookLanding__yearbookImage">
          <Img fluid={yearbookImage.fluid} />
        </div>
        <div
          className="yearbookLanding__nextImage"
          role="button"
          onClick={() => props.setActiveStudentsPage()}
        >
          <Img fluid={nextImage.fluid} />
        </div>
      </div>
    </div>
  )
}
