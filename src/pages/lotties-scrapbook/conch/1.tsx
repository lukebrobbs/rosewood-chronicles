import React, { ReactElement } from "react"
import { graphql } from "gatsby"
import { ScrapbookQuery } from "../../../types"
import { InnerPages } from "../../../components/Scrapbook/InnerPages"
import { useWindowSize } from "../../../hooks/useWindowSize"

const Conch1 = (props: ScrapbookQuery<"page1011", "page9">): ReactElement => {
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
      backLink="/lotties-scrapbook/stratus/2"
      forwardLink="/lotties-scrapbook/conch/2"
      fluid={props.data.contentfulLottiesScrapbookMobile.page9.fluid}
      imageAlt="Lottie's scrapbook Conch page 1"
      mobile
    />
  )
}

export default Conch1

export const query = graphql`
  query scrapbookConchQuery1 {
    contentfulLottiesScrapbook {
      page1011 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    contentfulLottiesScrapbookMobile {
      page9 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
