import React from "react"

interface Student {
  name: string
  birthday: string
  favouriteThings: { favouriteThings: string }
  leastFavouriteThings: { leastFavouriteThings: string }
  inTheirBag: { inTheirBag: string }
  quote: { quote: string }
}

interface Props {
  house: "conch" | "ivy" | "stratus"
  student: Student
}

const StudentDescription = (props: Props) => {
  const {
    birthday,
    favouriteThings,
    leastFavouriteThings,
    name,
    inTheirBag,
    quote,
  } = props.student
  return (
    <div className="student__house__student__description">
      <div
        className={`student__house__student__header ${props.house.toLowerCase()}`}
      >
        <h4>{name}</h4>
        <div className="student__house__student__insignia__wrapper" />
      </div>
      <div className="student__house__student__body">
        <p>BIRTHDAY: {birthday}</p>
        <p>FAVOURITE THINGS: {favouriteThings.favouriteThings}</p>
        <p>
          LEAST FAVOURITE THINGS: {leastFavouriteThings.leastFavouriteThings}
        </p>
        <p>IN THEIR BAG: {inTheirBag.inTheirBag}</p>
        <p>QUOTE: {quote.quote}</p>
      </div>
    </div>
  )
}

export default StudentDescription
