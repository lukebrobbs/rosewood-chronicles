import { RouteComponentProps } from "@reach/router"
import React, { FunctionComponent } from "react"
import { PreSortingProps } from "../../types"
import BannerImages from "./BannerImages"
import "./preSorting.scss"
import PreSortingText from "./PreSortingText"

const PreSorting: FunctionComponent<PreSortingProps &
  RouteComponentProps> = props => {
  return (
    <>
      <div className="preSorting__wrapper">
        <BannerImages banners={props.banners} />
        <div className="preSorting__info">
          <PreSortingText header="House Sorting Quiz">
            <p data-testid="preSortingDescription" className="preSorting__text">
              {props.text}
            </p>
          </PreSortingText>
          <button
            className="preSorting__signUp__button"
            onClick={() => props.setActivePage("SORTING_QUIZ")}
            data-testid="startTheQuiz"
          >
            START THE QUIZ
          </button>
        </div>
      </div>
    </>
  )
}

export default PreSorting
