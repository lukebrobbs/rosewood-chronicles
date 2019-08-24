import React from "react"
import { Parallax } from "react-scroll-parallax"
import TitleLogo from "../images/TitleLogo"
import { Element } from "../Scroll"
import "./home.scss"

const Home = () => {
  return (
    <div id="homePageContainer">
      <Element name="titlePage" className="element">
        <div className="home__wrapper">
          <Parallax
            className="home__image__wrapper"
            y={[-100, 100]}
            tagOuter="figure"
          >
            <TitleLogo />
          </Parallax>
        </div>
      </Element>
    </div>
  )
}

export default Home
