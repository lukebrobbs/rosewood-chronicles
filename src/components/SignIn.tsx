import firebase from "firebase"
import { Link, navigate } from "gatsby"
import * as React from "react"
import { FirebaseContext } from "./firebase/FirebaseProvider"

interface ISignIn {
  email: string
  password: string
  error: string
}

const signInReducer = (
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

const SignIn = () => {
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
    } catch (error) {
      dispatch({ type: "SET_ERROR", value: error.message })
    }
  }

  return (
    <div>
      <h1> Sign In</h1>
      <input
        type="email"
        value={signIn.email}
        onChange={e => dispatch({ type: "SET_EMAIL", value: e.target.value })}
      />
      <input
        type="password"
        value={signIn.password}
        onChange={e =>
          dispatch({ type: "SET_PASSWORD", value: e.target.value })
        }
      />
      <button onClick={handleSignIn}>Sign In</button>
      {signIn.error && <p>{signIn.error}</p>}
      <Link to="/signUp">Sign up here</Link>
    </div>
    // <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  )
}

export default SignIn
