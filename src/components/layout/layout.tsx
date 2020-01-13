/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import PropTypes from "prop-types"
import React from "react"
import "./layout.scss"

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const Layout = (props: Props) => (
  <>
    <div className="background__image" />
    <div className={`layout__wrapper`}>
      <main>{props.children}</main>
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
