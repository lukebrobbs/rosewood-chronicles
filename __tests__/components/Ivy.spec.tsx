import { cleanup, render } from "@testing-library/react"
import * as Gatsby from "gatsby"
import React from "react"
import Ivy from "../../src/components/Ivy"

afterEach(() => {
  cleanup()
  jest.clearAllMocks()
})

describe("Ivy", () => {
  it("Should render the correct house color and description as returned from GraphQL query", () => {
    const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery")
    const mockIvyData = {
      contentfulHouseDescription: {
        description: {
          description: "Ivy decsription",
        },
        houseColour: "Yellow",
      },
    }
    useStaticQuery.mockImplementation(() => mockIvyData)

    const { getByTestId } = render(<Ivy />)
    expect(getByTestId("houseColour").textContent).toBe(
      `House colour: ${mockIvyData.contentfulHouseDescription.houseColour}`
    )
    expect(getByTestId("houseDescription").textContent).toBe(
      mockIvyData.contentfulHouseDescription.description.description
    )
  })
})
