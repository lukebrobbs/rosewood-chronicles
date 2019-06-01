import firebase from "firebase"
import React from "react"
// tslint:disable-next-line: no-submodule-imports
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { uiConfig } from "../utils/firebaseConfig"

const SignIn = () => {
  return (
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  )
}

export default SignIn
