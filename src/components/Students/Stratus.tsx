import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import StratusInsignia from "../images/Stratus"
import "./students.scss"

export const query = graphql`
  query stratusStudents {
    contentfulHouseDescription(house: { eq: "stratus" }) {
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
      <h1 className="students__header">STRATUS</h1>
      <StratusInsignia />
      <p data-testid="houseDescription">
        {data.contentfulHouseDescription.description.description}
      </p>
    </>
  )
}

export default Stratus
