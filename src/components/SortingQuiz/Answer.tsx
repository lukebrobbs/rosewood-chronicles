import React from "react"
import { House } from "../../utils/sharedTypes"
import { IAction } from "./types"

interface IAnswerProps {
  id: string
  label: string
  dispatch: React.Dispatch<IAction>
  value: House
  checked: boolean
}

const Answer = (props: IAnswerProps) => {
  return (
    <div>
      <input
        data-testid={`sortingQuizAnswer-${props.value}`}
        id={props.id}
        type="radio"
        value={props.value}
        checked={props.checked}
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
