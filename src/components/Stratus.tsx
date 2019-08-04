import { graphql, useStaticQuery } from "gatsby"
import React from "react"

export const query = graphql`
  query stratusDescription {
    contentfulHouseDescription(house: { eq: "stratus" }) {
      houseColour
      description {
        description
      }
    }
  }
`

const Stratus = () => {
  const data = useStaticQuery(query)
  return (
    <>
      <h1>STRATUS</h1>
      <p data-testid="houseColour">
        House colour: {data.contentfulHouseDescription.houseColour}
      </p>
      <p data-testid="houseDescription">
        {data.contentfulHouseDescription.description.description}
      </p>
    </>
  )
}

export default Stratus
