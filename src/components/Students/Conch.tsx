import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ConchInsignia from "../images/Conch"
import MeetTheStudentsConch from "../images/MeetTheStudentsConch"
import Description from "./StudentDescription"
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
    <div>
      <h1 className="students__header">Meet The Students</h1>
      <div className="studets__house__wrapper">
        <div className="students__house__insignia">
          <ConchInsignia />
          <p
            data-testid="houseDescription"
            className="student__house__description"
          >
            {data.contentfulHouseDescription.description.description}
          </p>
        </div>
        <div className="student__house__students__wrapper">
          <MeetTheStudentsConch />
        </div>
        <Description
          house="conch"
          student={{
            description:
              "Anastasia Alcroft is of Conch house and a first year in the first book 'Undercover Princess', and as of the second book, a second year. Her father is also the French ambassador",
            extraInfo:
              "Slight French accent, Barbie-like, Bloodshot eyes, wears sunglasses",
            hair: "Blonde",
            name: "Anastasia Alcroft",
            nickname: "Tague",
            occupation: "Student",
          }}
        />
        <div />
      </div>
    </div>
  )
}

export default Conch
