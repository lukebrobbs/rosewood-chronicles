import React, { ReactElement } from "react"
import { graphql } from "gatsby"
import { ScrapbookQuery } from "../../../types"
import { InnerPages } from "../../../components/Scrapbook/InnerPages"
import { useWindowSize } from "../../../hooks/useWindowSize"
import { TABLET } from "../../../constants/breakPoints"

const Stratus2 = (props: ScrapbookQuery<"page89", "page8">): ReactElement => {
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
      backLink="/lotties-scrapbook/stratus/1"
      forwardLink="/lotties-scrapbook/conch/1"
      fluid={props.data.contentfulLottiesScrapbookMobile.page8.fluid}
      imageAlt="Lottie's scrapbook Stratus page 2"
      title="Lottie's scrapbook | Stratus page 2"
      singlePage
    />
  )
}

export default Stratus2

export const query = graphql`
  query scrapbookStratusQuery2 {
    contentfulLottiesScrapbook {
      page89 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    contentfulLottiesScrapbookMobile {
      page8 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
