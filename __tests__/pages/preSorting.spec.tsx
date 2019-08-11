import { cleanup, render } from "@testing-library/react"
import { StaticQuery, useStaticQuery } from "gatsby"
import React from "react"
import PreSortingPage from "../../src/pages/preSorting"

afterEach(cleanup)

describe("PreSorting page", () => {
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
      allContentfulSortingQuizIntroTextTextTextNode: {
        edges: [
          {
            node: {
              text:
                "Welcome to Rosewood Hall! Each new pupil who attends Rosewood Hall is allocated a house - Ivy, Stratus or Conch. Find out which house you belong in by signing up to take part in our house sorting quiz and to recieve exclusive content from author Connie Glynn!",
            },
          },
        ],
      },
    }
    const { getByTestId } = render(<PreSortingPage data={mockData} />)

    expect(getByTestId("preSortingDescription").textContent).toBe(
      mockData.allContentfulSortingQuizIntroTextTextTextNode.edges[0].node.text
    )
  })
})
