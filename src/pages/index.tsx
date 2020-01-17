import React from "react"
import Home from "../components/Home/Home"
import { Element } from "../components/Scroll"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <>
      <>
        <SEO title="Home" />
        <Element name="title-page">
          <Home />
        </Element>
      </>
    </>
  )
}

export default IndexPage
