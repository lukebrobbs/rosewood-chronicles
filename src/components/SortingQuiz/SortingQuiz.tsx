import React, { useReducer } from "react"
import Answers from "./Answers"
import { IAction, ISortingQuizProps, IState } from "./types"

const initialState = {
  questionIndex: 0,
  quizAnswers: [],
}

export const sortingQuizReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case "INCREMENT_QUESTION_INDEX":
      return {
        questionIndex: state.questionIndex + 1,
        quizAnswers: [...state.quizAnswers],
      }
    case "DECREMENT_QUESTION_INDEX":
      return {
        questionIndex: state.questionIndex - 1,
        quizAnswers: [...state.quizAnswers],
      }
    case "ADD_QUIZ_ANSWER":
      if (!action.value) {
        return { ...state }
      }
      return {
        ...state,
        quizAnswers: [...state.quizAnswers, action.value],
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
              <Answers answers={question.answers} />
              {shouldBackButtonRender && (
                <button
                  onClick={() => dispatch({ type: "DECREMENT_QUESTION_INDEX" })}
                >
                  BACK
                </button>
              )}
              {shouldNextButtonRender ? (
                <button
                  onClick={() => dispatch({ type: "INCREMENT_QUESTION_INDEX" })}
                >
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
