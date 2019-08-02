import { House } from "../../utils/sharedTypes"

export interface IAnswer {
  text: string
  house: House
}

export interface IQuestion {
  id: string
  question: string
  answers: [IAnswer, IAnswer, IAnswer]
}

export interface ISortingQuizProps {
  questions: IQuestion[]
}

export interface IAction {
  type:
    | "INCREMENT_QUESTION_INDEX"
    | "DECREMENT_QUESTION_INDEX"
    | "ADD_QUIZ_ANSWER"
    | "REMOVE_QUIZ_ANSWER"
  value?: string
}

export interface IState {
  questionIndex: number
  quizAnswers: string[]
}
