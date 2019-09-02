import { graphql } from "gatsby"
import React from "react"
import Shop from "../components/Shop/Shop"

const Home = ({ data }) => {
  return <Shop pageData={data.allContentfulShop} />
}

export const query = graphql`
  query shopQuery {
    allContentfulShop {
      edges {
        node {
          header
          shopButtonLink
          books {
            bookName
            link
            reflectionImage {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            bookImage {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  }
`

export default Home
