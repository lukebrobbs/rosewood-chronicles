import { graphql } from "gatsby"
import React from "react"
import SEO from "../../components/seo"
import MeetTheStudents from "../../components/Students/MeetTheStudents"

const StratusStudents = ({ data }) => {
  return (
    <>
      <SEO title="Students | Stratus" />
      <MeetTheStudents house="stratus" {...data} />
    </>
  )
}

export const STRATUS_MEET_THE_STUDENTS_QUERY = graphql`
  query stratusMeetTheStudentQuery {
    contentfulMeetTheStudents(house: { eq: "Stratus" }) {
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

export default StratusStudents
