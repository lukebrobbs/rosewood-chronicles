import {
  cleanup,
  fireEvent,
  Matcher,
  MatcherOptions,
  render,
} from "@testing-library/react"
import React from "react"
import { questionMocks } from "../../../__mocks__/questionMocks"
import SortingQuiz, {
  sortingQuizReducer,
} from "../../../src/components/SortingQuiz/SortingQuiz"
import { IAction, IState } from "../../../src/components/SortingQuiz/types"
import { House } from "../../../src/utils/sharedTypes"

afterEach(cleanup)

describe("Sorting Quiz", () => {
  let navigateToNextQuestion: CallableFunction

  beforeAll(() => {
    navigateToNextQuestion = (
      getByTestId: (text: Matcher, options?: MatcherOptions) => HTMLElement
    ) => {
      fireEvent.click(
        getByTestId(`sortingQuizAnswer-${questionMocks[0].answers[0].house}`)
      )
      fireEvent.click(getByTestId("sortingQuizNextButton"))
    }
  })
  it("Should only render one question at a time", () => {
    const { getAllByTestId } = render(<SortingQuiz questions={questionMocks} />)
    expect(getAllByTestId("sortingQuizQuestion").length).toBe(1)
  })
  it("Should only render a next button if the user is not on the last question", () => {
    const { getByTestId, queryByTestId } = render(
      <SortingQuiz questions={questionMocks} />
    )
    expect(getByTestId("sortingQuizNextButton")).toBeInTheDocument()
    navigateToNextQuestion(getByTestId)
    expect(queryByTestId("sortingQuizNextButton")).toBeNull()
  })
  it("Should only render a back button if the user is not on the first question", () => {
    const { getByTestId, queryByTestId } = render(
      <SortingQuiz questions={questionMocks} />
    )
    expect(queryByTestId("sortingQuizBackButton")).toBeNull()
    navigateToNextQuestion(getByTestId)
    expect(getByTestId("sortingQuizBackButton")).toBeInTheDocument()
  })
  it("Should render a submit button if the user is on the last question", () => {
    const { getByTestId, queryByTestId } = render(
      <SortingQuiz questions={questionMocks} />
    )

    expect(queryByTestId("sortingQuizSubmitButton")).toBeNull()
    navigateToNextQuestion(getByTestId)
    expect(getByTestId("sortingQuizSubmitButton")).toBeInTheDocument()
  })
  it("Users previous answers should be stored if they move to a previous question", () => {
    const { getByTestId } = render(<SortingQuiz questions={questionMocks} />)
    navigateToNextQuestion(getByTestId)
    fireEvent.click(getByTestId("sortingQuizBackButton"))
    const answer = getByTestId(
      `sortingQuizAnswer-${questionMocks[0].answers[0].house}`
    )
    // @ts-ignore
    expect(answer.checked).toBe(true)
  })
  it("Should remember users selection if they go back then next", () => {
    const { getByTestId } = render(<SortingQuiz questions={questionMocks} />)
    navigateToNextQuestion(getByTestId)
    const itemToClick = () =>
      getByTestId(`sortingQuizAnswer-${questionMocks[1].answers[0].house}`)

    fireEvent.click(itemToClick())
    fireEvent.click(getByTestId("sortingQuizBackButton"))
    fireEvent.click(getByTestId("sortingQuizNextButton"))

    // @ts-ignore
    expect(itemToClick().checked).toBe(true)
  })
})

describe("reducer", () => {
  let handleNextAction: (value?: House) => IAction
  let handleBackAction: (value?: House) => IAction

  beforeAll(() => {
    handleNextAction = (value): IAction => ({
      type: "HANDLE_NEXT",
      value,
    })
    handleBackAction = (value): IAction => ({
      type: "HANDLE_BACK",
      value,
    })
  })
  describe("HANDLE_NEXT", () => {
    it("Should increment the current index, and add current selection to quizAnswers array", () => {
      const mockState: IState = {
        currentSelection: "IVY",
        questionIndex: 0,
        quizAnswers: [],
      }
      const mockAction = handleNextAction()

      const expected = {
        currentSelection: "",
        questionIndex: 1,
        quizAnswers: ["IVY"],
      }
      expect(sortingQuizReducer(mockState, mockAction)).toEqual(expected)
    })
    it("Should set currentSection to the next answer if it exists", () => {
      const mockState: IState = {
        currentSelection: "IVY",
        questionIndex: 0,
        quizAnswers: ["", "CONCH"],
      }
      const mockAction = handleNextAction()

      expect(sortingQuizReducer(mockState, mockAction).currentSelection).toBe(
        "CONCH"
      )
    })
  })
  describe("HANDLE_BACK", () => {
    it("Should decrement the current index, add current selection to quizAnswers array, and set the currentSelection to the previous answer", () => {
      const mockState: IState = {
        currentSelection: "STRATUS",
        questionIndex: 1,
        quizAnswers: ["CONCH"],
      }
      const mockAction = handleBackAction()

      const expected = {
        currentSelection: "CONCH",
        questionIndex: 0,
        quizAnswers: ["CONCH", "STRATUS"],
      }
      expect(sortingQuizReducer(mockState, mockAction)).toEqual(expected)
    })
  })
  it("Should return the state passed in if the index is 0 or less", () => {
    const mockState: IState = {
      currentSelection: "STRATUS",
      questionIndex: 0,
      quizAnswers: ["CONCH"],
    }
    const mockAction = handleBackAction()

    expect(sortingQuizReducer(mockState, mockAction)).toEqual(mockState)
  })
})
