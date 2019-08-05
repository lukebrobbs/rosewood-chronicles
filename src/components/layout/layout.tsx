/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import PropTypes from "prop-types"
import React from "react"
import Nav from "../Nav"
import "./layout.css"
import { LayoutWrapper } from "./layoutStyles"

interface IProps {
  children: JSX.Element | JSX.Element[]
}

export const Layout = ({ children }: IProps) => (
  <>
    <Nav />
    <LayoutWrapper className={`layout__container`}>
      <main>{children}</main>
    </LayoutWrapper>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
