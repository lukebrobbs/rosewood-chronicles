import { RouteComponentProps } from "@reach/router"
import { Link } from "gatsby"
import React, { FunctionComponent } from "react"
import BannerImages from "./BannerImages"
import "./preSorting.scss"
import PreSortingText from "./PreSortingText"
import { IPreSortingProps } from "./types"

const PreSorting: FunctionComponent<
  IPreSortingProps & RouteComponentProps
> = props => {
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
            onClick={() => props.setActivePage("SIGN_UP")}
            className="preSorting__signUp__button"
          >
            SIGN UP
          </button>
        </div>
      </div>
    </>
  )
}

export default PreSorting
