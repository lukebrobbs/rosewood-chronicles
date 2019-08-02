import React from "react"
import Answer from "./Answer"
import { IAction, IAnswer } from "./types"

interface IAnswersProps {
  answers: [IAnswer, IAnswer, IAnswer]
  dispatch: React.Dispatch<IAction>
}

const Answers = (props: IAnswersProps) => {
  return (
    <>
      {props.answers.map(answer => (
        <Answer
          id={answer.text}
          key={answer.text}
          value={answer.house}
          label={answer.text}
          dispatch={props.dispatch}
        />
      ))}
    </>
  )
}

export default Answers
