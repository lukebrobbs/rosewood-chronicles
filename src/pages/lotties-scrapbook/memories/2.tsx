import React, { ReactElement } from "react"
import { graphql } from "gatsby"
import { ScrapbookQuery } from "../../../types"
import { InnerPages } from "../../../components/Scrapbook/InnerPages"
import { useWindowSize } from "../../../hooks/useWindowSize"
import { TABLET } from "../../../constants/breakPoints"

const Memories2 = (props: ScrapbookQuery<"page23", "page2">): ReactElement => {
  const { width } = useWindowSize()
  if (width > TABLET) {
    return (
      <InnerPages
        backLink="/lotties-scrapbook"
        forwardLink="/lotties-scrapbook/ivy/1"
        fluid={props.data.contentfulLottiesScrapbook.page23.fluid}
        imageAlt="Lottie's scrapbook memories page"
      />
    )
  }
  return (
    <InnerPages
      backLink="/lotties-scrapbook/memories/1"
      forwardLink="/lotties-scrapbook/ivy/1"
      fluid={props.data.contentfulLottiesScrapbookMobile.page2.fluid}
      imageAlt="Lottie's scrapbook memories page 2"
      singlePage
    />
  )
}

export default Memories2

export const query = graphql`
  query scrapbookMemoriesQuery2 {
    contentfulLottiesScrapbook {
      page23 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    contentfulLottiesScrapbookMobile {
      page2 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
