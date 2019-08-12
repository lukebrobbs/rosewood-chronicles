import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ConchInsignia from "../images/Conch"
import "./students.scss"

export const query = graphql`
  query conchStudents {
    contentfulHouseDescription(house: { eq: "conch" }) {
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
      <h1 className="students__header">MEET THE STUDENTS</h1>
      <ConchInsignia />
      <p data-testid="houseDescription">
        {data.contentfulHouseDescription.description.description}
      </p>
    </>
  )
}

export default Conch
