import { cleanup, render } from "@testing-library/react"
import { StaticQuery } from "gatsby"
import React from "react"
import PreSortingPage from "../../src/pages/preSorting"

afterEach(cleanup)

describe("PreSorting page", () => {
  beforeEach(() => {
    // @ts-ignore
    StaticQuery.mockImplementationOnce(({ render }) =>
      render({
        site: {
          siteMetadata: {
            title: `Default Starter`,
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
