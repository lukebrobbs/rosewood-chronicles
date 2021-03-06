import React, { ReactElement } from "react"
import { graphql } from "gatsby"
import { ScrapbookQuery } from "../../../types"
import { InnerPages } from "../../../components/Scrapbook/InnerPages"
import { useWindowSize } from "../../../hooks/useWindowSize"
import { TABLET } from "../../../constants/breakPoints"

const TakeshinGakuen3 = (
  props: ScrapbookQuery<"page1415", "page13">
): ReactElement => {
  const { width } = useWindowSize()
  if (width > TABLET) {
    return (
      <InnerPages
        backLink="/lotties-scrapbook/takeshin-gakuen/1"
        forwardLink="/lotties-scrapbook"
        fluid={props.data.contentfulLottiesScrapbook.page1415.fluid}
        imageAlt="Lottie's scrapbook Takeshin Gakuen page 2"
        title="Lottie's scrapbook | Takeshin Gakuen page 2"
      />
    )
  }
  return (
    <InnerPages
      backLink="/lotties-scrapbook/takeshin-gakuen/2"
      forwardLink="/lotties-scrapbook/takeshin-gakuen/4"
      fluid={props.data.contentfulLottiesScrapbookMobile.page13.fluid}
      imageAlt="Lottie's scrapbook Takeshin Gakuen page 3"
      title="Lottie's scrapbook | Takeshin Gakuen page 3"
      singlePage
    />
  )
}

export default TakeshinGakuen3

export const query = graphql`
  query scrapbookTakeshinGakuenQuery3 {
    contentfulLottiesScrapbook {
      page1415 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    contentfulLottiesScrapbookMobile {
      page13 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
