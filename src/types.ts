import { FluidObject } from "gatsby-image"

export interface IMeetTheStudentsProps {
  pageContext: {
    house: House
    houseDetails: IHouseDetails
    studentDescriptions: IStudentDescription[]
    studentsImage: IFluid
  }
}

export interface IFluid {
  fluid: FluidObject
}

export type ActiveSortingPage = "PRE_SORTING" | "SIGN_UP" | "SORTING_QUIZ"

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

export interface IPreSortingProps {
  text: string
  banners: IBanners
  setActivePage: React.Dispatch<React.SetStateAction<ActiveSortingPage>>
}
export interface IPreSortingTextProps {
  header: string
}
export interface IPreSortingPageProps {
  data: {
    allContentfulSortingQuiz: IEdges
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

interface IEdges {
  edges: Array<{
    node: {
      introductionText: { introductionText: string }
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
