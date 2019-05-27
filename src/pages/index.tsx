import { Link } from "gatsby"
import React, { useContext } from "react"

import { AuthContext } from "../components/AuthProvider"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const { login, authenticate } = useContext(AuthContext)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <button onClick={login}>LOGIN</button>
      <button onClick={authenticate}>AUTHENTICATE</button>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
