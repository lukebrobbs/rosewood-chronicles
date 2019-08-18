import { House } from "../../utils/sharedTypes"
import { FluidObject } from "gatsby-image"
import { IBanners } from "../PreSorting/types"

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
  image: {
    fluid: FluidObject
  }
  banners: IBanners
}

export interface IQuizProps {
  questions: IQuestion[]
  questionIndex: number
  quizAnswers: Array<House | string>
  currentSelection: House | string
  dispatch: React.Dispatch<IAction>
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
