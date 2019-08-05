import { cleanup, render } from "@testing-library/react"
import * as Gatsby from "gatsby"
import React from "react"
import Conch from "../../src/components/Conch"

afterEach(() => {
  cleanup()
  jest.clearAllMocks()
})

describe("Conch", () => {
  it("Should render the correct house color and description as returned from GraphQL query", () => {
    const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery")
    const mockConchData = {
      contentfulHouseDescription: {
        description: {
          description:
            "Conch is the home of the resolute. Fierce and forthright, a Conch student's greatest strength is their strength of will. Named in honour of Balthazar Conch who fought off a wolf to save a fellow student, Conch is considered the loyalist house.",
        },
        houseColour: "Red",
      },
    }
    useStaticQuery.mockImplementation(() => mockConchData)

    const { getByTestId } = render(<Conch />)
    expect(getByTestId("houseColour").textContent).toBe("House colour: Red")
    expect(getByTestId("houseDescription").textContent).toBe(
      mockConchData.contentfulHouseDescription.description.description
    )
  })
})
