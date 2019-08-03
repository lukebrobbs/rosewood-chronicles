import { Link } from "gatsby"
import React from "react"
import useSignIn from "./useSignIn"

const SignIn = () => {
  const signIn = useSignIn()

  return (
    <div>
      <h1> Sign In</h1>
      <input {...signIn.email} data-testid="sign-in-email-input" />
      <input {...signIn.password} data-testid="sign-in-password-input" />
      <Link to="/passwordReset">Forgot Password?</Link>
      <button {...signIn.submit} data-testid="sign-in-button">
        Sign In
      </button>
      {signIn.error && <p data-testid="sign-in-error">{signIn.error}</p>}
      <Link to="/signUp">Sign up here</Link>
    </div>
  )
}

export default SignIn
