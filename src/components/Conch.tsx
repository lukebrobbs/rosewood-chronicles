import { graphql, useStaticQuery } from "gatsby"
import React from "react"

export const query = graphql`
  query conchDescription {
    contentfulHouseDescription(house: { eq: "conch" }) {
      houseColour
      description {
        description
      }
    }
  }
`

const Conch = () => {
  const data = useStaticQuery(query)
  return (
    <>
      <h1>CONCH</h1>
      <p data-testid="houseColour">
        House colour: {data.contentfulHouseDescription.houseColour}
      </p>
      <p data-testid="houseDescription">
        {data.contentfulHouseDescription.description.description}
      </p>
    </>
  )
}

export default Conch
