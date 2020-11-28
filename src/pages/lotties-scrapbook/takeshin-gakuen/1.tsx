import React, { ReactElement } from "react"
import { graphql } from "gatsby"
import { ScrapbookQuery } from "../../../types"
import { InnerPages } from "../../../components/Scrapbook/InnerPages"

const TakeshinGakuen = (props: ScrapbookQuery<"page1213">): ReactElement => {
  return (
    <InnerPages
      backLink="/lotties-scrapbook/conch"
      forwardLink="/lotties-scrapbook/takeshin-gakuen/2"
      fluid={props.data.contentfulLottiesScrapbook.page1213.fluid}
      imageAlt="Lottie's scrapbook Takeshin Gakuen page 1"
    />
  )
}

export default TakeshinGakuen

export const query = graphql`
  query scrapbookTakeshinGakuenQuery {
    contentfulLottiesScrapbook {
      page1213 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
