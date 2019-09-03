import Img from "gatsby-image"
import React, { FunctionComponent, useState } from "react"
import { IMeetTheStudentsProps } from "../../types"
import BackButton from "../images/BackArrow"
import ForwardButton from "../images/ForwardArrow"
import { StudentsImage } from "../StudentsImage"
import Description from "./StudentDescription"
import "./students.scss"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

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
        <Container>
          <Row>
            <Col sm={6} md={6} lg={6} xl={4}>
              <div className="students__house__insignia">
                <Img
                  fluid={sources}
                  loading="eager"
                  alt={`${house} insignia`}
                />
              </div>
              <p
                data-testid="houseDescription"
                className="student__house__description"
              >
                {houseDetails.description.description}
              </p>
            </Col>
            <Col sm={6} md={6} lg={6} xl={4}>
              <div className="student__house__students__wrapper">
                <StudentsImage
                  students={props.pageContext.studentDescriptions}
                  setStudent={setCurrentlySelectedStudent}
                />
              </div>
            </Col>
            <Col
              sm={6}
              md={5}
              lg={5}
              className="student__house__currentStudent__wrapper"
            >
              <div className="student__house__currentStudent__image">
                <Img fluid={currentlySelectedStudent.image.fluid} />
              </div>
            </Col>
            <Col sm={6} md={7} lg={7} xl={4}>
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
            </Col>
          </Row>
        </Container>

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
