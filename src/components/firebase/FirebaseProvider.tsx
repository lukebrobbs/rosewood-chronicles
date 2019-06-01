import React from "react"
import useAuth from "./useFirebase"

interface IFirebase {
  isAuthenticated: boolean
}

const AUTH_DEFAULTS: IFirebase = { isAuthenticated: false }

interface IProps {
  children: JSX.Element | JSX.Element[]
}
export const FirebaseContext = React.createContext(AUTH_DEFAULTS)

export const FirebaseProvider = ({ children }: IProps) => {
  const auth = useAuth()
  return (
    <FirebaseContext.Provider value={auth}>{children}</FirebaseContext.Provider>
  )
}
