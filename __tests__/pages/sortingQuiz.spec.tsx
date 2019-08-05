import { cleanup, render } from "@testing-library/react"
import React from "react"
import SortingQuizPage from "../../src/pages/sortingQuiz"

afterEach(cleanup)

describe("sortingQuiz page", () => {
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
