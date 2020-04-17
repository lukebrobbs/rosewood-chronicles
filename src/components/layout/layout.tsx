/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { FunctionComponent } from "react"
import RosesTopLeft from "../../images/Roses_TL.svg"
import RosesTopRight from "../../images/Roses_TR.svg"
import RosesBottomLeft from "../../images/Roses_BL.svg"
import RosesBottomRight from "../../images/Roses_BR.svg"

interface Props {
  page: string
}
export const Layout: FunctionComponent<Props> = props => {
  return (
    <>
      {props.page !== "/" && (
        <>
          <img src={RosesTopLeft} className="RosesTopLeft" />
          <img src={RosesTopRight} className="RosesTopRight" />
          <img src={RosesBottomLeft} className="RosesBottomLeft" />
          <img src={RosesBottomRight} className="RosesBottomRight" />
        </>
      )}
      <div className={`layout__wrapper`}>
        <main>{props.children}</main>
      </div>
    </>
  )
}
