import * as React from "react"
import usePasswordReset from "./usePasswordReset"

const PasswordReset = () => {
  const passwordReset = usePasswordReset()

  if (passwordReset.emailSent) {
    return <p data-testid="email-sent">Email sent</p>
  }

  return (
    <div data-testid="reset-password-wrapper">
      <h1>Forgot password</h1>
      <input
        {...passwordReset.email}
        data-testid="reset-password-email-input"
      />
      {passwordReset.error && (
        <p data-testid="password-reset-error">{passwordReset.error}</p>
      )}
      <button {...passwordReset.submit} data-testid="reset-password">
        Reset Password
      </button>
    </div>
  )
}

export default PasswordReset
