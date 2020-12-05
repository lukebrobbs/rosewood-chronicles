import { graphql, Link } from "gatsby"
import React, { ReactElement } from "react"
import { ScrapbookQuery } from "../../types"
import { InnerPages } from "../../components/Scrapbook/InnerPages"

const ScrapbookCover = (props: ScrapbookQuery<"cover", "">): ReactElement => {
  return (
    <InnerPages
      backLink="/lotties-scrapbook/takeshin-gakuen/4"
      forwardLink="/lotties-scrapbook/memories/1"
      fluid={props.data.contentfulLottiesScrapbook.cover.fluid}
      imageAlt="Lottie's scrapbook cover"
      singlePage
    />
  )
}

export default ScrapbookCover

export const query = graphql`
  query scrapbookCoverQuery {
    contentfulLottiesScrapbook {
      cover {
        fluid(maxWidth: 960) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
