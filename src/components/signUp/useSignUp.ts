import { navigate } from "gatsby"
import { useReducer } from "react"
import fireStoreMethods from "../../utils/fireStoreMethods"

interface ISignUp {
  email: string
  password: string
  passwordConfirm: string
  error: string
  subscribeForMail: any
  loading: any
}

export const signUpReducer = (
  state: ISignUp,
  action: { type: string; value?: string | any }
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
    case "SET_SUBSCRIBE_FOR_MAIL":
      return { ...state, subscribeForMail: !state.subscribeForMail }
    case "SET_LOADING":
      return { ...state, loading: !state.loading }
    default:
      throw new Error()
  }
}
const useSignUp = () => {
  const [signUp, dispatch] = useReducer(signUpReducer, {
    email: "",
    error: "",
    loading: false,
    password: "",
    passwordConfirm: "",
    subscribeForMail: false,
  })

  const handleSubscription = async () => {
    if (signUp.subscribeForMail) {
      // handle mail chimp sign up for mail
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (signUp.password === signUp.passwordConfirm) {
      dispatch({ type: "SET_LOADING" })
      try {
        await fireStoreMethods.createNewUser(signUp)
        await handleSubscription()
        dispatch({ type: "SET_LOADING" })
        navigate("/app/sortingQuiz")
      } catch (error) {
        dispatch({ type: "SET_ERROR", value: error.message })
      }
      dispatch({ type: "SET_LOADING" })
    } else {
      dispatch({ type: "SET_ERROR", value: "Passwords do not match" })
    }
  }

  return {
    email: {
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        dispatch({ type: "SET_EMAIL", value: e.target.value }),
      placeholder: "email",
      required: true,
      type: "email",
      value: signUp.email,
    },
    error: signUp.error,
    form: {
      onSubmit: handleSubmit,
    },
    loading: signUp.loading,
    password: {
      "data-testid": "password_input",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        dispatch({ type: "SET_PASSWORD", value: e.target.value }),
      placeholder: "password",
      required: true,
      type: "password",
      value: signUp.password,
    },
    passwordConfirm: {
      "data-testid": "password_confirm_input",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        dispatch({ type: "SET_PASSWORD_CONFIRM", value: e.target.value }),
      placeholder: "confirm",
      required: true,
      type: "password",
      value: signUp.passwordConfirm,
    },
    subscribeForMail: {
      checked: signUp.subscribeForMail,
      id: "subscribeForMail",
      onChange: () => dispatch({ type: "SET_SUBSCRIBE_FOR_MAIL" }),
      type: "checkbox",
    },
  }
}

export default useSignUp
