import React from "react"
import Answer from "./Answer"
import { IAnswer } from "./types"

interface IAnswersProps {
  answers: [IAnswer, IAnswer, IAnswer]
}

const Answers = (props: IAnswersProps) => {
  return (
    <>
      {props.answers.map(answer => (
        <Answer key={answer.text} value={answer.house} label={answer.text} />
      ))}
    </>
  )
}

export default Answers
