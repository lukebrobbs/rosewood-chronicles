import { FluidObject } from "gatsby-image"

export interface Fluid {
  fluid: FluidObject
}

export type ActiveSortingPage =
  | "PRE_SORTING"
  | "SIGN_UP"
  | "SORTING_QUIZ"
  | House

export interface AnswerInterface {
  text: string
  house: House
}

export interface Question {
  id: string
  question: string
  answers: [AnswerInterface, AnswerInterface, AnswerInterface]
}

export interface SortingQuizProps {
  questions: Question[]
  images: Array<{
    fluid: FluidObject
  }>
  banners: Banners
  setActivePage: React.Dispatch<React.SetStateAction<ActiveSortingPage>>
}

export interface YearbookStudentProps {
  pageContext: {
    displayName: string
    house: string
    nextStudent: string
    prevStudent: string
  }
  data: {
    contentfulStudentDescription: StudentDescription
    contentfulHouseDescription: HouseDetails
  }
}

export interface BannerImagesProps {
  banners: Banners
}

export interface Fluid {
  fluid: FluidObject
}

export interface Banners {
  conchDesktop: Fluid
  conchMobile: Fluid
  ivyDesktop: Fluid
  ivyMobile: Fluid
  stratusDesktop: Fluid
  stratusMobile: Fluid
}

export interface QuizProps {
  setActivePage: React.Dispatch<React.SetStateAction<ActiveSortingPage>>
  questions: Question[]
  questionIndex: number
  quizAnswers: Array<House | string>
  currentSelection: House | string
  dispatch: React.Dispatch<Action>
  max: number
}

export interface Action {
  type: "HANDLE_NEXT" | "HANDLE_BACK" | "ADD_CURRENT_SELECTION"
  value?: House | string
  max?: number
}

export interface State {
  questionIndex: number
  imageIndex: number
  quizAnswers: Array<House | string>
  currentSelection: House | string
}

export interface StudentsProps {
  setActiveStudentsPage: React.Dispatch<
    React.SetStateAction<House | "STUDENTS" | "YEARBOOK">
  >
}

interface YearbookData {
  contentfulYearbookLandingPage: {
    header: string
    students: {
      displayName: string
      image: Fluid
    }[]
  }
}

export interface YearbookProps {
  data: YearbookData
}

export type House = "conch" | "ivy" | "stratus" | "CONCH" | "IVY" | "STRATUS"

interface Description {
  description: string
}

interface HouseDetails {
  description: Description
  mobileInsignia: Fluid
  desktopInsignia: Fluid
}

interface StudentDescription {
  name: string
  displayName: string
  birthday: string
  favouriteThings: { favouriteThings: string }
  leastFavouriteThings: { leastFavouriteThings: string }
  inTheirBag: { inTheirBag: string }
  quote: { quote: string }
  image: Fluid
  roomImage: Fluid
}

export interface Edges {
  edges: Array<{
    node: {
      introductionHeader: string
      introductionText: { introductionText: string }
      introductionStudentImages: Array<{
        title: string
        fluid: FluidObject
      }>
      houseBanners: Banners
      studentImages: Array<{
        fluid: FluidObject
      }>
      questions: Array<{
        id: string
        question: string
        conchAnswer: string
        ivyAnswer: string
        stratusAnswer: string
      }>
    }
  }>
}
