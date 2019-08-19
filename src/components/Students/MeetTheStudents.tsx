import Img from "gatsby-image"
import React, { FunctionComponent, useState } from "react"
import { IMeetTheStudentsProps } from "../../types"
import Description from "./StudentDescription"
import "./students.scss"

const MeetTheStudents: FunctionComponent<IMeetTheStudentsProps> = props => {
  const sources = [
    props.pageContext.houseDetails.mobileInsignia.fluid,
    {
      ...props.pageContext.houseDetails.desktopInsignia.fluid,
      media: `(min-width: 768px)`,
    },
  ]

  const [currentlySelectedStudent, setCurrentlySelectedStudent] = useState(
    props.pageContext.studentDescriptions[0]
  )

  return (
    <div>
      <h1 className={`students__header`}>Meet The Students</h1>
      <div className="studets__house__wrapper">
        <div className="students__house__insignia">
          <Img
            fluid={sources}
            loading="eager"
            alt={`${props.pageContext.house} insignia`}
          />
          <p
            data-testid="houseDescription"
            className="student__house__description"
          >
            {props.pageContext.houseDetails.description.description}
          </p>
        </div>
        <div className="student__house__students__wrapper">
          <Img
            fluid={props.pageContext.studentsImage.fluid}
            alt={`${props.pageContext.house} students`}
          />
        </div>
        <Description
          house={props.pageContext.house}
          student={{
            description: currentlySelectedStudent.description.description,
            extraInfo: currentlySelectedStudent.extraInfo.extraInfo,
            hair: currentlySelectedStudent.hair,
            name: currentlySelectedStudent.name,
            nickname: currentlySelectedStudent.nickname,
            occupation: currentlySelectedStudent.occupation,
          }}
        />
        <div />
      </div>
    </div>
  )
}

export default MeetTheStudents
