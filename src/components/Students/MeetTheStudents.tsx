import Img from "gatsby-image"
import React, { FunctionComponent, useState } from "react"
import { IMeetTheStudentsProps } from "../../types"
import Description from "./StudentDescription"
import "./students.scss"

const MeetTheStudents: FunctionComponent<IMeetTheStudentsProps> = props => {
  const sources = [
    props.contentfulMeetTheStudents.houseDetails.mobileInsignia.fluid,
    {
      ...props.contentfulMeetTheStudents.houseDetails.desktopInsignia.fluid,
      media: `(min-width: 768px)`,
    },
  ]

  const [currentlySelectedStudent, setCurrentlySelectedStudent] = useState(
    props.contentfulMeetTheStudents.studentDescriptions[0]
  )

  return (
    <div>
      <h1 className="students__header">Meet The Students</h1>
      <div className="studets__house__wrapper">
        <div className="students__house__insignia">
          <Img
            fluid={sources}
            loading="eager"
            alt={`${props.house} insignia`}
          />
          <p
            data-testid="houseDescription"
            className="student__house__description"
          >
            {
              props.contentfulMeetTheStudents.houseDetails.description
                .description
            }
          </p>
        </div>
        <div className="student__house__students__wrapper">
          <Img
            fluid={props.contentfulMeetTheStudents.studentsImage.fluid}
            alt={`${props.house} students`}
          />
        </div>
        <Description
          house={props.house}
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
