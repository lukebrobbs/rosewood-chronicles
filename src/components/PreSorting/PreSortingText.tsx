import React, { FunctionComponent } from "react"
import { PreSortingTextProps } from "../../types"
import "./preSorting.scss"

const PreSortingText: FunctionComponent<PreSortingTextProps> = props => {
  return (
    <div className="preSorting__intro">
      <h2 className="preSorting__header">{props.header}</h2>
      {props.children}
    </div>
  )
}

export default PreSortingText
