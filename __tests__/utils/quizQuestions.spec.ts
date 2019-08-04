import {
  formatQuizQuestions,
  calculateHouse,
} from "../../src/utils/quizQuestions"
import { House } from "../../src/utils/sharedTypes"

describe("Quiz questions", () => {
  let mockGraphQLReturn: any

  beforeAll(() => {
    mockGraphQLReturn = {
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
  })

  it("Conch answer should have the conch house associated with it in the return value", () => {
    const returnValue = formatQuizQuestions(mockGraphQLReturn)

    const expectedConchText =
      mockGraphQLReturn.allContentfulSortingQuizQuestion.edges[0].node
        .conchAnswer

    const expected = returnValue[0].answers.filter(
      x => x.text === expectedConchText
    )

    expect(expected[0].house).toBe("CONCH")
  })
  it("Ivy answer should have the conch house associated with it in the return value", () => {
    const returnValue = formatQuizQuestions(mockGraphQLReturn)

    const expectedIvyText =
      mockGraphQLReturn.allContentfulSortingQuizQuestion.edges[0].node.ivyAnswer

    const expected = returnValue[0].answers.filter(
      x => x.text === expectedIvyText
    )

    expect(expected[0].house).toBe("IVY")
  })
  it("Stratus answer should have the conch house associated with it in the return value", () => {
    const returnValue = formatQuizQuestions(mockGraphQLReturn)

    const expectedStratusText =
      mockGraphQLReturn.allContentfulSortingQuizQuestion.edges[0].node
        .stratusAnswer

    const expected = returnValue[0].answers.filter(
      x => x.text === expectedStratusText
    )

    expect(expected[0].house).toBe("STRATUS")
  })
})

describe("calculateHouse()", () => {
  it("Should return the house which occurs the most in the users selections", () => {
    const conchArgs: Array<House | ""> = [
      "CONCH",
      "IVY",
      "CONCH",
      "STRATUS",
      "IVY",
      "CONCH",
      "STRATUS",
      "IVY",
      "CONCH",
      "CONCH",
    ]
    const ivyArgs: Array<House | ""> = [
      "CONCH",
      "IVY",
      "IVY",
      "STRATUS",
      "IVY",
      "IVY",
      "STRATUS",
      "IVY",
      "CONCH",
      "CONCH",
    ]

    const conchExpected = "conch"
    const conchActual = calculateHouse(conchArgs)

    const ivyExpected = "ivy"
    const ivyActual = calculateHouse(ivyArgs)

    expect(conchActual).toBe(conchExpected)
    expect(ivyActual).toBe(ivyExpected)
  })
})
