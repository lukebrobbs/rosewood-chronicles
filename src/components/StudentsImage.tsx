import Img from "gatsby-image"
import React, { FunctionComponent } from "react"
import { IStudentsImageProps } from "../types"

export const StudentsImage: FunctionComponent<IStudentsImageProps> = props => {
  return (
    <div className="studentsImage__wrapper">
      {props.students.map(student => {
        return (
          <div key={student.displayName} className="studentImage__student">
            <div
              className="studentsImage__image"
              onClick={() => props.setStudent(student)}
            >
              <Img fluid={student.image.fluid} />
            </div>
            <span
              className="student__house__student__name"
              onClick={() => props.setStudent(student)}
            >
              {student.displayName}
            </span>
          </div>
        )
      })}
    </div>
  )
}
