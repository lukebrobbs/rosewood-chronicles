import React, { ReactElement } from "react"
import { graphql } from "gatsby"
import { ScrapbookQuery } from "../../../types"
import { InnerPages } from "../../../components/Scrapbook/InnerPages"
import { useWindowSize } from "../../../hooks/useWindowSize"
import { TABLET } from "../../../constants/breakPoints"

const TakeshinGakuen1 = (
  props: ScrapbookQuery<"page1213", "page11">
): ReactElement => {
  const { width } = useWindowSize()
  if (width > TABLET) {
    return (
      <InnerPages
        backLink="/lotties-scrapbook/conch/1"
        forwardLink="/lotties-scrapbook/takeshin-gakuen/3"
        fluid={props.data.contentfulLottiesScrapbook.page1213.fluid}
        imageAlt="Lottie's scrapbook Takeshin Gakuen page"
        title="Lottie's scrapbook | Takeshin Gakuen"
      />
    )
  }
  return (
    <InnerPages
      backLink="/lotties-scrapbook/conch/2"
      forwardLink="/lotties-scrapbook/takeshin-gakuen/2"
      fluid={props.data.contentfulLottiesScrapbookMobile.page11.fluid}
      imageAlt="Lottie's scrapbook Takeshin Gakuen page"
      title="Lottie's scrapbook | Takeshin Gakuen"
      singlePage
    />
  )
}

export default TakeshinGakuen1

export const query = graphql`
  query scrapbookTakeshinGakuenQuery1 {
    contentfulLottiesScrapbook {
      page1213 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    contentfulLottiesScrapbookMobile {
      page11 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
