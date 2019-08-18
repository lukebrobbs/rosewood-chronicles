import Img from "gatsby-image"
import React, { FunctionComponent } from "react"
import { IBannerImagesProps, IFluid } from "./types"

const BannerImages: FunctionComponent<IBannerImagesProps> = props => {
  const {
    conchMobile,
    conchDesktop,
    ivyDesktop,
    ivyMobile,
    stratusDesktop,
    stratusMobile,
  } = props.banners
  const createSources = (alt: string, mobile: IFluid, desktop: IFluid) => {
    return {
      alt,
      sources: [
        mobile.fluid,
        {
          ...desktop.fluid,
          media: `(min-width: 768px)`,
        },
      ],
    }
  }
  const conchSources = createSources("Conch Banner", conchMobile, conchDesktop)
  const ivySources = createSources("Ivy Banner", ivyMobile, ivyDesktop)

  const stratusSources = createSources(
    "Stratus Banner",
    stratusMobile,
    stratusDesktop
  )
  return (
    <div className="banner__wrapper">
      {[conchSources, ivySources, stratusSources].map(house => (
        <div className="banner__img" key={house.alt}>
          <Img fluid={house.sources} alt={house.alt} />
        </div>
      ))}
    </div>
  )
}

export default BannerImages
