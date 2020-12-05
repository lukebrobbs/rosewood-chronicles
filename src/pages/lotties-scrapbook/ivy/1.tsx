import React, { ReactElement } from "react"
import { graphql } from "gatsby"
import { ScrapbookQuery } from "../../../types"
import { InnerPages } from "../../../components/Scrapbook/InnerPages"
import { useWindowSize } from "../../../hooks/useWindowSize"
import { TABLET } from "../../../constants/breakPoints"

const Ivy1 = (props: ScrapbookQuery<"page45", "page3">): ReactElement => {
  const { width } = useWindowSize()
  if (width > TABLET) {
    return (
      <InnerPages
        backLink="/lotties-scrapbook/memories/1"
        forwardLink="/lotties-scrapbook/ivy/3"
        fluid={props.data.contentfulLottiesScrapbook.page45.fluid}
        imageAlt="Lottie's scrapbook Ivy page"
      />
    )
  }
  return (
    <InnerPages
      backLink="/lotties-scrapbook/memories/2"
      forwardLink="/lotties-scrapbook/ivy/2"
      fluid={props.data.contentfulLottiesScrapbookMobile.page3.fluid}
      imageAlt="Lottie's scrapbook Ivy page 1"
      singlePage
    />
  )
}

export default Ivy1

export const query = graphql`
  query scrapbookIvyQuery1 {
    contentfulLottiesScrapbook {
      page45 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    contentfulLottiesScrapbookMobile {
      page3 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
