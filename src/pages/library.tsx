import { graphql, Link, PageProps } from "gatsby"
import React, { FunctionComponent } from "react"
import { LibraryBook } from "../components/images/LibraryBook"

interface LibraryData {
  allContentfulStory: {
    edges: {
      node: {
        title: string
        id: string
        slug: string
      }
    }[]
  }
}

const Library: FunctionComponent<PageProps<LibraryData>> = ({ data }) => {
  return (
    <div className="library">
      <h1 className="library__header">The Rosewood Library</h1>
      <div className="books__wrapper">
        {data.allContentfulStory.edges.map(({ node }) => {
          return (
            <div key={node.id} className="library-book">
              <Link to={node.slug} className="library-book__link">
                <LibraryBook alt={node.title} />
                <p className="library-book__title">{node.title}</p>
                {/* <p>{node.title}</p> */}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Library

export const query = graphql`
  query storyQuery {
    allContentfulStory {
      edges {
        node {
          title
          id
          slug
        }
      }
    }
  }
`
