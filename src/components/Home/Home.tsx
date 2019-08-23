import React, { useRef, useState, useEffect } from "react"
import { Element } from "react-scroll"
import TitleLogo from "../images/TitleLogo"
import "./home.scss"

const Home = (props: any) => {
  return (
    <>
      <Element name="titlePage" className="element">
        <div className="home__wrapper">
          <div className="home__image__wrapper">
            <TitleLogo />
          </div>
        </div>
      </Element>
    </>
  )
}

export default Home
