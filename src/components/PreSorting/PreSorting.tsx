import { Link } from "gatsby"
import React from "react"
import BannerImages from "./BannerImages"
import "./preSorting.scss"
import PreSortingText from "./PreSortingText"
import { IPreSortingProps } from "./types"

const PreSorting = (props: IPreSortingProps) => {
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
          <Link to="/signUp" className="preSorting__signUp__button">
            SIGN UP
          </Link>
        </div>
      </div>
    </>
  )
}

export default PreSorting
