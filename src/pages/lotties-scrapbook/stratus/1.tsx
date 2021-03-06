import React, { ReactElement } from "react"
import { graphql } from "gatsby"
import { ScrapbookQuery } from "../../../types"
import { InnerPages } from "../../../components/Scrapbook/InnerPages"
import { useWindowSize } from "../../../hooks/useWindowSize"
import { TABLET } from "../../../constants/breakPoints"

const Stratus1 = (props: ScrapbookQuery<"page89", "page7">): ReactElement => {
  const { width } = useWindowSize()
  if (width > TABLET) {
    return (
      <InnerPages
        backLink="/lotties-scrapbook/ivy/3"
        forwardLink="/lotties-scrapbook/conch/1"
        fluid={props.data.contentfulLottiesScrapbook.page89.fluid}
        imageAlt="Lottie's scrapbook Stratus page"
        title="Lottie's scrapbook | Stratus"
      />
    )
  }
  return (
    <InnerPages
      backLink="/lotties-scrapbook/ivy/4"
      forwardLink="/lotties-scrapbook/stratus/2"
      fluid={props.data.contentfulLottiesScrapbookMobile.page7.fluid}
      imageAlt="Lottie's scrapbook Stratus page 1"
      title="Lottie's scrapbook | Stratus page 1"
      singlePage
    />
  )
}

export default Stratus1

export const query = graphql`
  query scrapbookStratusQuery1 {
    contentfulLottiesScrapbook {
      page89 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    contentfulLottiesScrapbookMobile {
      page7 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
