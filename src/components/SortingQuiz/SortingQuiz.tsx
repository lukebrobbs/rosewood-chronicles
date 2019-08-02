import React, { useState } from "react"
import { House } from "../../utils/sharedTypes"
import Answers from "./Answers"

export interface IAnswer {
  text: string
  house: House
}

export interface IQuestion {
  id: string
  question: string
  answers: [IAnswer, IAnswer, IAnswer]
}

interface ISortingQuizProps {
  questions: IQuestion[]
}

const SortingQuiz = (props: ISortingQuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const shouldBackButtonRender = currentQuestionIndex > 0
  const shouldNextButtonRender =
    currentQuestionIndex < props.questions.length - 1

  return (
    <>
      {props.questions.map(
        (question, index) =>
          currentQuestionIndex === index && (
            <>
              <p key={question.id}>{question.question}</p>
              <Answers answers={question.answers} />
              {shouldBackButtonRender && (
                <button
                  onClick={() =>
                    setCurrentQuestionIndex(currentQuestionIndex - 1)
                  }
                >
                  BACK
                </button>
              )}
              {shouldNextButtonRender ? (
                <button
                  onClick={() =>
                    setCurrentQuestionIndex(currentQuestionIndex + 1)
                  }
                >
                  NEXT
                </button>
              ) : (
                <button>SUBMIT</button>
              )}
            </>
          )
      )}
    </>
  )
}

export default SortingQuiz
