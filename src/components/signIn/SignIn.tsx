import { Link } from "gatsby"
import * as React from "react"
import useSignIn from "./useSignIn"

const SignIn = () => {
  const signIn = useSignIn()

  return (
    <div>
      <h1> Sign In</h1>
      <input {...signIn.email} />
      <input {...signIn.password} />
      <Link to="/passwordReset">Forgot Password?</Link>
      <button {...signIn.submit}>Sign In</button>
      {signIn.error && <p>{signIn.error}</p>}
      <Link to="/signUp">Sign up here</Link>
    </div>
  )
}

export default SignIn
