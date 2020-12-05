import { graphql, Link } from "gatsby"
import React, { ReactElement } from "react"
import Img from "gatsby-image"
import ForwardArrow from "./../../components/images/ForwardArrow"
import { ScrapbookQuery } from "../../types"

const ScrapbookCover = (props: ScrapbookQuery<"cover", "">): ReactElement => {
  return (
    <div className="scrapbook__cover">
      <div className="scrapbook__cover__wrapper">
        <Link to={`/lotties-scrapbook/memories/1`} className="next-button">
          <ForwardArrow />
        </Link>
        <Img
          fluid={props.data.contentfulLottiesScrapbook.cover.fluid}
          alt="Lottie's scrapbook cover"
          imgStyle={{ objectFit: "contain" }}
        />
      </div>
    </div>
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
