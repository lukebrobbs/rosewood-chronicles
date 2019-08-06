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
      <button
        className={`m-2 btn-tertiary ${props.checked ? "active" : ""}`}
        data-testid={`sortingQuizAnswer-${props.value}`}
        id={props.id}
        aria-selected={props.checked}
        onClick={() =>
          props.dispatch({
            type: "ADD_CURRENT_SELECTION",
            value: props.value,
          })
        }
      >
        {props.text}
      </button>
    </>
  )
}

export default Answer
