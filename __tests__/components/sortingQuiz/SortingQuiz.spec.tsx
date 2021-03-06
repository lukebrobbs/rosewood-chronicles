import {
  cleanup,
  fireEvent,
  Matcher,
  MatcherOptions,
  render,
} from "@testing-library/react"
import { StaticQuery, useStaticQuery } from "gatsby"
import { FluidObject } from "gatsby-image"
import React from "react"
import { questionMocks } from "../../../__mocks__/questionMocks"
import SortingQuiz, {
  sortingQuizReducer,
} from "../../../src/components/SortingQuiz/SortingQuiz"
import { House, Action, Banners, State } from "../../../src/types"

afterEach(cleanup)

describe("Sorting Quiz", () => {
  let mockBanners: Banners
  let navigateToNextQuestion: CallableFunction
  let mockImage: { fluid: FluidObject }
  let mockMobileImage: { fluid: FluidObject }

  beforeEach(() => {
    mockImage = {
      fluid: {
        aspectRatio: 4,
        src: "2345",
        srcSet: "sdg",
        sizes: "sdg",
        base64: "bbdbdbd",
        tracedSVG: "hhhfh",
        srcWebp: "jjrjr",
        srcSetWebp: "ry22",
        media: "4f4fd",
      },
    }
    mockMobileImage = {
      fluid: {
        aspectRatio: 4,
        src: "234fdsf5",
        srcSet: "sdwgvwg",
        sizes: "sdbvresag",
        base64: "<bbdbdV>V</bbdbdV>ERbd",
        tracedSVG: "hhERTGHRTEHhfh",
        srcWebp: "jjrTRH45jr",
        srcSetWebp: "ryEWR22",
        media: "4f4CCCfd",
      },
    }
    mockBanners = {
      conchDesktop: mockImage,
      conchMobile: mockMobileImage,
      ivyDesktop: mockImage,
      ivyMobile: mockMobileImage,
      stratusDesktop: mockImage,
      stratusMobile: mockMobileImage,
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
              src: "23rgf",
              srcSet: "sdv",
              sizes: "svd",
              base64: "sadfgf",
              tracedSVG: "dsafg",
              srcWebp: "dsfag",
              srcSetWebp: "aga",
              media: "ahahah",
            },
          },
        },
        mobileImage: {
          childImageSharp: {
            fluid: {
              aspectRatio: 4,
              src: "h45he",
              srcSet: "4enbqwna`",
              sizes: "anetrq4hjq42",
              base64: "45h4qw",
              tracedSVG: "dfbdf",
              srcWebp: "dsfb",
              srcSetWebp: "sdfhjsdjt",
              media: "yik,tuik",
            },
          },
        },
        desktopImage: {
          childImageSharp: {
            fluid: {
              aspectRatio: 4,
              src: "test1",
              srcSet: "test2",
              sizes: "test3",
              base64: "test4",
              tracedSVG: "test5",
              srcWebp: "test6",
              srcSetWebp: "test7",
              media: "test8",
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
      fireEvent.click(getByTestId(`answer-1`))
      fireEvent.click(getByTestId("sortingQuizNextButton"))
    }
  })
  afterAll(jest.resetAllMocks)
  it("Should only render one question at a time", () => {
    const { getAllByTestId } = render(
      <SortingQuiz
        questions={questionMocks}
        images={[mockImage]}
        banners={mockBanners}
        setActivePage={() => {
          // For tests
        }}
      />
    )
    expect(getAllByTestId("sortingQuizQuestion").length).toBe(1)
  })
  it("Should only render a next button if the user is not on the last question", () => {
    const { getByTestId, queryByTestId } = render(
      <SortingQuiz
        questions={questionMocks}
        images={[mockImage]}
        banners={mockBanners}
        setActivePage={() => {
          // For tests
        }}
      />
    )
    expect(getByTestId("sortingQuizNextButton")).toBeInTheDocument()
    navigateToNextQuestion(getByTestId)
    expect(queryByTestId("sortingQuizNextButton")).toBeNull()
  })
  it("Should render a submit button if the user is on the last question", () => {
    const { getByTestId, queryByTestId } = render(
      <SortingQuiz
        questions={questionMocks}
        images={[mockImage]}
        banners={mockBanners}
        setActivePage={() => {
          // For tests
        }}
      />
    )

    expect(queryByTestId("sortingQuizSubmitButton")).toBeNull()
    navigateToNextQuestion(getByTestId)
    expect(getByTestId("sortingQuizSubmitButton")).toBeInTheDocument()
  })
})

describe("reducer", () => {
  let handleNextAction: (value?: House) => Action

  beforeAll(() => {
    handleNextAction = (value): Action => ({
      type: "HANDLE_NEXT",
      value,
    })
  })
  describe("HANDLE_NEXT", () => {
    it("Should increment the current index, and add current selection to quizAnswers array", () => {
      const mockState: State = {
        currentSelection: "IVY",
        imageIndex: 0,
        questionIndex: 0,
        quizAnswers: [],
      }
      const mockAction = handleNextAction()

      const expected = {
        currentSelection: "",
        imageIndex: 0,
        questionIndex: 1,
        quizAnswers: ["IVY"],
      }
      expect(sortingQuizReducer(mockState, mockAction)).toEqual(expected)
    })
    it("Should set currentSection to the next answer if it exists", () => {
      const mockState: State = {
        currentSelection: "IVY",
        imageIndex: 0,
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
      const mockState: State = {
        currentSelection: "STRATUS",
        imageIndex: 0,
        questionIndex: 0,
        quizAnswers: ["CONCH"],
      }

      const mockAction: Action = { type: "ADD_CURRENT_SELECTION" }
      expect(sortingQuizReducer(mockState, mockAction)).toEqual(mockState)
    })
  })
  describe("default", () => {
    it("Should throw an error", () => {
      const mockState: State = {
        currentSelection: "STRATUS",
        imageIndex: 0,
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
