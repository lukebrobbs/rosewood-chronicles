import React from "react"
import ListGroup from "react-bootstrap/ListGroup"
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
    <>
      <ListGroup.Item
        className="m-1"
        data-testid={`sortingQuizAnswer-${props.value}`}
        action={true}
        id={props.id}
        active={props.checked}
        aria-selected={props.checked}
        onClick={() =>
          props.dispatch({
            type: "ADD_CURRENT_SELECTION",
            value: props.value,
          })
        }
      >
        {props.label}
      </ListGroup.Item>
    </>
  )
}

export default Answer
