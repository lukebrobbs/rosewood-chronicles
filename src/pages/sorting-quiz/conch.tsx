import { graphql } from "gatsby"
import React from "react"
import SEO from "../../components/seo"
import { SortedHouse } from "../../components/SortedHouse"

const ConchPage = ({ data }) => {
  return (
    <>
      <SEO title="Quiz Result - Conch" />
      <SortedHouse data={data.contentfulHouseDescription} />
    </>
  )
}

export const query = graphql`
  query conchQuery {
    contentfulHouseDescription(house: { eq: "conch" }) {
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

export default ConchPage
