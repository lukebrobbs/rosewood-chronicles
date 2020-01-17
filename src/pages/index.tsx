import React from "react"
import Home from "../components/Home/Home"
import { Element } from "../components/Scroll"
import SEO from "../components/seo"
import RosesTopLeft from "../images/Roses_TL.svg"
import RosesTopRight from "../images/Roses_TR.svg"
import RosesBottomLeft from "../images/Roses_BL.svg"
import RosesBottomRight from "../images/Roses_BR.svg"

const IndexPage = () => {
  return (
    <>
      <>
        <SEO title="Home" />
        <img src={RosesTopLeft} className="home__RosesTopLeft" />
        <img src={RosesTopRight} className="home__RosesTopRight" />
        <img src={RosesBottomLeft} className="home__RosesBottomLeft" />
        <img src={RosesBottomRight} className="home__RosesBottomRight" />
        <Element name="title-page">
          <Home />
        </Element>
      </>
    </>
  )
}

export default IndexPage
