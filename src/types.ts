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

type House = "conch" | "ivy" | "stratus"

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
  description: IDescription
  extraInfo: IExtraInfo
  hair: string
  name: string
  nickname: string
  occupation: string
}
