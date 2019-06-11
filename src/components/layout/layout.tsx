/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Header from "../header/Header"
import "./layout.css"
import { LayoutWrapper } from "./layoutStyles"

interface IProps {
  children: JSX.Element | JSX.Element[]
}

const Layout = ({ children }: IProps) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <LayoutWrapper className={`layout__container`}>
          <main>{children}</main>
        </LayoutWrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
