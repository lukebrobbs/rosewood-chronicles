import React, { FunctionComponent } from "react"
import Card from "react-bootstrap/Card"
import { IQuizProps } from "../../types"
import { calculateHouse } from "../../utils/quizQuestions"
import Answers from "./Answers"

const Quiz: FunctionComponent<IQuizProps> = props => {
  const shouldNextButtonRender =
    props.questionIndex < props.questions.length - 1

  const handleSubmit = async () => {
    const sortedHouse = calculateHouse(props.quizAnswers)
    props.setActivePage(sortedHouse)
  }

  return (
    <div className="sortingQuiz__wrapper">
      {props.questions.map(
        (question, index: number) =>
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
