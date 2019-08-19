import React from "react"

interface IStudent {
  name: string
  description: string
  nickname: string
  occupation: string
  hair: string
  extraInfo: string
}

interface IProps {
  house: "conch" | "ivy" | "stratus"
  student: IStudent
}

const StudentDiscription = (props: IProps) => {
  const {
    description,
    extraInfo,
    hair,
    name,
    nickname,
    occupation,
  } = props.student
  return (
    <div className="student__house__student__description">
      <div
        className={`student__house__student__header ${props.house.toLowerCase()}`}
      >
        <h3>{name}</h3>
        <div className="student__house__student__insignia__wrapper" />
      </div>
      <div className="student__house__student__body">
        <p>{description}</p>
        <p>NICKNAME: {nickname}</p>
        <p>OCCUPATION: {occupation}</p>
        <p>HAIR: {hair}</p>
        <p>EXTRA INFO: {extraInfo}</p>
      </div>
    </div>
  )
}

export default StudentDiscription
