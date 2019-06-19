import firebase from "firebase"
import * as React from "react"

interface IResetPassword {
  email: string
  emailSent: boolean
  error: string
}

export const resetPasswordReducer = (
  state: IResetPassword,
  action: { type: string; value: any }
) => {
  switch (action.type) {
    case "SET_EMAIL_SENT":
      return { ...state, emailSent: action.value }
    case "SET_EMAIL":
      return { ...state, email: action.value }
    case "SET_ERROR":
      return { ...state, error: action.value }
    default:
      throw new Error()
  }
}

const usePasswordReset = () => {
  const [{ email, error, emailSent }, dispatch] = React.useReducer(
    resetPasswordReducer,
    {
      email: "",
      emailSent: false,
      error: "",
    }
  )

  const handleReset = async () => {
    try {
      await firebase.auth().sendPasswordResetEmail(email)
      dispatch({ type: "SET_EMAIL_SENT", value: true })
    } catch (error) {
      dispatch({ type: "SET_ERROR", value: error.message })
    }
  }

  return {
    email: {
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        dispatch({ type: "SET_EMAIL", value: e.target.value }),
      type: "email",
      value: email,
    },
    emailSent,
    error,
    submit: {
      onClick: handleReset,
    },
  }
}

export default usePasswordReset
