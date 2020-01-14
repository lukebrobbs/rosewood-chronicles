import { FluidObject } from "gatsby-image"

export interface MeetTheStudentsProps {
  pageContext: {
    house: House | string
    houseDetails: HouseDetails
    studentDescriptions: StudentDescription[]
    studentsImage: Fluid
  }
  setActiveStudentsPage: React.Dispatch<StudentsRoutesAction>
}

export interface ShopProps {
  pageData: {
    edges: Array<{
      node: {
        header: string
        shopButtonLink: string
        books: Book[]
      }
    }>
  }
}

interface Book {
  bookName: string
  bookImage: Fluid
  reflectionImage: Fluid
  link: string
}

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

export interface PreSortingProps {
  text: string
  banners: Banners
  setActivePage: React.Dispatch<React.SetStateAction<ActiveSortingPage>>
}
export interface PreSortingTextProps {
  header: string
}
export interface PreSortingPageProps {
  data: Edges
  houseDescriptions: {
    edges: SortedHouseEdge[]
  }
}

export interface SortedHouseProps {
  data: SortedHouseEdge
}

interface SortedHouseEdge {
  node: {
    description: Description
    desktopInsignia: Fluid
    mobileInsignia: Fluid
    house: string
    studentImages: Fluid[]
  }
}

export interface YearbookLandingPageProps {
  data: YearbookEdges
  setActiveStudentsPage: CallableFunction
}

interface YearbookEdges {
  edges: Array<{
    node: {
      header: string
      description: Description
      studentImages: Fluid[]
      yearbookImage: Fluid
      nextImage: Fluid
    }
  }>
}

export interface EmailCaptureProps {
  banners: Banners
  setActivePage: React.Dispatch<React.SetStateAction<ActiveSortingPage>>
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

export interface HandleSubmit {
  firstName: string
  lastName: string
  email: string
  subscribed: boolean
  isOfAge: boolean
}

export interface StudentsRoutesState {
  currentPage: House | "YEARBOOK"
  pagesIndex: number
}
export interface StudentsRoutesAction {
  type: "HANDLE_NEXT" | "HANDLE_BACK"
}

export interface StudentsImageProps {
  students: StudentDescription[]
  setStudent: React.Dispatch<React.SetStateAction<StudentDescription>>
}

export interface SignUpProps {
  location: {
    origin: string
  }
  data: {
    allContentfulSortingQuiz: Edges
  }
}

export interface QuizProps {
  questions: Question[]
  questionIndex: number
  quizAnswers: Array<House | string>
  currentSelection: House | string
  dispatch: React.Dispatch<Action>
  setActivePage: React.Dispatch<React.SetStateAction<ActiveSortingPage>>
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

export interface FormatQuestions {
  edges: Edges
}

export interface StudentsRoutesProps {
  data: {
    allContentfulYearbookLandingPage: YearbookEdges
    allContentfulMeetTheStudents: {
      edges: Array<{
        node: {
          house: string
          houseDetails: {
            description: Description
            desktopInsignia: Fluid
            mobileInsignia: Fluid
          }
          studentsImage: Fluid
          studentDescriptions: StudentDescription[]
        }
      }>
    }
  }
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
