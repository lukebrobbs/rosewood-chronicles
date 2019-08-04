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
      <p>House colour: {data.contentfulHouseDescription.houseColour}</p>
      <p>{data.contentfulHouseDescription.description.description}</p>
    </>
  )
}

export default Conch
