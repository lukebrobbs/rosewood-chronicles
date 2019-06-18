import * as Gatsby from "gatsby"
import * as React from "react"
import { cleanup, render } from "react-testing-library"
import { FirebaseContext } from "../../src/components/firebase/FirebaseProvider"
import SignIn from "../../src/components/SignIn"

afterEach(cleanup)

describe("SignIn component", () => {
  it("When the user is already signed in, should redirect to the logged in home page", () => {
    // @ts-ignore
    Gatsby.navigate = jest.fn()
    const mockComponent = (
      <FirebaseContext.Provider
        value={{ initialized: false, isAuthenticated: true, userId: "" }}
      >
        <SignIn />
      </FirebaseContext.Provider>
    )
    render(mockComponent)
    // @ts-ignore
    expect(Gatsby.navigate.mock.calls[0][0]).toBe("/app/home")
  })
})
