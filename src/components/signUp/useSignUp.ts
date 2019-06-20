import { useReducer } from "react"

interface ISignUp {
  email: string
  password: string
  passwordConfirm: string
  error: string
}

export const signUpReducer = (
  state: ISignUp,
  action: { type: string; value: string }
) => {
  switch (action.type) {
    case "SET_PASSWORD":
      return { ...state, password: action.value }
    case "SET_PASSWORD_CONFIRM":
      return { ...state, passwordConfirm: action.value }
    case "SET_EMAIL":
      return { ...state, email: action.value }
    case "SET_ERROR":
      return { ...state, error: action.value }
    default:
      throw new Error()
  }
}
const useSignUp = () => {
  const [signUp, dispatch] = useReducer(signUpReducer, {
    email: "",
    error: "",
    password: "",
    passwordConfirm: "",
  })

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (signUp.password === signUp.passwordConfirm) {
      return
    }
  }

  return {
    email: {
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        dispatch({ type: "SET_EMAIL", value: e.target.value }),
      required: true,
      type: "email",
      value: signUp.email,
    },
    error: signUp.error,
    form: {
      onSubmit: handleSubmit,
    },
    password: {
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        dispatch({ type: "SET_PASSWORD", value: e.target.value }),
      required: true,
      type: "password",
      value: signUp.password,
    },
    passwordConfirm: {
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        dispatch({ type: "SET_PASSWORD_CONFIRM", value: e.target.value }),
      required: true,
      type: "password",
      value: signUp.passwordConfirm,
    },
  }
}

export default useSignUp
