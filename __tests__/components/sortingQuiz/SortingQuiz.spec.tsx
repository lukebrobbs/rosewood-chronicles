import { cleanup, render } from "@testing-library/react"
import * as React from "react"
import { questionMocks } from "../../../__mocks__/questionMocks"
import SortingQuiz from "../../../src/components/SortingQuiz/SortingQuiz"

afterEach(cleanup)

describe("Sorting Quiz", () => {
  it("Should only render one question at a a time", () => {
    const { getByTestId } = render(<SortingQuiz questions={questionMocks} />)
    expect(getByTestId("sortingQuizQuestion")).toBeInTheDocument()
  })
  it("Should only render a back button if the user is not on the first question", () => {})
  it("Should only render a next button if the user is not on the last question", () => {})
  it("Should render a submit button if the user is on the last question", () => {})
  it("Users previous answers should be stored if they move to a previous question", () => {})
})
