import React, { FunctionComponent } from "react"
import { IPreSortingTextProps } from "../../types"
import "./preSorting.scss"

const PreSortingText: FunctionComponent<IPreSortingTextProps> = props => {
  return (
    <div className="preSorting__intro">
      <h2 className="preSorting__header">{props.header}</h2>
      {props.children}
    </div>
  )
}

export default PreSortingText
