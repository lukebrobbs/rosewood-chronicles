import { resetPasswordReducer } from "../../../src/components/passwordReset/usePasswordReset"

describe("resetPasswordReducer", () => {
  let mockSignInState: any
  let reducer: CallableFunction

  beforeAll(() => {
    mockSignInState = {
      email: "",
      emailSent: false,
      error: "",
    }
    reducer = (action: { type: string; value: string }) => {
      return resetPasswordReducer(mockSignInState, action)
    }
  })
  it("Should set the emailSent if the action type is SET_EMAIL_SENT", () => {
    const expected = reducer({
      type: "SET_EMAIL_SENT",
      value: true,
    })
    expect(expected.emailSent).toBe(true)
  })
  it("Should set the email if the action type is SET_EMAIL", () => {
    const expected = reducer({
      type: "SET_EMAIL",
      value: "test@test.com",
    })
    expect(expected.email).toBe("test@test.com")
  })
  it("Should set the error if the action type is SET_ERROR", () => {
    const expected = reducer({
      type: "SET_ERROR",
      value: "test error",
    })
    expect(expected.error).toBe("test error")
  })
})
