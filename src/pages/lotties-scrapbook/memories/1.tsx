import React, { ReactElement } from "react"
import { graphql } from "gatsby"
import { ScrapbookQuery } from "../../../types"
import { InnerPages } from "../../../components/Scrapbook/InnerPages"
import { useWindowSize } from "../../../hooks/useWindowSize"
import { TABLET } from "../../../constants/breakPoints"

const Memories = (props: ScrapbookQuery<"page23", "page1">): ReactElement => {
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
      backLink="/lotties-scrapbook"
      forwardLink="/lotties-scrapbook/memories/2"
      fluid={props.data.contentfulLottiesScrapbookMobile.page1.fluid}
      imageAlt="Lottie's scrapbook memories page 1"
      singlePage
    />
  )
}

export default Memories

export const query = graphql`
  query scrapbookMemoriesQuery1 {
    contentfulLottiesScrapbook {
      page23 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    contentfulLottiesScrapbookMobile {
      page1 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
