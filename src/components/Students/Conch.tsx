import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React, { useState } from "react"
import MeetTheStudentsConch from "../images/MeetTheStudentsConch"
import Description from "./StudentDescription"
import "./students.scss"

export const CONCH_MEET_THE_STUDENTS_QUERY = graphql`
  query conchMeetTheStudentQuery {
    contentfulHouseDescription(house: { eq: "conch" }) {
      description {
        description
      }
      desktopInsignia {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      mobileInsignia {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    allContentfulStudentDescription(filter: { house: { eq: "Conch" } }) {
      edges {
        node {
          description {
            description
          }
          hair
          house
          name
          nickname
          occupation
          id
          extraInfo {
            extraInfo
          }
        }
      }
    }
  }
`

const Conch = () => {
  const {
    contentfulHouseDescription,
    allContentfulStudentDescription: { edges },
  } = useStaticQuery(CONCH_MEET_THE_STUDENTS_QUERY)

  const sources = [
    contentfulHouseDescription.mobileInsignia.fluid,
    {
      ...contentfulHouseDescription.desktopInsignia.fluid,
      media: `(min-width: 768px)`,
    },
  ]

  const [currentlySelectedStudent, setCurrentlySelectedStudent] = useState(
    edges[0].node
  )

  return (
    <div>
      <h1 className="students__header">Meet The Students</h1>
      <div className="studets__house__wrapper">
        <div className="students__house__insignia">
          <Img fluid={sources} loading="eager" alt="Conch insignia" />
          <p
            data-testid="houseDescription"
            className="student__house__description"
          >
            {contentfulHouseDescription.description.description}
          </p>
        </div>
        <div className="student__house__students__wrapper">
          <MeetTheStudentsConch />
        </div>
        <Description
          house="conch"
          student={{
            description: currentlySelectedStudent.description.description,
            extraInfo: currentlySelectedStudent.extraInfo.extraInfo,
            hair: currentlySelectedStudent.hair,
            name: currentlySelectedStudent.name,
            nickname: currentlySelectedStudent.nickname,
            occupation: currentlySelectedStudent.occupation,
          }}
        />
        <div />
      </div>
    </div>
  )
}

export default Conch
