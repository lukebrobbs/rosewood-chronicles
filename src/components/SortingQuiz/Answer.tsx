import React from "react"
import { House } from "../../utils/sharedTypes"
import { IAction } from "./types"

interface IAnswerProps {
  id: string
  label: string
  dispatch: React.Dispatch<IAction>
  value: House
}

const Answer = (props: IAnswerProps) => {
  return (
    <div>
      <input
        id={props.id}
        type="radio"
        value={props.value}
        name="sortingQuizAnswer"
        onChange={e =>
          props.dispatch({
            type: "ADD_CURRENT_SELECTION",
            value: e.target.value,
          })
        }
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  )
}

export default Answer
