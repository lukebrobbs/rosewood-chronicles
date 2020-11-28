import React, { ReactElement } from "react"
import { graphql } from "gatsby"
import { ScrapbookQuery } from "../../../types"
import { InnerPages } from "../../../components/Scrapbook/InnerPages"

const Ivy = (props: ScrapbookQuery<"page45">): ReactElement => {
  return (
    <InnerPages
      backLink="/lotties-scrapbook/memories"
      forwardLink="/lotties-scrapbook/ivy/2"
      fluid={props.data.contentfulLottiesScrapbook.page45.fluid}
      imageAlt="Lottie's scrapbook Ivy page 1"
    />
  )
}

export default Ivy

export const query = graphql`
  query scrapbookIvyQuery {
    contentfulLottiesScrapbook {
      page45 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
