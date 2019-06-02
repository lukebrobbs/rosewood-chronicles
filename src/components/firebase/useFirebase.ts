import firebase from "firebase"
import { useEffect, useState } from "react"

const useFirebase = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userId, setUserID] = useState("")

  const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
    if (user) {
      setUserID(user.uid)
    }
    setIsAuthenticated(!!user)
  })

  useEffect(() => {
    return () => {
      unregisterAuthObserver()
    }
  }, [])

  return {
    isAuthenticated,
    userId,
  }
}

export default useFirebase
