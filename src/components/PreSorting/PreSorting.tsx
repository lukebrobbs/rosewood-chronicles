import { navigate } from "gatsby"
import React, { FormEvent, useState } from "react"
import Form from "react-bootstrap/Form"
import BannerImages from "./BannerImages"
import EmailCapture from "./EmailCapture"
import "./preSorting.scss"
import PreSortingText from "./PreSortingText"
import { IPreSortingProps } from "./types"

const PreSorting = (props: IPreSortingProps) => {
  const [isAddingEmail, setIsAddingEmail] = useState(false)
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    fetch(
      `${props.origin}/.netlify/functions/mailChimp?email=${email}&subscribed=${subscribed}`
    )
    navigate("/sortingQuiz")
  }

  return (
    <div className="preSorting__wrapper">
      <BannerImages banners={props.banners} />
      <div className="preSorting__info">
        <Form className="preSorting__form" onSubmit={handleSubmit}>
          <PreSortingText header="House Sorting Quiz">
            {isAddingEmail ? (
              <EmailCapture
                setEmail={setEmail}
                email={email}
                subscribed={subscribed}
                setSubscribed={setSubscribed}
              />
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
