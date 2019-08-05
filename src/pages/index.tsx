import React from "react"

import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <h1>Home Page</h1>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </>
  )
}

export default IndexPage
