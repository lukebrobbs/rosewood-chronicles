import React, { FunctionComponent } from "react"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import { YearbookProps } from "../types"

const Yearbook: FunctionComponent<YearbookProps> = ({ data }) => {
  return (
    <>
      <SEO title="Yearbook" />
      <div className="yearbook__wrapper">
        <div className="yearbook__image__wrapper">
          <h1 className="yearbook__header">
            {data.contentfulYearbookLandingPage.header}
          </h1>
          {data.contentfulYearbookLandingPage.students.map(student => {
            return (
              <Link
                to={`/yearbook/${student.displayName.toLowerCase()}`}
                key={student.displayName}
                className={`yearbook__student__wrapper ${student.displayName.toLowerCase()}`}
              >
                <Img fluid={student.image.fluid} />
                <p>{student.displayName}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Yearbook

export const query = graphql`
  query yearbookQuery {
    contentfulYearbookLandingPage {
      header
      students {
        displayName
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
