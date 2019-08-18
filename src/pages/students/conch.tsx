import { graphql } from "gatsby"
import React from "react"
import SEO from "../../components/seo"
import MeetTheStudents from "../../components/Students/MeetTheStudents"

const ConchStudents = ({ data }) => {
  return (
    <>
      <SEO title="Students | Conch" />
      <MeetTheStudents house="conch" {...data} />
    </>
  )
}

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

export default ConchStudents
