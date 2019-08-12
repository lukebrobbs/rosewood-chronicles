import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import IvyInsignia from "../images/Ivy"
import "./students.scss"

export const query = graphql`
  query ivyStudents {
    contentfulHouseDescription(house: { eq: "ivy" }) {
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
      <h1 className="students__header">IVY</h1>
      <IvyInsignia />
      <p data-testid="houseDescription">
        {data.contentfulHouseDescription.description.description}
      </p>
    </>
  )
}

export default Ivy
