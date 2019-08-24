import React, { useRef } from "react"
import { Element } from "./Scroll"
import PreSorting from "./PreSorting/PreSorting"
import Shop from "./Shop/Shop"
import Students from "./Students/Students"

const NonHomePages = (props: any) => {
  const currentEl = useRef(null)
  const {
    allContentfulSortingQuiz: { edges },
  } = props.data
  return (
    <div id="nonHomeContainer">
      <Element name="pre-sorting">
        <PreSorting
          text={edges[0].node.introductionText.introductionText}
          banners={edges[0].node.houseBanners}
        />
      </Element>
      <Element name="students">
        <Students />
      </Element>
      <Element name="shop">
        <Shop />
        <button
          onClick={() =>
            currentEl.current.scrollIntoView({
              behavior: "smooth",
              block: "center",
            })
          }
        >
          PRE SORTING
        </button>
      </Element>
    </div>
  )
}

export { NonHomePages }
