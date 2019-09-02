import React, { FunctionComponent, useState } from "react"
import { House, IStudentsRoutesProps } from "../types"
import MeetTheStudents from "./Students/MeetTheStudents"
import Students from "./Students/Students"
import { YearbookLandingPage } from "./YearbookLandingPage"

export const StudentsRoutes: FunctionComponent<
  IStudentsRoutesProps
> = props => {
  const [activePage, setActivePage] = useState<House | "STUDENTS" | "YEARBOOK">(
    "YEARBOOK"
  )
  return (
    <div className="main__page__wrapper ">
      {activePage === "YEARBOOK" && (
        <YearbookLandingPage
          data={props.data.allContentfulYearbookLandingPage}
          setActiveStudentsPage={setActivePage}
        />
      )}
      {activePage === "STUDENTS" && (
        <Students setActiveStudentsPage={setActivePage} />
      )}
      {props.data.allContentfulMeetTheStudents.edges.map(house => {
        const { houseDetails, studentsImage, studentDescriptions } = house.node
        return (
          <div key={house.node.house}>
            {activePage === house.node.house.toUpperCase() && (
              <MeetTheStudents
                pageContext={{
                  house: house.node.house,
                  houseDetails,
                  studentDescriptions,
                  studentsImage,
                }}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
