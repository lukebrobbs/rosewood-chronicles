import React, { ReactElement } from "react"
import { graphql } from "gatsby"
import { ScrapbookQuery } from "../../types"
import { InnerPages } from "../../components/Scrapbook/InnerPages"

const Conch = (props: ScrapbookQuery<"page1011">): ReactElement => {
  return (
    <InnerPages
      backLink="/lotties-scrapbook/stratus"
      forwardLink="/lotties-scrapbook/takeshin-gakuen/1"
      fluid={props.data.contentfulLottiesScrapbook.page1011.fluid}
      imageAlt="Lottie's scrapbook Conch page"
    />
  )
}

export default Conch

export const query = graphql`
  query scrapbookConchQuery {
    contentfulLottiesScrapbook {
      page1011 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
