/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import PropTypes from "prop-types"
import React from "react"
import Nav from "../Nav"
import "./layout.scss"

interface IProps {
  children: JSX.Element | JSX.Element[]
}

export const Layout = ({ children }: IProps) => (
  <>
    <Nav />
    <div className={`layout__wrapper`}>
      <main>{children}</main>
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
