import React, { FunctionComponent } from "react"
import { StudentsProps } from "../../types"
import Conch from "../images/Conch"
import Ivy from "../images/Ivy"
import Stratus from "../images/Stratus"
import SEO from "../seo"
import "./students.scss"

const Students: FunctionComponent<StudentsProps> = props => {
  return (
    <>
      <SEO title="Students" />
      <div className="students__wrapper">
        <h1 className="students__header">Meet The Students</h1>
        <div className="students__Images__wrapper">
          <div className="students__image__wrapper">
            <button
              onClick={() => props.setActiveStudentsPage("CONCH")}
              className="students__insignia"
            >
              <Conch />
            </button>
          </div>
          <div className="students__image__wrapper">
            <button
              onClick={() => props.setActiveStudentsPage("IVY")}
              className="students__insignia"
            >
              <Ivy />
            </button>
          </div>
          <div className="students__image__wrapper">
            <button
              onClick={() => props.setActiveStudentsPage("STRATUS")}
              className="students__insignia"
            >
              <Stratus />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Students
