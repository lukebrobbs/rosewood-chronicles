import { navigate } from "gatsby"
import React from "react"
import Card from "react-bootstrap/Card"
import { calculateHouse } from "../../utils/quizQuestions"
import Answers from "./Answers"
import { IQuizProps } from "./types"

const Quiz = (props: IQuizProps) => {
  const shouldNextButtonRender =
    props.questionIndex < props.questions.length - 1

  const handleSubmit = async () => {
    const sortedHouse = calculateHouse(props.quizAnswers)
    navigate(`/${sortedHouse}`)
  }

  return (
    <div className="sortingQuiz__wrapper">
      {props.questions.map(
        (question, index) =>
          props.questionIndex === index && (
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
                  dispatch={props.dispatch}
                  currentSelection={props.currentSelection}
                />
                {shouldNextButtonRender ? (
                  <button
                    data-testid="sortingQuizNextButton"
                    className="button"
                    onClick={() => props.dispatch({ type: "HANDLE_NEXT" })}
                  >
                    NEXT
                  </button>
                ) : (
                  <button
                    className="button"
                    data-testid="sortingQuizSubmitButton"
                    onClick={handleSubmit}
                  >
                    SUBMIT
                  </button>
                )}
              </Card.Body>
            </Card>
          )
      )}
    </div>
  )
}

export default Quiz
