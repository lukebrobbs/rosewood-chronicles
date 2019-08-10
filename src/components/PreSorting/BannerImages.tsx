import React from "react"
import ConchBanner from "../images/ConchBanner"
import IvyBanner from "../images/IvyBanner"
import StratusBanner from "../images/StratusBanner"

const BannerImages = () => {
  return (
    <div className="banner__wrapper">
      <IvyBanner />
      <ConchBanner />
      <StratusBanner />
    </div>
  )
}

export default BannerImages
