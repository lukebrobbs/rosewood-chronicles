import React from "react"
import { IAction, IAnswer } from "../../types"
import Answer from "./Answer"

interface IAnswersProps {
  answers: [IAnswer, IAnswer, IAnswer]
  dispatch: React.Dispatch<IAction>
  currentSelection: string
}

const Answers = (props: IAnswersProps) => {
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
