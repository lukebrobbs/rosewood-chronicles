import React, { FunctionComponent } from "react"
import "./preSorting.scss"

interface IProps {
  header: string
}

const PreSortingText: FunctionComponent<IProps> = props => {
  return (
    <div className="preSorting__intro">
      <h2 className="preSorting__header">{props.header}</h2>
      {props.children}
    </div>
  )
}

export default PreSortingText
