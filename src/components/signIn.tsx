import firebase from "firebase"
import { Link, navigate } from "gatsby"
import * as React from "react"
import { FirebaseContext } from "./firebase/FirebaseProvider"

const SignIn = () => {
  const { isAuthenticated } = React.useContext(FirebaseContext)
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate("/app/home")
    }
  }, [])

  const handleSignIn = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div>
      <h1> Sign In</h1>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
      {error && <p>{error}</p>}
      <Link to="/signUp">Sign up here</Link>
    </div>
    // <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  )
}

export default SignIn
