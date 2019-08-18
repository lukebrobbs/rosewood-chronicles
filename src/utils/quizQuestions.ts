import { FluidObject } from "gatsby-image"
import { IBanners } from "../components/PreSorting/types"
import { IAnswer, IQuestion } from "../components/SortingQuiz/types"
import { House } from "./sharedTypes"

interface IEdges {
  node: {
    studentImage: {
      fluid: FluidObject
    }
    questions: Array<{
      id: string
      question: string
      conchAnswer: string
      ivyAnswer: string
      stratusAnswer: string
    }>
    houseBanners: IBanners
  }
}

interface IContentfulQuizQuestions {
  edges: IEdges[]
}

export interface IRawQuestionData {
  allContentfulSortingQuiz: IContentfulQuizQuestions
}

export const formatQuizQuestions = (
  questions: IRawQuestionData
): IQuestion[] => {
  const shuffle = (
    array: [IAnswer, IAnswer, IAnswer]
  ): [IAnswer, IAnswer, IAnswer] => {
    return array.sort(() => Math.random() - 0.5)
  }
  return questions.allContentfulSortingQuiz.edges[0].node.questions.map(
    edge => {
      const { id, conchAnswer, stratusAnswer, ivyAnswer, question } = edge
      const answers = shuffle([
        { text: conchAnswer, house: "CONCH" },
        { text: stratusAnswer, house: "STRATUS" },
        { text: ivyAnswer, house: "IVY" },
      ])
      return {
        answers,
        id,
        question,
      }
    }
  )
}

export const calculateHouse = (
  scores: Array<House | string>
): "conch" | "ivy" | "stratus" => {
  const houseTotals = { conch: 0, ivy: 0, stratus: 0 }

  // @ts-ignore
  return scores.reduce((_, current) => {
    // @ts-ignore
    houseTotals[current.toLowerCase()]++

    return Object.keys(houseTotals).reduce(
      (accum, curr) =>
        // @ts-ignore
        houseTotals[curr] > houseTotals[accum] ? curr : accum,
      "conch"
    )
  }, "")
}
