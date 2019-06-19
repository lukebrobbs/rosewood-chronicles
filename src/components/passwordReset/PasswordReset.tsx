import React from "react"
import usePasswordReset from "./usePasswordReset"

const ForgotPassword = () => {
  const passwordReset = usePasswordReset()

  if (passwordReset.emailSent) {
    return <p>Email sent</p>
  }

  return (
    <>
      <h1>Forgot password</h1>
      <input {...passwordReset.email} />
      {passwordReset.error && <p>{passwordReset.error}</p>}
      <button {...passwordReset.submit}>Send Verification</button>
    </>
  )
}

export default ForgotPassword
