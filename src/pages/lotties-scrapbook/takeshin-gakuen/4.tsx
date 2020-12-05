import React, { ReactElement } from "react"
import { graphql } from "gatsby"
import { ScrapbookQuery } from "../../../types"
import { InnerPages } from "../../../components/Scrapbook/InnerPages"
import { useWindowSize } from "../../../hooks/useWindowSize"

const TakeshinGakuen4 = (
  props: ScrapbookQuery<"page1415", "page14">
): ReactElement => {
  const { width } = useWindowSize()
  if (width >= 765) {
    return (
      <InnerPages
        backLink="/lotties-scrapbook/takeshin-gakuen/1"
        forwardLink="/lotties-scrapbook"
        fluid={props.data.contentfulLottiesScrapbook.page1415.fluid}
        imageAlt="Lottie's scrapbook Takeshin Gakuen page"
      />
    )
  }
  return (
    <InnerPages
      backLink="/lotties-scrapbook/takeshin-gakuen/3"
      forwardLink="/lotties-scrapbook"
      fluid={props.data.contentfulLottiesScrapbookMobile.page14.fluid}
      imageAlt="Lottie's scrapbook Takeshin Gakuen page 4"
      mobile
    />
  )
}

export default TakeshinGakuen4

export const query = graphql`
  query scrapbookTakeshinGakuenQuery4 {
    contentfulLottiesScrapbook {
      page1415 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    contentfulLottiesScrapbookMobile {
      page14 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
