import { graphql } from "gatsby"
import React from "react"
import SEO from "../../components/seo"
import { SortedHouse } from "../../components/SortedHouse"

const StratusPage = ({ data }) => {
  return (
    <>
      <SEO title="Quiz Result - Stratus" />
      <SortedHouse data={data.contentfulHouseDescription} />
    </>
  )
}

export const query = graphql`
  query stratusQuery {
    contentfulHouseDescription(house: { eq: "stratus" }) {
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

export default StratusPage
