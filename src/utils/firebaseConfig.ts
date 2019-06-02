import firebase from "firebase"

export const uiConfig: firebaseui.auth.Config = {
  signInFlow: "popup",
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
  signInSuccessUrl: "/callback",
}
