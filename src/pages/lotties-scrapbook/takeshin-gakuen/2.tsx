import { graphql, Link } from "gatsby"
import React, { ReactElement } from "react"
import Img from "gatsby-image"
import BackArrow from "./../../../components/images/BackArrow"
import { ScrapbookQuery } from "../../../types"

const TakeshinGakuen2 = (props: ScrapbookQuery<"page1415">): ReactElement => {
  return (
    <div className="scrapbook__innerPages">
      <div className="scrapbook__innerPages__wrapper">
        <Link
          to={`/lotties-scrapbook/takeshin-gakuen/1`}
          className="back-button"
        >
          <BackArrow />
        </Link>
        <Img
          fluid={props.data.contentfulLottiesScrapbook.page1415.fluid}
          alt="Lottie's scrapbook Takeshin Gakuen page 2"
        />
      </div>
    </div>
  )
}

export default TakeshinGakuen2

export const query = graphql`
  query TakeshinGakuen2Query {
    contentfulLottiesScrapbook {
      page1415 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
