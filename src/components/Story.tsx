import { graphql, PageProps } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import React from "react"
import SEO from "./seo"
import { Link } from "@reach/router"

interface StoryData {
  contentfulStory: {
    title: string
    content: {
      json: any
    }
  }
}

const Story = (props: PageProps<StoryData>) => {
  const { content, title } = props.data.contentfulStory
  return (
    <>
      <SEO title={title} />
      <div className="story__wrapper">
        <h1 className="story__wrapper-title">{title}</h1>
        {documentToReactComponents(content.json)}
        <Link to="/library">Back</Link>
      </div>
    </>
  )
}

export default Story

export const query = graphql`
  query($slug: String!) {
    contentfulStory(slug: { eq: $slug }) {
      title
      content {
        json
      }
    }
  }
`
