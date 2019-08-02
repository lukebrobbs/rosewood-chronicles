import React from "react"
import Answer from "./Answer"
import { IAnswer } from "./SortingQuiz"

interface IAnswersProps {
  answers: [IAnswer, IAnswer, IAnswer]
}

const Answers = (props: IAnswersProps) => {
  return (
    <ul>
      {props.answers.map(answer => (
        <Answer key={answer.text}>{answer.text}</Answer>
      ))}
    </ul>
  )
}

export default Answers
