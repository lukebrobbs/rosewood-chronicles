import React, { ReactElement } from "react"
import { graphql } from "gatsby"
import { ScrapbookQuery } from "../../../types"
import { InnerPages } from "../../../components/Scrapbook/InnerPages"
import { useWindowSize } from "../../../hooks/useWindowSize"

const Ivy2 = (props: ScrapbookQuery<"page45", "page4">): ReactElement => {
  const { width } = useWindowSize()
  if (width >= 765) {
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
      backLink="/lotties-scrapbook/ivy/1"
      forwardLink="/lotties-scrapbook/ivy/3"
      fluid={props.data.contentfulLottiesScrapbookMobile.page4.fluid}
      imageAlt="Lottie's scrapbook Ivy page 2"
      mobile
    />
  )
}

export default Ivy2

export const query = graphql`
  query scrapbookIvyQuery2 {
    contentfulLottiesScrapbook {
      page45 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    contentfulLottiesScrapbookMobile {
      page4 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
