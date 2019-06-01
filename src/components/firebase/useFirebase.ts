import firebase from "firebase"
import { useCallback, useEffect, useState } from "react"

const useFirebase = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const unregisterAuthObserver = useCallback(
    firebase.auth().onAuthStateChanged(user => setIsAuthenticated(!!user)),
    []
  )

  useEffect(() => {
    return () => {
      unregisterAuthObserver()
    }
  }, [])

  return {
    isAuthenticated,
  }
}

export default useFirebase
