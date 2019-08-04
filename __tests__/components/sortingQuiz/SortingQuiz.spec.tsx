import {
  cleanup,
  fireEvent,
  Matcher,
  MatcherOptions,
  render,
  wait,
} from "@testing-library/react"
import { navigate } from "gatsby"
import React from "react"
import { questionMocks } from "../../../__mocks__/questionMocks"
import SortingQuiz, {
  sortingQuizReducer,
} from "../../../src/components/SortingQuiz/SortingQuiz"
import { IAction, IState } from "../../../src/components/SortingQuiz/types"
import firestoreMethods from "../../../src/utils/fireStoreMethods"
import { House } from "../../../src/utils/sharedTypes"

afterEach(cleanup)

describe("Sorting Quiz", () => {
  let navigateToNextQuestion: CallableFunction

  beforeAll(() => {
    firestoreMethods.setUserHouse = jest.fn()
    navigateToNextQuestion = (
      getByTestId: (text: Matcher, options?: MatcherOptions) => HTMLElement
    ) => {
      fireEvent.click(
        getByTestId(`sortingQuizAnswer-${questionMocks[0].answers[0].house}`)
      )
      fireEvent.click(getByTestId("sortingQuizNextButton"))
    }
  })
  afterAll(jest.resetAllMocks)
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
  describe("quiz submission", () => {
    it("Should navigate the user to the appropriate house page", async () => {
      // @ts-ignore
      navigate = jest.fn()
      const { getByTestId } = render(<SortingQuiz questions={questionMocks} />)
      navigateToNextQuestion(getByTestId)
      fireEvent.click(
        getByTestId(`sortingQuizAnswer-${questionMocks[1].answers[0].house}`)
      )
      fireEvent.click(getByTestId("sortingQuizSubmitButton"))
      await wait(() => {}, { timeout: 1 })
      // @ts-ignore
      expect(navigate.mock.calls[0][0]).toBe("/app/stratus")
    })
    it("Should call setHouseUser with the correct house", () => {
      // @ts-ignore
      navigate = jest.fn()
      const { getByTestId } = render(<SortingQuiz questions={questionMocks} />)
      navigateToNextQuestion(getByTestId)
      fireEvent.click(
        getByTestId(`sortingQuizAnswer-${questionMocks[1].answers[0].house}`)
      )
      fireEvent.click(getByTestId("sortingQuizSubmitButton"))
      // @ts-ignore
      expect(firestoreMethods.setUserHouse.mock.calls[0]).toEqual([
        "",
        "stratus",
      ])
    })
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
    it("Should return the state passed in if the index is 0 or less", () => {
      const mockState: IState = {
        currentSelection: "STRATUS",
        questionIndex: 0,
        quizAnswers: ["CONCH"],
      }
      const mockAction = handleBackAction()

      expect(sortingQuizReducer(mockState, mockAction)).toEqual(mockState)
    })
    describe("ADD_CURRENT_SELECTION", () => {
      it("If no action value is passed in, should return the state passed in", () => {
        const mockState: IState = {
          currentSelection: "STRATUS",
          questionIndex: 0,
          quizAnswers: ["CONCH"],
        }

        const mockAction: IAction = { type: "ADD_CURRENT_SELECTION" }
        expect(sortingQuizReducer(mockState, mockAction)).toEqual(mockState)
      })
    })
    describe("default", () => {
      it("Should throw an error", () => {
        const mockState: IState = {
          currentSelection: "STRATUS",
          questionIndex: 0,
          quizAnswers: ["CONCH"],
        }
        try {
          // @ts-ignore
          sortingQuizReducer(mockState, { type: "sdf" })
        } catch (error) {
          expect(error.message).toBe("Reducer error")
        }
      })
    })
  })
})
