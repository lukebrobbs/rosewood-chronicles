import React from "react"
import { Action, AnswerInterface } from "../../types"
import Answer from "./Answer"

interface AnswersProps {
  answers: [AnswerInterface, AnswerInterface, AnswerInterface]
  dispatch: React.Dispatch<Action>
  currentSelection: string
}

const Answers = (props: AnswersProps) => {
  return (
    <div
      aria-labelledby="quiz-question-label"
      role="radiogroup"
      className="questions__wrapper"
    >
      {props.answers.map((answer, index) => (
        <Answer
          id={`answer-${index + 1}`}
          key={answer.text}
          value={answer.house}
          text={answer.text}
          dispatch={props.dispatch}
          checked={props.currentSelection === answer.house}
        />
      ))}
    </div>
  )
}

export default Answers
