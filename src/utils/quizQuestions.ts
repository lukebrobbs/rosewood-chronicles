import { IQuestion, IAnswer } from "../components/SortingQuiz/types"

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
