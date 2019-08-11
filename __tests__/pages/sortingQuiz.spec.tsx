import { cleanup, render } from "@testing-library/react"
import React from "react"
import { useStaticQuery, StaticQuery } from "gatsby"
import SortingQuizPage from "../../src/pages/sortingQuiz"

afterEach(cleanup)

describe("sortingQuiz page", () => {
  beforeEach(() => {
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
              src: "",
              srcSet: "",
              sizes: "",
              base64: "",
              tracedSVG: "",
              srcWebp: "",
              srcSetWebp: "",
              media: "",
            },
          },
        },
        mobileImage: {
          childImageSharp: {
            fluid: {
              aspectRatio: 4,
              src: "",
              srcSet: "",
              sizes: "",
              base64: "",
              tracedSVG: "",
              srcWebp: "",
              srcSetWebp: "",
              media: "",
            },
          },
        },
        desktopImage: {
          childImageSharp: {
            fluid: {
              aspectRatio: 4,
              src: "test",
              srcSet: "test",
              sizes: "test",
              base64: "test",
              tracedSVG: "test",
              srcWebp: "test",
              srcSetWebp: "test",
              media: "test",
            },
          },
        },
      })
    )
  })
  it("Should render the correct text returned in graphQL query", () => {
    const mockData = {
      allContentfulSortingQuizQuestion: {
        edges: [
          {
            node: {
              conchAnswer: "Honesty, dependability, and confidence",
              id: "87d84857-5987-5164-9c1f-8300c5c4c750",
              ivyAnswer: "Originality, bravery, and passion",
              question: "What do you value above all else?",
              stratusAnswer: "Wisdom, creativity, and freedom",
            },
          },
        ],
      },
    }
    const { getByTestId } = render(<SortingQuizPage data={mockData} />)

    expect(getByTestId("sortingQuizQuestionText").textContent).toBe(
      mockData.allContentfulSortingQuizQuestion.edges[0].node.question
    )
  })
})
