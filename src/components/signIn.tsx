import firebase from "firebase"
import React, { useState } from "react"

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const handleSignIn = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <>
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
    </>
    // <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  )
}

export default SignIn
