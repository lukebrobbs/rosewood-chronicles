import React, { useReducer } from "react"
import Answers from "./Answers"
import { IAction, ISortingQuizProps, IState } from "./types"

const initialState = {
  currentSelection: "",
  questionIndex: 0,
  quizAnswers: [],
}

export const sortingQuizReducer = (state: IState, action: IAction): IState => {
  const newQuizAnswers = [...state.quizAnswers]
  switch (action.type) {
    case "HANDLE_NEXT":
      newQuizAnswers.push(state.currentSelection)
      return {
        currentSelection: state.currentSelection,
        questionIndex: state.questionIndex + 1,
        quizAnswers: newQuizAnswers,
      }
    case "HANDLE_BACK":
      newQuizAnswers.pop()
      return {
        currentSelection: state.quizAnswers[state.questionIndex - 1],
        questionIndex: state.questionIndex - 1,
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
      throw new Error()
  }
}

const SortingQuiz = (props: ISortingQuizProps) => {
  const [state, dispatch] = useReducer(sortingQuizReducer, initialState)

  const shouldBackButtonRender = state.questionIndex > 0
  const shouldNextButtonRender =
    state.questionIndex < props.questions.length - 1

  return (
    <>
      {props.questions.map(
        (question, index) =>
          state.questionIndex === index && (
            <div key={question.id}>
              <p>{question.question}</p>
              <Answers answers={question.answers} dispatch={dispatch} />
              {shouldBackButtonRender && (
                <button onClick={() => dispatch({ type: "HANDLE_BACK" })}>
                  BACK
                </button>
              )}
              {shouldNextButtonRender ? (
                <button onClick={() => dispatch({ type: "HANDLE_NEXT" })}>
                  NEXT
                </button>
              ) : (
                <button>SUBMIT</button>
              )}
            </div>
          )
      )}
    </>
  )
}

export default SortingQuiz
