import React, { FunctionComponent } from "react"
import Card from "react-bootstrap/Card"
import { QuizProps } from "../../types"
import { calculateHouse } from "../../utils/quizQuestions"
import Answers from "./Answers"
import { navigate } from "@reach/router"

const Quiz: FunctionComponent<QuizProps> = props => {
  const shouldNextButtonRender =
    props.questionIndex < props.questions.length - 1

  const handleSubmit = () => {
    const sortedHouse = calculateHouse(props.quizAnswers)
    navigate(`/sorting-quiz/${sortedHouse}`)
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
                    onClick={() =>
                      props.dispatch({ type: "HANDLE_NEXT", max: props.max })
                    }
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
