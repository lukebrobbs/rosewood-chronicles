import React from "react"
import { Parallax } from "react-scroll-parallax"
import TitleLogo from "../images/TitleLogo"

import { Element } from "../Scroll"
import "./home.scss"
import { Link } from "gatsby"

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
                to="sorting-quiz"
                data-testid="home_sortingQuiz_link"
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
