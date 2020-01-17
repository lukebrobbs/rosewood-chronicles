/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import PropTypes from "prop-types"
import React from "react"
import RosesTopLeft from "../../images/Roses_TL.svg"
import RosesTopRight from "../../images/Roses_TR.svg"
import RosesBottomLeft from "../../images/Roses_BL.svg"
import RosesBottomRight from "../../images/Roses_BR.svg"
import "./layout.scss"

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const Layout = (props: Props) => (
  <>
    <img src={RosesTopLeft} className="RosesTopLeft" />
    <img src={RosesTopRight} className="RosesTopRight" />
    <img src={RosesBottomLeft} className="RosesBottomLeft" />
    <img src={RosesBottomRight} className="RosesBottomRight" />
    <div className={`layout__wrapper`}>
      <main>{props.children}</main>
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
