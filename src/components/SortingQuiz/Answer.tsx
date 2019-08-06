import React from "react"
import { House } from "../../utils/sharedTypes"
import { IAction } from "./types"

interface IAnswerProps {
  id: string
  text: string
  dispatch: React.Dispatch<IAction>
  value: House
  checked: boolean
}

const Answer = (props: IAnswerProps) => {
  return (
    <>
      <input
        data-testid={`sortingQuizAnswer-${props.value}`}
        id={props.id}
        type="radio"
        aria-checked={props.checked}
        value={props.value}
        checked={props.checked}
        onChange={(event: any) =>
          props.dispatch({
            type: "ADD_CURRENT_SELECTION",
            value: event.target.value,
          })
        }
      />
      <label
        className={`m-2 radio-tertiary ${props.checked ? "active" : ""}`}
        htmlFor={props.id}
      >
        {props.text}
      </label>
    </>
  )
}

export default Answer
