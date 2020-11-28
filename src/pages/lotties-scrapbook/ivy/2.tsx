import React, { ReactElement } from "react"
import { graphql } from "gatsby"
import { ScrapbookQuery } from "../../../types"
import { InnerPages } from "../../../components/Scrapbook/InnerPages"

const Ivy2 = (props: ScrapbookQuery<"page67">): ReactElement => {
  return (
    <InnerPages
      backLink="/lotties-scrapbook/ivy/1"
      forwardLink="/lotties-scrapbook/stratus"
      fluid={props.data.contentfulLottiesScrapbook.page67.fluid}
      imageAlt="Lottie's scrapbook Ivy page 2"
    />
  )
}

export default Ivy2

export const query = graphql`
  query scrapbookIvy2Query {
    contentfulLottiesScrapbook {
      page67 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
