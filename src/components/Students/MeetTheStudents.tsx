import Img from "gatsby-image"
import React, { FunctionComponent, useState } from "react"
import { IMeetTheStudentsProps } from "../../types"
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
    <div>
      <h1 className="students__header">Meet The Students</h1>
      <div className="studets__house__wrapper">
        <div className="students__house__insignia">
          <Img fluid={sources} loading="eager" alt={`${house} insignia`} />
          <p
            data-testid="houseDescription"
            className="student__house__description"
          >
            {houseDetails.description.description}
          </p>
        </div>
        <div className="student__house__students__wrapper">
          <Img fluid={studentsImage.fluid} alt={`${house} students`} />
        </div>
        <Description
          house={house}
          student={{
            birthday: currentlySelectedStudent.birthday,
            favouriteThings: currentlySelectedStudent.favouriteThings,
            leastFavouriteThings: currentlySelectedStudent.leastFavouriteThings,
            inTheirBag: currentlySelectedStudent.inTheirBag,
            name: currentlySelectedStudent.name,
            quote: currentlySelectedStudent.quote,
          }}
        />
        <div />
      </div>
    </div>
  )
}

export default MeetTheStudents
