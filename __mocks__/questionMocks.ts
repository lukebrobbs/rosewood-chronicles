import { House } from "../src/types"

export interface Answer {
  text: string
  house: House
}

export interface Question {
  id: string
  question: string
  answers: [Answer, Answer, Answer]
}

export const questionMocks: Question[] = [
  {
    answers: [
      {
        house: "STRATUS",
        text: "Curing a fatal disease and saving millions of people",
      },
      {
        house: "IVY",
        text: "Starting a revolution that changes the world",
      },
      {
        house: "CONCH",
        text: "Being the first human being to walk on Mars",
      },
    ],
    id: "1234",
    question: "What would you prefer to be known for?",
  },
  {
    answers: [
      {
        house: "IVY",
        text:
          "Deep in the woods by a lake where you can ponder and be inspired",
      },
      {
        house: "CONCH",
        text:
          "In a bustling city, full of people from all over the world to share experiences with",
      },
      {
        house: "STRATUS",
        text:
          "By the beach on a tropical island, surrounded by interesting creatures and plants",
      },
    ],
    id: "2345",
    question: "Where would you rather make your home?",
  },
]
