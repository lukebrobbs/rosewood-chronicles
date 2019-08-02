import React from "react"

const Answer = (props: any) => {
  return (
    <div>
      <input type="radio" {...props} />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  )
}

export default Answer
