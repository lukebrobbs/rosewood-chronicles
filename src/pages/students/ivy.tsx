import { graphql } from "gatsby"
import React from "react"
import SEO from "../../components/seo"
import MeetTheStudents from "../../components/Students/MeetTheStudents"

const IvyStudents = ({ data }) => {
  return (
    <>
      <SEO title="Students | Ivy" />
      <MeetTheStudents house="ivy" {...data} />
    </>
  )
}

export const IVY_MEET_THE_STUDENTS_QUERY = graphql`
  query ivyMeetTheStudentQuery {
    contentfulMeetTheStudents(house: { eq: "Ivy" }) {
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

export default IvyStudents
