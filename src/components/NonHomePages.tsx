import React from "react"
import { Element } from "./Scroll"
import Shop from "./Shop/Shop"
import { SortingRoutes } from "./SortingRoutes"
import { StudentsRoutes } from "./StudentsRoutes"

const NonHomePages = (props: any) => {
  return (
    <div id="nonHomeContainer">
      <Element name="pre-sorting">
        <SortingRoutes
          data={props.data.allContentfulSortingQuiz}
          houseDescriptions={props.data.allContentfulHouseDescription}
        />
      </Element>
      <Element name="students">
        <StudentsRoutes data={props.data.allContentfulMeetTheStudents} />
      </Element>
      <Element name="shop">
        <Shop />
      </Element>
    </div>
  )
}

export { NonHomePages }
