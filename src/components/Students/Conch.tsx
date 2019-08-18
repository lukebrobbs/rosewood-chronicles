import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React, { useState } from "react"
import Description from "./StudentDescription"
import "./students.scss"

export const CONCH_MEET_THE_STUDENTS_QUERY = graphql`
  query conchMeetTheStudentQuery {
    contentfulMeetTheStudents(house: { eq: "Conch" }) {
      houseDetails {
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
      studentDescriptions {
        description {
          description
        }
        extraInfo {
          extraInfo
        }
        hair
        name
        nickname
        occupation
      }
      studentsImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

const Conch = () => {
  const { contentfulMeetTheStudents } = useStaticQuery(
    CONCH_MEET_THE_STUDENTS_QUERY
  )

  const sources = [
    contentfulMeetTheStudents.houseDetails.mobileInsignia.fluid,
    {
      ...contentfulMeetTheStudents.houseDetails.desktopInsignia.fluid,
      media: `(min-width: 768px)`,
    },
  ]

  const [currentlySelectedStudent, setCurrentlySelectedStudent] = useState(
    contentfulMeetTheStudents.studentDescriptions[0]
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
            {contentfulMeetTheStudents.houseDetails.description.description}
          </p>
        </div>
        <div className="student__house__students__wrapper">
          <Img
            fluid={contentfulMeetTheStudents.studentsImage.fluid}
            alt="Conch students"
          />
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
