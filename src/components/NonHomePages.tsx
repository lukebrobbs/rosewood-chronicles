import React from "react"
import { Element } from "./Scroll"
import Shop from "./Shop/Shop"
import { SortingRoutes } from "./SortingRoutes"
import Students from "./Students/Students"

const NonHomePages = (props: any) => {
  const {
    allContentfulSortingQuiz: { edges },
  } = props.data
  return (
    <div id="nonHomeContainer">
      <Element name="pre-sorting">
        <SortingRoutes data={props.data} />
      </Element>
      <Element name="students">
        <Students />
      </Element>
      <Element name="shop">
        <Shop />
      </Element>
    </div>
  )
}

export { NonHomePages }
