import { navigate } from "gatsby"
import React, { useState, FormEvent } from "react"
import Form from "react-bootstrap/Form"
import BannerImages from "./BannerImages"
import EmailCapture from "./EmailCapture"
import "./preSorting.scss"
import PreSortingText from "./PreSortingText"

interface IProps {
  text: string
}

const PreSorting = (props: IProps) => {
  const [isAddingEmail, setIsAddingEmail] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    navigate("/sortingQuiz")
  }

  return (
    <div className="preSorting__wrapper">
      <BannerImages />
      <div className="preSorting__info">
        <Form className="preSorting__form" onSubmit={handleSubmit}>
          <PreSortingText header="House Sorting Quiz">
            {isAddingEmail ? (
              <EmailCapture />
            ) : (
              <p
                data-testid="preSortingDescription"
                className="preSorting__text"
              >
                {props.text}
              </p>
            )}
          </PreSortingText>
          {isAddingEmail ? (
            <button className="preSorting__signUp__button " type="submit">
              START THE QUIZ
            </button>
          ) : (
            <button
              className="preSorting__signUp__button "
              onClick={() => setIsAddingEmail(true)}
              type="button"
            >
              SIGN UP
            </button>
          )}
        </Form>
      </div>
    </div>
  )
}

export default PreSorting
