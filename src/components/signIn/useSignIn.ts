import firebase from "firebase"
import { navigate } from "gatsby"
import * as React from "react"
import { FirebaseContext } from "../firebase/FirebaseProvider"

interface ISignIn {
  email: string
  password: string
  error: string
}

export const signInReducer = (
  state: ISignIn,
  action: { type: string; value: string }
) => {
  switch (action.type) {
    case "SET_PASSWORD":
      return { ...state, password: action.value }
    case "SET_EMAIL":
      return { ...state, email: action.value }
    case "SET_ERROR":
      return { ...state, error: action.value }
    default:
      throw new Error()
  }
}

const useSignIn = () => {
  const { isAuthenticated } = React.useContext(FirebaseContext)
  const [signIn, dispatch] = React.useReducer(signInReducer, {
    email: "",
    error: "",
    password: "",
  })

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate("/app/home")
    }
  }, [])

  const handleSignIn = async () => {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(signIn.email, signIn.password)
      navigate("/app/home")
    } catch (error) {
      dispatch({ type: "SET_ERROR", value: error.message })
    }
  }

  return {
    email: {
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        dispatch({ type: "SET_EMAIL", value: e.target.value }),
      type: "email",
      value: signIn.email,
    },
    error: signIn.error,
    password: {
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        dispatch({ type: "SET_PASSWORD", value: e.target.value }),
      type: "password",
      value: signIn.password,
    },
    submit: {
      disabled: !signIn.email && !signIn.password,
      onClick: handleSignIn,
    },
  }
}

export default useSignIn
