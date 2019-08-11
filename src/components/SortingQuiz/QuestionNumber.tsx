import React from "react"

interface IProps {
  totalQuestions: number
  currentQuestion: number
}

const QuestionNumber = (props: IProps) => {
  return (
    <div className="sortingQuiz__questionNumber__wrapper">
      <h4 className="sortingQuiz__questionNumber__header">{`QUESTION ${props.currentQuestion}/${props.totalQuestions}`}</h4>
    </div>
  )
}

export default QuestionNumber
