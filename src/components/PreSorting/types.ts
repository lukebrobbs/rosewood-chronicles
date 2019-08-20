import { FluidObject } from "gatsby-image"

export interface IPreSortingProps {
  origin: string
  text: string
  banners: IBanners
}
export interface IPreSortingTextProps {
  header: string
}
export interface IPreSortingPageProps {
  location: {
    origin: string
  }
  data: {
    allContentfulSortingQuiz: IEdges
  }
}
export interface IBannerImagesProps {
  banners: IBanners
}

export interface IFluid {
  fluid: FluidObject
}

export interface IBanners {
  conchDesktop: IFluid
  conchMobile: IFluid
  ivyDesktop: IFluid
  ivyMobile: IFluid
  stratusDesktop: IFluid
  stratusMobile: IFluid
}

interface IEdges {
  edges: Array<{
    node: {
      introductionText: { introductionText: string }
      houseBanners: IBanners
    }
  }>
}
