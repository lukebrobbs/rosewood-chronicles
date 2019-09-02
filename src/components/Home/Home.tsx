import React from "react"
import { Parallax } from "react-scroll-parallax"
import TitleLogo from "../images/TitleLogo"

import { Element, Link } from "../Scroll"
import "./home.scss"

const Home = () => {
  return (
    <div id="homePageContainer">
      <Element name="titlePage" className="element">
        <div className="home__wrapper">
          <Parallax
            className="home__image__wrapper"
            y={[-50, 50]}
            tagOuter="figure"
          >
            <TitleLogo />
            <div className="home__navButton__wrapper">
              <Link className="preSorting__signUp__button" to="shop">
                HOME
              </Link>
              <Link
                className="preSorting__signUp__button"
                to="pre-sorting"
                block="start"
              >
                SORTING QUIZ
              </Link>
            </div>
          </Parallax>
        </div>
      </Element>
    </div>
  )
}

export default Home
