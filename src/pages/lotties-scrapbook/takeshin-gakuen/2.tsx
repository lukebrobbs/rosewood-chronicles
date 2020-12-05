import React, { ReactElement } from "react"
import { graphql } from "gatsby"
import { ScrapbookQuery } from "../../../types"
import { InnerPages } from "../../../components/Scrapbook/InnerPages"
import { useWindowSize } from "../../../hooks/useWindowSize"
import { TABLET } from "../../../constants/breakPoints"

const TakeshinGakuen2 = (
  props: ScrapbookQuery<"page1213", "page12">
): ReactElement => {
  const { width } = useWindowSize()
  if (width > TABLET) {
    return (
      <InnerPages
        backLink="/lotties-scrapbook/conch/1"
        forwardLink="/lotties-scrapbook/takeshin-gakuen/3"
        fluid={props.data.contentfulLottiesScrapbook.page1213.fluid}
        imageAlt="Lottie's scrapbook Takeshin Gakuen page"
      />
    )
  }
  return (
    <InnerPages
      backLink="/lotties-scrapbook/takeshin-gakuen/1"
      forwardLink="/lotties-scrapbook/takeshin-gakuen/3"
      fluid={props.data.contentfulLottiesScrapbookMobile.page12.fluid}
      imageAlt="Lottie's scrapbook Takeshin Gakuen page 2"
      singlePage
    />
  )
}

export default TakeshinGakuen2

export const query = graphql`
  query scrapbookTakeshinGakuenQuery2 {
    contentfulLottiesScrapbook {
      page1213 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    contentfulLottiesScrapbookMobile {
      page12 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
