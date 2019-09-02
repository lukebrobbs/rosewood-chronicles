import React, { FunctionComponent, useState } from "react"
import { ActiveSortingPage, IPreSortingPageProps } from "../types"
import { formatQuizQuestions } from "../utils/quizQuestions"
import EmailCapture from "./PreSorting/EmailCapture"
import PreSorting from "./PreSorting/PreSorting"
import { SortedHouse } from "./SortedHouse"
import SortingQuiz from "./SortingQuiz/SortingQuiz"

export const SortingRoutes: FunctionComponent<IPreSortingPageProps> = props => {
  const [activePage, setActivePage] = useState<ActiveSortingPage>("PRE_SORTING")
  const { edges } = props.data
  return (
    <div className="main__page__wrapper">
      {activePage === "PRE_SORTING" && (
        <PreSorting
          header={edges[0].node.introductionHeader}
          text={edges[0].node.introductionText.introductionText}
          images={edges[0].node.introductionStudentImages}
          banners={edges[0].node.houseBanners}
          setActivePage={setActivePage}
        />
      )}
      {activePage === "SIGN_UP" && (
        <EmailCapture
          banners={edges[0].node.houseBanners}
          setActivePage={setActivePage}
        />
      )}
      {activePage === "SORTING_QUIZ" && (
        <SortingQuiz
          banners={edges[0].node.houseBanners}
          questions={formatQuizQuestions(props.data)}
          images={edges[0].node.studentImages}
          setActivePage={setActivePage}
        />
      )}
      {props.houseDescriptions.edges.map(house => {
        return (
          <div key={`${house.node.house}-sortedHouse`}>
            {activePage === house.node.house.toLowerCase() && (
              <SortedHouse data={house} />
            )}
          </div>
        )
      })}
    </div>
  )
}
