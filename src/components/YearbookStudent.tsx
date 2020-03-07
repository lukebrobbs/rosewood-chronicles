import React, { FunctionComponent } from "react"
import { YearbookStudentProps } from "../types"
import SEO from "./seo"

export const YearbookStudent: FunctionComponent<YearbookStudentProps> = props => {
  return (
    <>
      <SEO title="Yearbook" />
      <div className="yearbook__wrapper">
        <div className="yearbook__image__wrapper">
          <h1>{props.pageContext.student.displayName}</h1>
        </div>
      </div>
    </>
  )
}

export default YearbookStudent
