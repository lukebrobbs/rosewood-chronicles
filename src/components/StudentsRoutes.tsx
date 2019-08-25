import React, { useState, FunctionComponent } from "react"
import { House, IStudentsRoutesProps } from "../types"
import Students from "./Students/Students"
import MeetTheStudents from "./Students/MeetTheStudents"

export const StudentsRoutes: FunctionComponent<
  IStudentsRoutesProps
> = props => {
  const [activePage, setActivePage] = useState<House | "STUDENTS">("STUDENTS")
  return (
    <>
      {activePage === "STUDENTS" && (
        <Students setActiveStudentsPage={setActivePage} />
      )}
      {props.data.edges.map(house => {
        const { houseDetails, studentsImage, studentDescriptions } = house.node
        return (
          <>
            {activePage === house.node.house.toUpperCase() && (
              <MeetTheStudents
                key={house.node.house}
                pageContext={{
                  house: house.node.house,
                  houseDetails,
                  studentDescriptions,
                  studentsImage,
                }}
              />
            )}
          </>
        )
      })}
    </>
  )
}
