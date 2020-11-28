import React, { ReactElement } from "react"
import { graphql } from "gatsby"
import { ScrapbookQuery } from "../../types"
import { InnerPages } from "../../components/Scrapbook/InnerPages"

const Memories = (props: ScrapbookQuery<"page23">): ReactElement => {
  return (
    <InnerPages
      backLink="/lotties-scrapbook"
      forwardLink="/lotties-scrapbook/ivy/1"
      fluid={props.data.contentfulLottiesScrapbook.page23.fluid}
      imageAlt="Lottie's scrapbook memories page"
    />
  )
}

export default Memories

export const query = graphql`
  query scrapbookMemoriesQuery {
    contentfulLottiesScrapbook {
      page23 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
