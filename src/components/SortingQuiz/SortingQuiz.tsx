import { navigate } from "gatsby"
import React, { useReducer } from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { calculateHouse } from "../../utils/quizQuestions"
import Answers from "./Answers"
import "./sortingQuiz.scss"
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
  const [state, dispatch] = useReducer(sortingQuizReducer, initialState)

  const shouldBackButtonRender = state.questionIndex > 0
  const shouldNextButtonRender =
    state.questionIndex < props.questions.length - 1

  const handleSubmit = async () => {
    const sortedHouse = calculateHouse(state.quizAnswers)
    navigate(`/${sortedHouse}`)
  }

  return (
    <div className="sortingQuiz__wrapper">
      {props.questions.map(
        (question, index) =>
          state.questionIndex === index && (
            <Card
              border="light"
              key={question.id}
              data-testid="sortingQuizQuestion"
              className="sortingQuiz__question"
              id="sortingQuiz__card"
            >
              <Card.Body className="text-center">
                <div
                  className="sortingQuiz__question"
                  data-testid="sortingQuizQuestionText"
                  id="quiz-question-label"
                >
                  {question.question}
                </div>
                <Answers
                  answers={question.answers}
                  dispatch={dispatch}
                  currentSelection={state.currentSelection}
                />

                {shouldBackButtonRender && (
                  <Button
                    data-testid="sortingQuizBackButton"
                    onClick={() => dispatch({ type: "HANDLE_BACK" })}
                  >
                    BACK
                  </Button>
                )}
                {shouldNextButtonRender ? (
                  <Button
                    data-testid="sortingQuizNextButton"
                    onClick={() => dispatch({ type: "HANDLE_NEXT" })}
                  >
                    NEXT
                  </Button>
                ) : (
                  <Button
                    data-testid="sortingQuizSubmitButton"
                    onClick={handleSubmit}
                  >
                    SUBMIT
                  </Button>
                )}
              </Card.Body>
            </Card>
          )
      )}
    </div>
  )
}

export default SortingQuiz
