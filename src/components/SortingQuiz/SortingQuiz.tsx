import { navigate } from "gatsby"
import React, { useContext, useReducer } from "react"
import fireStoreMethods from "../../utils/fireStoreMethods"
import { calculateHouse } from "../../utils/quizQuestions"
import { FirebaseContext } from "../firebase/FirebaseProvider"
import Answers from "./Answers"
import { IAction, ISortingQuizProps, IState } from "./types"

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
    case "HANDLE_BACK":
      if (state.questionIndex <= 0) {
        return { ...state }
      }
      newQuizAnswers.splice(state.questionIndex, 1, state.currentSelection)
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
      throw new Error("Reducer error")
  }
}

const SortingQuiz = (props: ISortingQuizProps) => {
  const { userId } = useContext(FirebaseContext)

  const [state, dispatch] = useReducer(sortingQuizReducer, initialState)

  const shouldBackButtonRender = state.questionIndex > 0
  const shouldNextButtonRender =
    state.questionIndex < props.questions.length - 1

  const handleSubmit = async () => {
    const sortedHouse = calculateHouse(state.quizAnswers)
    await fireStoreMethods.setUserHouse(userId, sortedHouse)
    navigate(`/app/${sortedHouse}`)
  }

  return (
    <>
      {props.questions.map(
        (question, index) =>
          state.questionIndex === index && (
            <div key={question.id} data-testid="sortingQuizQuestion">
              <p>{question.question}</p>
              <Answers
                answers={question.answers}
                dispatch={dispatch}
                currentSelection={state.currentSelection}
              />
              {shouldBackButtonRender && (
                <button
                  data-testid="sortingQuizBackButton"
                  onClick={() => dispatch({ type: "HANDLE_BACK" })}
                >
                  BACK
                </button>
              )}
              {shouldNextButtonRender ? (
                <button
                  data-testid="sortingQuizNextButton"
                  onClick={() => dispatch({ type: "HANDLE_NEXT" })}
                >
                  NEXT
                </button>
              ) : (
                <button
                  data-testid="sortingQuizSubmitButton"
                  onClick={handleSubmit}
                >
                  SUBMIT
                </button>
              )}
            </div>
          )
      )}
    </>
  )
}

export default SortingQuiz
