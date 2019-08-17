import {
  cleanup,
  fireEvent,
  Matcher,
  MatcherOptions,
  render,
  wait,
} from "@testing-library/react"
import { navigate, StaticQuery, useStaticQuery } from "gatsby"
import React from "react"
import { questionMocks } from "../../../__mocks__/questionMocks"
import SortingQuiz, {
  sortingQuizReducer,
} from "../../../src/components/SortingQuiz/SortingQuiz"
import { IAction, IState } from "../../../src/components/SortingQuiz/types"
import { House } from "../../../src/utils/sharedTypes"
import { FluidObject } from "gatsby-image"

afterEach(cleanup)

describe("Sorting Quiz", () => {
  let navigateToNextQuestion: CallableFunction
  let mockImage: { fluid: FluidObject }

  beforeEach(() => {
    mockImage = {
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
    }
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
        placeholderImage: {
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
  afterAll(jest.resetAllMocks)
  it("Should only render one question at a time", () => {
    const { getAllByTestId } = render(
      <SortingQuiz questions={questionMocks} image={mockImage} />
    )
    expect(getAllByTestId("sortingQuizQuestion").length).toBe(1)
  })
  it("Should only render a next button if the user is not on the last question", () => {
    const { getByTestId, queryByTestId } = render(
      <SortingQuiz questions={questionMocks} image={mockImage} />
    )
    expect(getByTestId("sortingQuizNextButton")).toBeInTheDocument()
    navigateToNextQuestion(getByTestId)
    expect(queryByTestId("sortingQuizNextButton")).toBeNull()
  })
  it("Should render a submit button if the user is on the last question", () => {
    const { getByTestId, queryByTestId } = render(
      <SortingQuiz questions={questionMocks} image={mockImage} />
    )

    expect(queryByTestId("sortingQuizSubmitButton")).toBeNull()
    navigateToNextQuestion(getByTestId)
    expect(getByTestId("sortingQuizSubmitButton")).toBeInTheDocument()
  })

  describe("quiz submission", () => {
    it("Should navigate the user to the appropriate house page", async () => {
      // @ts-ignore
      navigate = jest.fn()
      const { getByTestId } = render(
        <SortingQuiz questions={questionMocks} image={mockImage} />
      )
      navigateToNextQuestion(getByTestId)
      fireEvent.click(
        getByTestId(`sortingQuizAnswer-${questionMocks[1].answers[0].house}`)
      )
      fireEvent.click(getByTestId("sortingQuizSubmitButton"))
      await wait(() => {}, { timeout: 1 })
      // @ts-ignore
      expect(navigate.mock.calls[0][0]).toBe("/stratus")
    })
  })
})

describe("reducer", () => {
  let handleNextAction: (value?: House) => IAction

  beforeAll(() => {
    handleNextAction = (value): IAction => ({
      type: "HANDLE_NEXT",
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
