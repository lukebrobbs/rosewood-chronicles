import * as React from "react"
import useSignUp from "./useSignUp"

const SignUp = () => {
  const { email, password, passwordConfirm, form } = useSignUp()
  return (
    <div>
      <h1>Sign Up</h1>
      <form {...form}>
        <input {...email} />
        <input {...password} />
        <input {...passwordConfirm} />
        <input type="checkbox" />
        <button>SIGN UP</button>
      </form>
    </div>
  )
}

export default SignUp
