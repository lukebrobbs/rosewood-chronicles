import { cleanup, fireEvent, render } from "@testing-library/react"
import React from "react"
import SignUp from "../../../src/components/signUp/SignUp"

afterEach(cleanup)

describe("SignUp Component", () => {
  it("Is passwords on the form do not match, an error should be shown to the user", () => {
    const signUp = <SignUp />
    const { getByTestId } = render(signUp)
    const password = getByTestId("password_input")
    const passwordConfirm = getByTestId("password_confirm_input")
    const submitButton = getByTestId("signUp_submit_button")

    fireEvent.change(password, { target: { value: "testPassword" } })
    fireEvent.change(passwordConfirm, {
      target: { value: "nonMatchingPassword" },
    })
    fireEvent.click(submitButton)
    expect(getByTestId("signUp_error_message")).toHaveTextContent(
      "Passwords do not match"
    )
  })
})
