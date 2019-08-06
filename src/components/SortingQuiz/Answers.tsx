import React from "react"
import ListGroup from "react-bootstrap/ListGroup"
import Answer from "./Answer"
import { IAction, IAnswer } from "./types"

interface IAnswersProps {
  answers: [IAnswer, IAnswer, IAnswer]
  dispatch: React.Dispatch<IAction>
  currentSelection: string
}

const Answers = (props: IAnswersProps) => {
  return (
    <ListGroup className="m-4" aria-labelledby="quiz-question-label">
      {props.answers.map((answer, index) => (
        <Answer
          id={`answer-${index + 1}`}
          aria-role="option"
          key={answer.text}
          value={answer.house}
          text={answer.text}
          dispatch={props.dispatch}
          checked={props.currentSelection === answer.house}
        />
      ))}
    </ListGroup>
  )
}

export default Answers
