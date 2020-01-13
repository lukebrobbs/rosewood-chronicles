import { House, AnswerInterface, Edges, Question } from "../types"

export const formatQuizQuestions = (questions: Edges): Question[] => {
  const shuffle = (
    array: [AnswerInterface, AnswerInterface, AnswerInterface]
  ): [AnswerInterface, AnswerInterface, AnswerInterface] => {
    return array.sort(() => Math.random() - 0.5)
  }
  return questions.edges[0].node.questions.map(edge => {
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
  })
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
