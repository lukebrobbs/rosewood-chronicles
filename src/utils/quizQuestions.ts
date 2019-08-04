import { IAnswer, IQuestion } from "../components/SortingQuiz/types"
import { House } from "./sharedTypes"

interface IEdges {
  node: {
    id: string
    question: string
    conchAnswer: string
    ivyAnswer: string
    stratusAnswer: string
  }
}

interface IContentfulQuizQuestions {
  edges: IEdges[]
}

export interface IRawQuestionData {
  allContentfulSortingQuizQuestion: IContentfulQuizQuestions
}

export const formatQuizQuestions = (
  questions: IRawQuestionData
): IQuestion[] => {
  const shuffle = (
    array: [IAnswer, IAnswer, IAnswer]
  ): [IAnswer, IAnswer, IAnswer] => {
    return array.sort(() => Math.random() - 0.5)
  }
  return questions.allContentfulSortingQuizQuestion.edges.map(edge => {
    const { id, conchAnswer, stratusAnswer, ivyAnswer, question } = edge.node
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
  })
}

export const calculateHouse = (
  scores: Array<House | "">
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
