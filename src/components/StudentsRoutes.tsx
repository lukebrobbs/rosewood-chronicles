import React, { useState, FunctionComponent } from "react"
import { House, IStudentsRoutesProps } from "../types"
import Students from "./Students/Students"
import MeetTheStudents from "./Students/MeetTheStudents"

export const StudentsRoutes: FunctionComponent<
  IStudentsRoutesProps
> = props => {
  const [activePage, setActivePage] = useState<House | "STUDENTS">("STUDENTS")
  return (
    <div className="main__page__wrapper centered">
      {activePage === "STUDENTS" && (
        <Students setActiveStudentsPage={setActivePage} />
      )}
      {props.data.edges.map(house => {
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
