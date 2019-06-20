import firebase from "firebase"
import * as React from "react"
import {
  cleanup,
  fireEvent,
  render,
  waitForElement,
  waitForElementToBeRemoved,
} from "react-testing-library"
import { FirebaseContext } from "../../../src/components/firebase/FirebaseProvider"
import PasswordReset from "../../../src/components/passwordReset/PasswordReset"

afterEach(cleanup)

describe("PasswordReset component", () => {
  let mockComponent: JSX.Element
  let sendPasswordResetEmail: any
  let emailInput: HTMLElement
  let submitButton: HTMLElement

  beforeAll(() => {
    sendPasswordResetEmail = jest.fn()
    mockComponent = (
      <FirebaseContext.Provider
        value={{ initialized: false, isAuthenticated: false, userId: "" }}
      >
        <PasswordReset />
      </FirebaseContext.Provider>
    )
    // @ts-ignore
    firebase.auth = () => ({
      sendPasswordResetEmail,
    })
  })
  it("If the email is not filled in, the submit button should be disabled", () => {
    const { getByTestId } = render(mockComponent)
    // @ts-ignore
    expect(getByTestId("reset-password")).toBeDisabled()
  })
  it("Button should not be disabled if the input contains value", () => {
    const { getByTestId } = render(mockComponent)
    emailInput = getByTestId("reset-password-email-input")
    fireEvent.change(emailInput, { target: { value: "test@test.com" } })
    // @ts-ignore
    expect(getByTestId("reset-password")).not.toBeDisabled()
  })
  it("Should call sendPasswordResetEmail on when email is filled in and button is clicked", async () => {
    const { getByTestId } = render(mockComponent)
    emailInput = getByTestId("reset-password-email-input")
    submitButton = getByTestId("reset-password")

    fireEvent.change(emailInput, { target: { value: "test@test.com" } })
    fireEvent.click(submitButton)

    await waitForElementToBeRemoved(() => getByTestId("reset-password-wrapper"))
    expect(sendPasswordResetEmail.mock.calls[0][0]).toBe("test@test.com")
  })
  it("If sendPasswordResetEmail throws an error, the message should be rendered on the screen", async () => {
    const mockErrorMessage = "test Error"
    // @ts-ignore
    firebase.auth = () => ({
      sendPasswordResetEmail: jest
        .fn()
        .mockRejectedValue(new Error(mockErrorMessage)),
    })
    const { getByTestId } = render(mockComponent)
    emailInput = getByTestId("reset-password-email-input")
    submitButton = getByTestId("reset-password")
    fireEvent.change(emailInput, { target: { value: "test@test.com" } })
    fireEvent.click(submitButton)

    const errorEl = await waitForElement(() =>
      getByTestId("password-reset-error")
    )

    expect(errorEl.textContent).toBe(mockErrorMessage)
  })
})
