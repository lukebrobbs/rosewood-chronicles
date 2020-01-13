import React from "react"
import { Element } from "./Scroll"
import { SortingRoutes } from "./SortingRoutes"

const NonHomePages = (props: any) => {
  return (
    <div id="nonHomeContainer">
      <Element name="pre-sorting">
        <SortingRoutes
          data={props.data.allContentfulSortingQuiz}
          houseDescriptions={props.data.allContentfulHouseDescription}
        />
      </Element>
      {/* <Element name="yearbook">
        <StudentsRoutes data={props.data} />
      </Element>
      <Element name="shop">
        <Shop pageData={props.data.allContentfulShop} />
      </Element> */}
    </div>
  )
}

export { NonHomePages }
