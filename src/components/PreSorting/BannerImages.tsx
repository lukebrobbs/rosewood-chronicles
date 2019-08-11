import React from "react"
import ConchBanner from "../images/ConchBanner"
import IvyBanner from "../images/IvyBanner"
import StratusBanner from "../images/StratusBanner"

const BannerImages = () => {
  return (
    <div className="banner__wrapper">
      <div className="banner__img">
        <IvyBanner />
      </div>
      <div className="banner__img">
        <ConchBanner />
      </div>
      <div className="banner__img">
        <StratusBanner />
      </div>
    </div>
  )
}

export default BannerImages
