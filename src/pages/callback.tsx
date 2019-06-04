import { navigate } from "gatsby"
import React, { useContext, useEffect } from "react"
import { FirebaseContext } from "../components/firebase/FirebaseProvider"
import fireStoreMethods from "../utils/fireStoreMethods"

const Callback = () => {
  const { userId } = useContext(FirebaseContext)

  const queryFireStore = async () => {
    const fireStoreUser = await fireStoreMethods.getFireStoreUser(userId)
    if (fireStoreUser.exists) {
      navigate("/home")
    } else {
      await fireStoreMethods.setFireStoreUser(userId)
      await fireStoreMethods.sendEmailVerification()
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
