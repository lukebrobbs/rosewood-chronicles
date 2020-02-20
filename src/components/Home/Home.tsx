import React from "react"
import TitleLogo from "../images/TitleLogo"

import "./home.scss"

const Home = () => {
  return (
    <div id="homePageContainer">
      <div className="home__wrapper">
        <div className="home__image__wrapper">
          <TitleLogo />
        </div>
      </div>
    </div>
  )
}

export default Home
