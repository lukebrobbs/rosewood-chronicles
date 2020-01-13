import React from "react"
import { Action, House } from "../../types"

interface AnswerProps {
  id: string
  text: string
  dispatch: React.Dispatch<Action>
  value: House
  checked: boolean
}

const Answer = (props: AnswerProps) => {
  return (
    <>
      <input
        data-testid={`sortingQuizAnswer-${props.value}`}
        id={props.id}
        type="radio"
        aria-checked={props.checked}
        value={props.value}
        checked={props.checked}
        onChange={event =>
          props.dispatch({
            type: "ADD_CURRENT_SELECTION",
            value: event.target.value,
          })
        }
      />
      <label
        className={`radio-tertiary ${props.checked ? "active" : ""}`}
        htmlFor={props.id}
      >
        {props.text}
      </label>
    </>
  )
}

export default Answer
