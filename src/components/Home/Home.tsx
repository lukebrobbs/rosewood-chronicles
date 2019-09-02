import React from "react"
import { Parallax } from "react-scroll-parallax"
import TitleLogo from "../images/TitleLogo"

import { Link } from "gatsby"
import "./home.scss"

const Home = () => {
  return (
    <div id="homePageContainer">
      <div className="home__wrapper">
        <Parallax
          className="home__image__wrapper"
          y={[-50, 50]}
          tagOuter="figure"
        >
          <TitleLogo />
          <div className="home__navButton__wrapper">
            <Link className="preSorting__signUp__button" to="/home">
              HOME
            </Link>
            <Link
              className="preSorting__signUp__button"
              to="/sorting-quiz/pre-sorting"
            >
              SORTING QUIZ
            </Link>
          </div>
        </Parallax>
      </div>
    </div>
  )
}

export default Home
