import React, { ReactElement } from "react"
import { graphql } from "gatsby"
import { ScrapbookQuery } from "../../../types"
import { InnerPages } from "../../../components/Scrapbook/InnerPages"
import { useWindowSize } from "../../../hooks/useWindowSize"
import { TABLET } from "../../../constants/breakPoints"

const Ivy3 = (props: ScrapbookQuery<"page67", "page5">): ReactElement => {
  const { width } = useWindowSize()
  if (width > TABLET) {
    return (
      <InnerPages
        backLink="/lotties-scrapbook/ivy/1"
        forwardLink="/lotties-scrapbook/stratus/1"
        fluid={props.data.contentfulLottiesScrapbook.page67.fluid}
        imageAlt="Lottie's scrapbook Ivy page 2"
      />
    )
  }
  return (
    <InnerPages
      backLink="/lotties-scrapbook/ivy/2"
      forwardLink="/lotties-scrapbook/ivy/4"
      fluid={props.data.contentfulLottiesScrapbookMobile.page5.fluid}
      imageAlt="Lottie's scrapbook Ivy page 3"
      singlePage
    />
  )
}

export default Ivy3

export const query = graphql`
  query scrapbookIvyQuery3 {
    contentfulLottiesScrapbook {
      page67 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    contentfulLottiesScrapbookMobile {
      page5 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
