import firebase from "firebase"
import { useCallback, useEffect, useState } from "react"

export const handleOnAuthStateChange = (
  user: firebase.User | null,
  setUserId: React.Dispatch<React.SetStateAction<string>>,
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (user) {
    setUserId(user.uid)
  }
  setIsAuthenticated(!!user)
}

const useFirebase = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userId, setUserID] = useState("")

  const unregisterAuthObserver = useCallback(
    firebase
      .auth()
      .onAuthStateChanged(user =>
        handleOnAuthStateChange(user, setUserID, setIsAuthenticated)
      ),
    []
  )

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
