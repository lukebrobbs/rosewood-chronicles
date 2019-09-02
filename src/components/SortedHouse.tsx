import React, { FunctionComponent } from "react"
import Img from "gatsby-image"
import { ISortedHouseProps } from "../types"

export const SortedHouse: FunctionComponent<ISortedHouseProps> = props => {
  const { house, description, desktopInsignia, mobileInsignia } = props.data
  const sources = [
    mobileInsignia.fluid,
    {
      ...desktopInsignia.fluid,
      media: `(min-width: 768px)`,
    },
  ]
  return (
    <div className="sortedHouse__wrapper">
      <div />
      <div>
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
      <div />
    </div>
  )
}
