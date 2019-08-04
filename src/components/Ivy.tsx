import { graphql, useStaticQuery } from "gatsby"
import React from "react"

export const query = graphql`
  query ivyDescription {
    contentfulHouseDescription(house: { eq: "ivy" }) {
      houseColour
      description {
        description
      }
    }
  }
`

const Ivy = () => {
  const data = useStaticQuery(query)
  return (
    <>
      <h1>IVY</h1>
      <p>House colour: {data.contentfulHouseDescription.houseColour}</p>
      <p>{data.contentfulHouseDescription.description.description}</p>
    </>
  )
}

export default Ivy
