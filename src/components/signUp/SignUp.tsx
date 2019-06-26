import * as React from "react"
import useSignUp from "./useSignUp"

const SignUp = () => {
  const {
    email,
    password,
    passwordConfirm,
    form,
    subscribeForMail,
    error,
  } = useSignUp()
  return (
    <div>
      <h1>Sign Up</h1>
      <form {...form}>
        <input {...email} />
        <input {...password} />
        <input {...passwordConfirm} />
        <label htmlFor="subscribeForMail">Subscribe for mail</label>
        <input {...subscribeForMail} />
        <button data-testid="signUp_submit_button">SIGN UP</button>
        {error && <p data-testid="signUp_error_message">{error}</p>}
      </form>
    </div>
  )
}

export default SignUp
