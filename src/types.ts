import { FluidObject } from "gatsby-image"
import { string } from "yup"
import StudentDescription from "./components/Students/StudentDescription"

export interface IMeetTheStudentsProps {
  pageContext: {
    house: House | string
    houseDetails: IHouseDetails
    studentDescriptions: IStudentDescription[]
    studentsImage: IFluid
  }
}

export interface IShopProps {
  pageData: {
    edges: Array<{
      node: {
        header: string
        shopButtonLink: string
        books: IBook[]
      }
    }>
  }
}

interface IBook {
  bookName: string
  bookImage: IFluid
  reflectionImage: IFluid
  link: string
}

export interface IFluid {
  fluid: FluidObject
}

export type ActiveSortingPage =
  | "PRE_SORTING"
  | "SIGN_UP"
  | "SORTING_QUIZ"
  | House

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
  setActivePage: React.Dispatch<React.SetStateAction<ActiveSortingPage>>
}

export interface IPreSortingProps {
  header: string
  images: Array<{
    title: string
    fluid: FluidObject
  }>
  text: string
  banners: IBanners
  setActivePage: React.Dispatch<React.SetStateAction<ActiveSortingPage>>
}
export interface IPreSortingTextProps {
  header: string
}
export interface IPreSortingPageProps {
  data: IEdges
  houseDescriptions: {
    edges: ISortedHouseEdge[]
  }
}

export interface ISortedHouseProps {
  data: ISortedHouseEdge
}

interface ISortedHouseEdge {
  node: {
    description: IDescription
    desktopInsignia: IFluid
    mobileInsignia: IFluid
    house: string
  }
}

export interface IEmailCaptureProps {
  banners: IBanners
  setActivePage: React.Dispatch<React.SetStateAction<ActiveSortingPage>>
}

export interface IBannerImagesProps {
  banners: IBanners
}

export interface IFluid {
  fluid: FluidObject
}

export interface IBanners {
  conchDesktop: IFluid
  conchMobile: IFluid
  ivyDesktop: IFluid
  ivyMobile: IFluid
  stratusDesktop: IFluid
  stratusMobile: IFluid
}

export interface IHandleSubmit {
  email: string
  subscribed: boolean
}

export interface ISignUpProps {
  location: {
    origin: string
  }
  data: {
    allContentfulSortingQuiz: IEdges
  }
}

export interface IQuizProps {
  questions: IQuestion[]
  questionIndex: number
  quizAnswers: Array<House | string>
  currentSelection: House | string
  dispatch: React.Dispatch<IAction>
  setActivePage: React.Dispatch<React.SetStateAction<ActiveSortingPage>>
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

export interface IStudentsProps {
  setActiveStudentsPage: React.Dispatch<
    React.SetStateAction<House | "STUDENTS">
  >
}

export interface IFormatQuestions {
  edges: IEdges
}

export interface IStudentsRoutesProps {
  data: {
    edges: Array<{
      node: {
        house: string
        houseDetails: {
          description: IDescription
          desktopInsignia: IFluid
          mobileInsignia: IFluid
        }
        studentsImage: IFluid
        studentDescriptions: IStudentDescription[]
      }
    }>
  }
}

export type House = "conch" | "ivy" | "stratus" | "CONCH" | "IVY" | "STRATUS"

interface IDescription {
  description: string
}

interface IExtraInfo {
  extraInfo: string
}

interface IHouseDetails {
  description: IDescription
  mobileInsignia: IFluid
  desktopInsignia: IFluid
}

interface IStudentDescription {
  name: string
  birthday: string
  favouriteThings: { favouriteThings: string }
  leastFavouriteThings: { leastFavouriteThings: string }
  inTheirBag: { inTheirBag: string }
  quote: { quote: string }
}

export interface IEdges {
  edges: Array<{
    node: {
      introductionHeader: string
      introductionText: { introductionText: string }
      introductionStudentImages: Array<{
        title: string
        fluid: FluidObject
      }>
      houseBanners: IBanners
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
    }
  }>
}
