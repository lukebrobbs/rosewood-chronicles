import { cleanup, render } from "@testing-library/react"
import { StaticQuery, useStaticQuery } from "gatsby"
import { FluidObject } from "gatsby-image"
import React from "react"
import SortingQuizPage from "../../src/pages/sortingQuiz"

afterEach(cleanup)

describe("sortingQuiz page", () => {
  let mockImage: { fluid: FluidObject }
  let mockMobileImage: { fluid: FluidObject }
  beforeEach(() => {
    mockImage = {
      fluid: {
        aspectRatio: 4,
        src: "zxczxc",
        srcSet: "fd;ovkdfv",
        sizes: "wedcasc",
        base64: "weljkfh8",
        tracedSVG: "xcvkjnsodijv",
        srcWebp: "sdjfnwef89",
        srcSetWebp: "sd,mcnsd8",
        media: "sdvjknlkw",
      },
    }
    mockMobileImage = {
      fluid: {
        aspectRatio: 4,
        src: "zxcdfzxc",
        srcSet: "fd;osdvvkdfv",
        sizes: "wedcadsvsc",
        base64: "weljsvkfh8",
        tracedSVG: "xcvkjnsodijv",
        srcWebp: "sdjfnwef89",
        srcSetWebp: "sd,mcnsd8",
        media: "sdvjknlkw",
      },
    }
    // @ts-ignore
    useStaticQuery.mockReturnValue({
      site: {
        siteMetadata: {
          author: "Luke Brobbin",
          description: "test description",
          title: `Default Starter`,
        },
      },
    })
    // @ts-ignore
    StaticQuery.mockImplementation(({ render }) =>
      render({
        site: {
          siteMetadata: {
            author: "Luke Brobbin",
            description: "test description",
            title: `Default Starter`,
          },
        },
        placeholderImage: {
          childImageSharp: {
            fluid: {
              aspectRatio: 4,
              src: "vvv",
              srcSet: "dds",
              sizes: "wwerf",
              base64: "tgtg",
              tracedSVG: "byhyj",
              srcWebp: "ujuj",
              srcSetWebp: "wswswsw",
              media: "zdfsdfsfds",
            },
          },
        },
        mobileImage: {
          childImageSharp: {
            fluid: {
              aspectRatio: 4,
              src: "234",
              srcSet: "2525",
              sizes: "3747",
              base64: "hyjejh",
              tracedSVG: "fsgnsjs",
              srcWebp: "ajjwwj",
              srcSetWebp: "6446hy4e",
              media: "cvbnrs",
            },
          },
        },
        desktopImage: {
          childImageSharp: {
            fluid: {
              aspectRatio: 4,
              src: "test1",
              srcSet: "test2",
              sizes: "test3",
              base64: "test4",
              tracedSVG: "test5",
              srcWebp: "test6",
              srcSetWebp: "test7",
              media: "test8",
            },
          },
        },
      })
    )
  })
  it("Should render the correct text returned in graphQL query", () => {
    const mockData = {
      allContentfulSortingQuiz: {
        edges: [
          {
            node: {
              questions: [
                {
                  conchAnswer: "Honesty, dependability, and confidence",
                  id: "87d84857-5987-5164-9c1f-8300c5c4c750",
                  ivyAnswer: "Originality, bravery, and passion",
                  question: "What do you value above all else?",
                  stratusAnswer: "Wisdom, creativity, and freedom",
                },
              ],
              studentImage: mockImage,
              houseBanners: {
                conchDesktop: mockImage,
                conchMobile: mockMobileImage,
                ivyDesktop: mockImage,
                ivyMobile: mockMobileImage,
                stratusDesktop: mockImage,
                stratusMobile: mockMobileImage,
              },
            },
          },
        ],
      },
    }
    const { getByTestId } = render(<SortingQuizPage data={mockData} />)

    expect(getByTestId("sortingQuizQuestionText").textContent).toBe(
      mockData.allContentfulSortingQuiz.edges[0].node.questions[0].question
    )
  })
})
