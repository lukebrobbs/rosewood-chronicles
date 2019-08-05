const React = require("react")
const firebase = require("firebase")
const {
  FirebaseProvider,
} = require("./src/components/firebase/FirebaseProvider")
const { Helmet } = require("react-helmet")
const { Layout } = require("./src/components/layout/layout")

exports.wrapRootElement = ({ element }) => {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
  }

  firebase.initializeApp(firebaseConfig)
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
      </Helmet>
      <FirebaseProvider>{element}</FirebaseProvider>
    </>
  )
}

exports.wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>
}
