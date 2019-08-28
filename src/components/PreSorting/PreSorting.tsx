import { RouteComponentProps } from "@reach/router"
import Img from "gatsby-image"
import React, { FunctionComponent } from "react"
import { IPreSortingProps } from "../../types"
import BannerImages from "./BannerImages"
import "./preSorting.scss"
import PreSortingText from "./PreSortingText"

const PreSorting: FunctionComponent<
  IPreSortingProps & RouteComponentProps
> = props => {
  return (
    <>
      <div className="preSorting__wrapper">
        <div className="preSorting__images__left">
          <div className="left">
            <Img fluid={props.images[0].fluid} />
          </div>
          <div className="right">
            <Img fluid={props.images[1].fluid} />
          </div>
        </div>
        <div className="preSorting__info">
          <BannerImages banners={props.banners} />
          <PreSortingText header="House Sorting Quiz">
            <p data-testid="preSortingDescription" className="preSorting__text">
              {props.text}
            </p>
          </PreSortingText>
          <button
            onClick={() => props.setActivePage("SIGN_UP")}
            className="preSorting__signUp__button"
          >
            TAKE QUIZ
          </button>
        </div>
        <div className="preSorting__images__right">
          <div className="left">
            <Img fluid={props.images[2].fluid} />
          </div>
          <div className="right">
            <Img fluid={props.images[3].fluid} />
          </div>
        </div>
      </div>
    </>
  )
}

export default PreSorting
