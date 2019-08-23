import { graphql } from "gatsby"
import React, { useEffect } from "react"
import { Element, Events, scrollSpy } from "react-scroll"
import Home from "../components/Home/Home"
import Nav from "../components/Nav"
import SEO from "../components/seo"
import { NonHomePages } from "../components/NonHomePages"

const IndexPage = ({ data }) => {
  useEffect(() => {
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element)
    })
    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element)
    })
    scrollSpy.update()

    return () => {
      Events.scrollEvent.remove("begin")
      Events.scrollEvent.remove("end")
    }
  }, [])

  return (
    <>
      <SEO title="Home" />
      <Element name="titlePage" className="element">
        <Home data={data} />
      </Element>
      <Element name="nonHome" className="element">
        <Nav />
        <NonHomePages data={data} />
      </Element>
    </>
  )
}

export const query = graphql`
  query mainQuery {
    allContentfulSortingQuiz(limit: 1) {
      edges {
        node {
          introductionText {
            introductionText
          }
          houseBanners {
            conchDesktop {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            conchMobile {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            ivyDesktop {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            ivyMobile {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            stratusDesktop {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            stratusMobile {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
