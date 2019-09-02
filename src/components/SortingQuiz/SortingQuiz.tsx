import Img from "gatsby-image"
import React, { useReducer, FunctionComponent } from "react"
import { IAction, ISortingQuizProps, IState } from "../../types"
import BannerImages from "../PreSorting/BannerImages"
import QuestionNumber from "./QuestionNumber"
import Quiz from "./Quiz"
import "./sortingQuiz.scss"

const initialState: IState = {
  currentSelection: "",
  questionIndex: 0,
  quizAnswers: [],
}

export const sortingQuizReducer = (state: IState, action: IAction): IState => {
  const newQuizAnswers = [...state.quizAnswers]
  switch (action.type) {
    case "HANDLE_NEXT":
      newQuizAnswers.splice(state.questionIndex, 1, state.currentSelection)
      return {
        currentSelection: state.quizAnswers[state.questionIndex + 1] || "",
        questionIndex: state.questionIndex + 1,
        quizAnswers: newQuizAnswers,
      }
    case "ADD_CURRENT_SELECTION":
      if (!action.value) {
        return { ...state }
      }
      return {
        ...state,
        currentSelection: action.value,
      }
    default:
      throw new Error("Reducer error")
  }
}

const SortingQuiz: FunctionComponent<ISortingQuizProps> = props => {
  const [state, dispatch] = useReducer(sortingQuizReducer, initialState)

  return (
    <div className="sortingQuiz__container">
      <div className="sortingQuiz__bannerImages">
        <BannerImages banners={props.banners} />
        <QuestionNumber
          totalQuestions={props.questions.length}
          currentQuestion={state.questionIndex + 1}
        />
      </div>
      <Quiz questions={props.questions} {...state} dispatch={dispatch} />
      <div className="sortingQuiz__saskia">
        <Img fluid={props.image.fluid} />
      </div>
    </div>
  )
}

export default SortingQuiz
