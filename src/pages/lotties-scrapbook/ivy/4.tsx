import React, { ReactElement } from "react"
import { graphql } from "gatsby"
import { ScrapbookQuery } from "../../../types"
import { InnerPages } from "../../../components/Scrapbook/InnerPages"
import { useWindowSize } from "../../../hooks/useWindowSize"
import { TABLET } from "../../../constants/breakPoints"

const Ivy4 = (props: ScrapbookQuery<"page67", "page6">): ReactElement => {
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
      backLink="/lotties-scrapbook/ivy/3"
      forwardLink="/lotties-scrapbook/stratus/1"
      fluid={props.data.contentfulLottiesScrapbookMobile.page6.fluid}
      imageAlt="Lottie's scrapbook Ivy page 4"
      singlePage
    />
  )
}

export default Ivy4

export const query = graphql`
  query scrapbookIvyQuery4 {
    contentfulLottiesScrapbook {
      page67 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    contentfulLottiesScrapbookMobile {
      page6 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
