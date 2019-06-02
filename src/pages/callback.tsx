import firebase from "firebase"
import { navigate } from "gatsby"
import React, { useContext, useEffect } from "react"
import { FirebaseContext } from "../components/firebase/FirebaseProvider"

const Callback = () => {
  const { userId } = useContext(FirebaseContext)

  const queryFireStore = async () => {
    const db = firebase.firestore()
    const userDoc = db.collection("users").doc(userId)

    const fireStoreUser = await userDoc.get()
    if (fireStoreUser.exists) {
      navigate("/home")
    } else {
      await userDoc.set({})
      navigate("/sortingQuiz")
    }
  }

  useEffect(() => {
    if (userId) {
      queryFireStore()
    }
  }, [userId])

  return <p>Loading...</p>
}

export default Callback
