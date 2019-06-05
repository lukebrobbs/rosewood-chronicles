import React from "react"
import useFirebase from "./useFirebase"

interface IFirebase {
  isAuthenticated: boolean
  userId: string
  initialized: boolean
}

const AUTH_DEFAULTS: IFirebase = {
  initialized: false,
  isAuthenticated: false,
  userId: "",
}

interface IProps {
  children: JSX.Element | JSX.Element[]
}
export const FirebaseContext = React.createContext(AUTH_DEFAULTS)

export const FirebaseProvider = ({ children }: IProps) => {
  const firebase = useFirebase()
  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  )
}
