import React from "react"
import { Element } from "react-scroll"
import PreSorting from "./PreSorting/PreSorting"
import Students from "./Students/Students"
import Shop from "./Shop/Shop"

const NonHomePages = (props: any) => {
  const {
    allContentfulSortingQuiz: { edges },
  } = props.data
  return (
    <>
      <Element name="preSorting" className="element">
        <PreSorting
          text={edges[0].node.introductionText.introductionText}
          banners={edges[0].node.houseBanners}
        />
      </Element>
      <Element name="students" className="element">
        <Students />
      </Element>
      <Element name="shop" className="element">
        <Shop />
      </Element>
    </>
  )
}

export { NonHomePages }
