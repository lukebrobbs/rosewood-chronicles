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
    <ListGroup className="m-3">
      {props.answers.map(answer => (
        <Answer
          id={answer.text}
          key={answer.text}
          value={answer.house}
          label={answer.text}
          dispatch={props.dispatch}
          checked={props.currentSelection === answer.house}
        />
      ))}
    </ListGroup>
  )
}

export default Answers
