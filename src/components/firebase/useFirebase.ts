import firebase from "firebase"
import { useCallback, useEffect, useState } from "react"

export const handleOnAuthStateChange = (
  user: firebase.User | null,
  setUserId: React.Dispatch<React.SetStateAction<string>>,
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>,
  setInitialized: React.Dispatch<React.SetStateAction<boolean>>,
  initialized: boolean
) => {
  if (user) {
    setUserId(user.uid)
  }
  setIsAuthenticated(!!user)
  if (!initialized) {
    setInitialized(true)
  }
}

const useFirebase = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userId, setUserID] = useState("")
  const [initialized, setInitilized] = useState(false)

  const unregisterAuthObserver = useCallback(
    firebase
      .auth()
      .onAuthStateChanged(user =>
        handleOnAuthStateChange(
          user,
          setUserID,
          setIsAuthenticated,
          setInitilized,
          initialized
        )
      ),
    []
  )

  useEffect(() => {
    return () => {
      unregisterAuthObserver()
    }
  }, [])

  return {
    initialized,
    isAuthenticated,
    userId,
  }
}

export default useFirebase
