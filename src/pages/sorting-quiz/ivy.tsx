import { graphql } from "gatsby"
import React from "react"
import SEO from "../../components/seo"
import { SortedHouse } from "../../components/SortedHouse"

const IvyPage = ({ data }) => {
  return (
    <>
      <SEO title="Quiz Result - Ivy" />
      <SortedHouse data={data.contentfulHouseDescription} />
    </>
  )
}

export const query = graphql`
  query ivyQuery {
    contentfulHouseDescription(house: { eq: "ivy" }) {
      id
      house
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
  }
`

export default IvyPage
