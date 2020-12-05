import React, { ReactElement } from "react"
import { graphql } from "gatsby"
import { ScrapbookQuery } from "../../../types"
import { InnerPages } from "../../../components/Scrapbook/InnerPages"
import { useWindowSize } from "../../../hooks/useWindowSize"

const Conch2 = (props: ScrapbookQuery<"page1011", "page10">): ReactElement => {
  const { width } = useWindowSize()
  if (width >= 765) {
    return (
      <InnerPages
        backLink="/lotties-scrapbook/ivy/3"
        forwardLink="/lotties-scrapbook/takeshin-gakuen/1"
        fluid={props.data.contentfulLottiesScrapbook.page1011.fluid}
        imageAlt="Lottie's scrapbook Conch page"
      />
    )
  }
  return (
    <InnerPages
      backLink="/lotties-scrapbook/conch/1"
      forwardLink="/lotties-scrapbook/takeshin-gakuen/1"
      fluid={props.data.contentfulLottiesScrapbookMobile.page10.fluid}
      imageAlt="Lottie's scrapbook Conch page 2"
      mobile
    />
  )
}

export default Conch2

export const query = graphql`
  query scrapbookConchQuery2 {
    contentfulLottiesScrapbook {
      page1011 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    contentfulLottiesScrapbookMobile {
      page10 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
