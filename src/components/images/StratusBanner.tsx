import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        mobileImage: file(relativePath: { eq: "M_Quiz_Stratus_Banner.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        desktopImage: file(relativePath: { eq: "D_Quiz_StratusBanner.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const sources = [
        data.mobileImage.childImageSharp.fluid,
        {
          ...data.desktopImage.childImageSharp.fluid,
          media: `(min-width: 768px)`,
        },
      ]
      return <Img fluid={sources} loading="eager" alt="Stratus House banner" />
    }}
  />
)
export default Image
