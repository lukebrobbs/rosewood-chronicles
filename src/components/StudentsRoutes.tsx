import React, { FunctionComponent, useReducer } from "react"
import {
  House,
  StudentsRoutesAction,
  StudentsRoutesProps,
  StudentsRoutesState,
} from "../types"
import MeetTheStudents from "./Students/MeetTheStudents"
import { YearbookLandingPage } from "./YearbookLandingPage"

const initialState: StudentsRoutesState = {
  currentPage: "YEARBOOK",
  pagesIndex: 0,
}

const studentsRoutesReducer = (
  state: StudentsRoutesState,
  action: StudentsRoutesAction
): StudentsRoutesState => {
  const pages: Array<House | "YEARBOOK"> = [
    "YEARBOOK",
    "IVY",
    "CONCH",
    "STRATUS",
  ]

  switch (action.type) {
    case "HANDLE_NEXT":
      const newForwardIndex =
        state.pagesIndex + 1 !== pages.length ? state.pagesIndex + 1 : 0
      return {
        currentPage: pages[newForwardIndex],
        pagesIndex: newForwardIndex,
      }
    case "HANDLE_BACK":
      const newBackIndex = state.pagesIndex !== 0 ? state.pagesIndex - 1 : 0

      return {
        currentPage: pages[newBackIndex],
        pagesIndex: newBackIndex,
      }
    default:
      throw new Error("Reducer error")
  }
}

export const StudentsRoutes: FunctionComponent<StudentsRoutesProps> = props => {
  const [state, dispatch] = useReducer(studentsRoutesReducer, initialState)

  return (
    <div className="main__page__wrapper ">
      {state.currentPage === "YEARBOOK" && (
        <YearbookLandingPage
          data={props.data.allContentfulYearbookLandingPage}
          setActiveStudentsPage={() => dispatch({ type: "HANDLE_NEXT" })}
        />
      )}
      {props.data.allContentfulMeetTheStudents.edges.map(house => {
        const { houseDetails, studentsImage, studentDescriptions } = house.node
        return (
          <div key={house.node.house}>
            {state.currentPage === house.node.house.toUpperCase() && (
              <MeetTheStudents
                pageContext={{
                  house: house.node.house,
                  houseDetails,
                  studentDescriptions,
                  studentsImage,
                }}
                setActiveStudentsPage={dispatch}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
