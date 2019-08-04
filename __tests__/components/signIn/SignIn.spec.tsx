import {
  cleanup,
  fireEvent,
  render,
  waitForElement,
} from "@testing-library/react"
import firebase from "firebase"
import { navigate } from "gatsby"
import React from "react"
import { FirebaseContext } from "../../../src/components/firebase/FirebaseProvider"
import SignIn from "../../../src/components/signIn/SignIn"

afterEach(cleanup)

describe("SignIn component", () => {
  let mockComponent: JSX.Element
  let signInWithEmailAndPassword: any

  beforeAll(() => {
    signInWithEmailAndPassword = jest.fn()
    mockComponent = (
      <FirebaseContext.Provider
        value={{ initialized: false, isAuthenticated: true, userId: "" }}
      >
        <SignIn />
      </FirebaseContext.Provider>
    )
    // @ts-ignore
    firebase.auth = () => ({
      signInWithEmailAndPassword,
    })
  })
  it("When the user is already signed in, should redirect to the logged in home page", () => {
    // @ts-ignore
    navigate = jest.fn()
    render(mockComponent)
    // @ts-ignore
    expect(navigate.mock.calls[0][0]).toBe("/app/home")
  })
  it("If the username and password is not filled in, the login button should be disabled", () => {
    const { getByTestId } = render(mockComponent)
    // @ts-ignore
    expect(getByTestId("sign-in-button")).toBeDisabled()
  })
  it("Should enable the sign in button if a username and password is entered", () => {
    const { getByTestId } = render(mockComponent)
    const emailInput = getByTestId("sign-in-email-input")
    const passwordInput = getByTestId("sign-in-password-input")

    fireEvent.change(emailInput, { target: { value: "test@test.com" } })
    fireEvent.change(passwordInput, { target: { value: "testPassword" } })
    // @ts-ignore
    expect(getByTestId("sign-in-button")).not.toBeDisabled()
  })
  it("Should call signInWithEmailAndPassword on when email is filled in and button is clicked", async () => {
    const { getByTestId } = render(mockComponent)
    const emailInput = getByTestId("sign-in-email-input")
    const submitButton = getByTestId("sign-in-button")
    const passwordInput = getByTestId("sign-in-password-input")

    fireEvent.change(emailInput, { target: { value: "test@test.com" } })
    fireEvent.change(passwordInput, { target: { value: "testPassword" } })

    fireEvent.click(submitButton)

    // await waitForElementToBeRemoved(() => getByTestId("reset-password-wrapper"))
    expect(signInWithEmailAndPassword.mock.calls[0][0]).toBe("test@test.com")
  })
  it("If signInWithEmailAndPassword throws an error, the message should be rendered on the screen", async () => {
    const mockErrorMessage = "test Error"
    // @ts-ignore
    firebase.auth = () => ({
      signInWithEmailAndPassword: jest
        .fn()
        .mockRejectedValue(new Error(mockErrorMessage)),
    })
    const { getByTestId } = render(mockComponent)
    const emailInput = getByTestId("sign-in-email-input")
    const submitButton = getByTestId("sign-in-button")
    const passwordInput = getByTestId("sign-in-password-input")

    fireEvent.change(emailInput, { target: { value: "test@test.com" } })
    fireEvent.change(passwordInput, { target: { value: "testPassword" } })
    fireEvent.click(submitButton)

    const errorEl = await waitForElement(() => getByTestId("sign-in-error"))

    expect(errorEl.textContent).toBe(mockErrorMessage)
  })
})
