import firebase from "firebase"
import { navigate } from "gatsby"

export const uiConfig: firebaseui.auth.Config = {
  // Popup signin flow rather than redirect flow.
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: (user: any) => {
      const db = firebase.firestore()
      //   const fireStoreUser = await db
      //     .collection("users")
      //     .doc(user.user.uid)
      //     .get()
      //   if (fireStoreUser.exists) {
      //     navigate("/")
      //   }
      navigate("/sortingQuiz")
      return false
    },
  },
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    {
      // Required to enable this provider in one-tap sign-up.
      authMethod: "https://accounts.google.com",
      // Required to enable ID token credentials for this provider.
      // This can be obtained from the Credentials page of the Google APIs
      // console.
      clientId: process.env.FIREBASE_GOOGLE_CLIENT_ID,
      // Google provider must be enabled in Firebase Console to support one-tap
      // sign-up.
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    },
    firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
}
