import { Link } from "gatsby"
import React from "react"

import Image from "../components/image"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Home Page</h1>

      <Link to="/signIn">Sign in</Link>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Layout>
  )
}

export default IndexPage
