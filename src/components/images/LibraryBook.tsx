import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

interface LibraryBookProps {
  alt: string
}

export const LibraryBook = (props: LibraryBookProps) => {
  const data = useStaticQuery(graphql`
    query {
      libraryBook: file(relativePath: { eq: "librarybook.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.libraryBook.childImageSharp.fluid} alt={props.alt} />
}
