import React, { ReactElement } from "react"
import { graphql } from "gatsby"
import { ScrapbookQuery } from "../../types"
import { InnerPages } from "../../components/Scrapbook/InnerPages"

const Stratus = (props: ScrapbookQuery<"page89">): ReactElement => {
  return (
    <InnerPages
      backLink="/lotties-scrapbook/ivy/2"
      forwardLink="/lotties-scrapbook/conch"
      fluid={props.data.contentfulLottiesScrapbook.page89.fluid}
      imageAlt="Lottie's scrapbook Stratus page"
    />
  )
}

export default Stratus

export const query = graphql`
  query scrapbookStratusQuery {
    contentfulLottiesScrapbook {
      page89 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
