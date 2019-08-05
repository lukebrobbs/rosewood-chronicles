import { cleanup, render } from "@testing-library/react"
import * as Gatsby from "gatsby"
import React from "react"
import Stratus from "../../src/components/Stratus"

afterEach(() => {
  cleanup()
  jest.clearAllMocks()
})

describe("Stratus", () => {
  it("Should render the correct house color and description as returned from GraphQL query", () => {
    const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery")
    const mockStratusData = {
      contentfulHouseDescription: {
        description: {
          description: "Stratus decsription",
        },
        houseColour: "Blue",
      },
    }
    useStaticQuery.mockImplementation(() => mockStratusData)

    const { getByTestId } = render(<Stratus />)
    expect(getByTestId("houseColour").textContent).toBe(
      `House colour: ${mockStratusData.contentfulHouseDescription.houseColour}`
    )
    expect(getByTestId("houseDescription").textContent).toBe(
      mockStratusData.contentfulHouseDescription.description.description
    )
  })
})
