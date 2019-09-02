import Img from "gatsby-image"
import React, { FunctionComponent, useState } from "react"
import { IMeetTheStudentsProps } from "../../types"
import BackButton from "../images/BackArrow"
import ForwardButton from "../images/ForwardArrow"
import { StudentsImage } from "../StudentsImage"
import Description from "./StudentDescription"
import "./students.scss"

const MeetTheStudents: FunctionComponent<IMeetTheStudentsProps> = props => {
  const {
    pageContext: { house, houseDetails, studentDescriptions, studentsImage },
  } = props
  const sources = [
    houseDetails.mobileInsignia.fluid,
    {
      ...houseDetails.desktopInsignia.fluid,
      media: `(min-width: 768px)`,
    },
  ]
  const [currentlySelectedStudent, setCurrentlySelectedStudent] = useState(
    studentDescriptions[0]
  )

  return (
    <>
      <h1 className="students__header">Yearbook</h1>
      <div className="students__house__content__wrapper">
        <div
          className="students__house__backButton"
          role="button"
          onClick={() => props.setActiveStudentsPage({ type: "HANDLE_BACK" })}
        >
          <BackButton />
        </div>
        <div className="studets__house__wrapper">
          <div>
            <div className="students__house__insignia">
              <Img fluid={sources} loading="eager" alt={`${house} insignia`} />
            </div>
            <p
              data-testid="houseDescription"
              className="student__house__description"
            >
              {houseDetails.description.description}
            </p>
          </div>
          <div className="student__house__students__wrapper">
            <StudentsImage
              students={props.pageContext.studentDescriptions}
              setStudent={setCurrentlySelectedStudent}
            />
          </div>
          <div className="student__house__currentStudent__image">
            <Img fluid={currentlySelectedStudent.image.fluid} />
          </div>
          <Description
            house={house}
            student={{
              birthday: currentlySelectedStudent.birthday,
              favouriteThings: currentlySelectedStudent.favouriteThings,
              inTheirBag: currentlySelectedStudent.inTheirBag,
              leastFavouriteThings:
                currentlySelectedStudent.leastFavouriteThings,
              name: currentlySelectedStudent.name,
              quote: currentlySelectedStudent.quote,
            }}
          />
        </div>
        <div
          className="students__house__forwardButton"
          role="button"
          onClick={() => props.setActiveStudentsPage({ type: "HANDLE_NEXT" })}
        >
          <ForwardButton />
        </div>
      </div>
    </>
  )
}

export default MeetTheStudents
