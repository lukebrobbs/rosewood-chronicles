import Img from "gatsby-image"
import React, { FunctionComponent } from "react"
import { SortedHouseProps } from "../types"

export const SortedHouse: FunctionComponent<SortedHouseProps> = props => {
  const {
    house,
    description,
    desktopInsignia,
    mobileInsignia,
    studentImages,
  } = props.data.node
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
        <h1 className="sortedHouse__header">Congratulations!</h1>
        <div className="sortedHouse__banner__wrapper">
          <Img fluid={sources} alt={`${house} insignia`} />
        </div>
        <h1 data-testid="houseColour" className="sortedHouse__header">
          You are in house {house}
        </h1>
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
