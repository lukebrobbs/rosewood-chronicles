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
  type: "HANDLE_NEXT" | "HANDLE_BACK" | "ADD_CURRENT_SELECTION"
  value?: House | string
}

export interface IState {
  questionIndex: number
  quizAnswers: Array<House | string>
  currentSelection: House | string
}
