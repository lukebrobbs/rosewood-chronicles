import React from "react"
import BannerImages from "./BannerImages"

import "./preSorting.scss"

interface IProps {
  text: string
}

const PreSortingText = (props: IProps) => {
  return (
    <div className="preSorting__wrapper">
      <BannerImages />
      <div className="preSorting__info">
        <div className="preSorting__intro">
          <h2 className="preSorting__header">House Sorting Quiz</h2>
          <p data-testid="preSortingDescription" className="preSorting__text">
            {props.text}
          </p>
        </div>
        <button className="preSorting__signUp__button">SIGN UP</button>
      </div>
    </div>
  )
}

export default PreSortingText
