import { signInReducer } from "../../../src/components/signIn/useSignIn"

describe("signInReducer", () => {
  let mockSignInState: any
  let reducer: CallableFunction

  beforeAll(() => {
    mockSignInState = {
      email: "",
      error: "",
      password: "",
    }
    reducer = (action: { type: string; value: string }) => {
      return signInReducer(mockSignInState, action)
    }
  })
  it("Should set the password if the action type is SET_PASSWORD", () => {
    const expected = reducer({
      type: "SET_PASSWORD",
      value: "test password",
    })
    expect(expected.password).toBe("test password")
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
