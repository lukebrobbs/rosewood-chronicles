import Img from "gatsby-image"
import React, { FunctionComponent } from "react"
import { SortedHouseProps } from "../types"
import { graphql } from "gatsby"

export const SortedHouse: FunctionComponent<SortedHouseProps> = props => {
  const { sorted } = props.pathContext
  const {
    house,
    description,
    desktopInsignia,
    mobileInsignia,
    studentImages,
  } = props.data.contentfulHouseDescription
  const sources = [
    mobileInsignia.fluid,
    {
      ...desktopInsignia.fluid,
      media: `(min-width: 768px)`,
    },
  ]
  return (
    <div className="sortedHouse__wrapper" data-testid="sortedHousePage">
      <div className="sortedHouse__content">
        {sorted && <h1 className="sortedHouse__header">Congratulations!</h1>}
        <div className="sortedHouse__banner__wrapper">
          <Img fluid={sources} alt={`${house} insignia`} />
        </div>
        {sorted && (
          <h1 data-testid="houseColour" className="sortedHouse__header">
            You are in house {house}
          </h1>
        )}
        <p data-testid="houseDescription" className="sortedHouse__paragraph">
          {description.description}
        </p>
      </div>
      <div className="sortedHouse__studentImages__wrapper">
        {studentImages.map((studentImage, index) => {
          const side = index === 0 ? "left" : "right"
          return (
            <div
              className={`sortedHouse__studentImage__wrapper ${side}`}
              key={`sortedStudentImage${index}`}
            >
              <Img fluid={studentImage.fluid} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SortedHouse

export const query = graphql`
  query($house: String!) {
    contentfulHouseDescription(house: { eq: $house }) {
      house
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
    }
  }
`
