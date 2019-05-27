import React, { MouseEvent } from "react"
import useAuth from "./useAuth"

interface IAuth {
  login?: (
    event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void | CallableFunction
  authenticate?: () => void
  isAuthenticated: () => boolean
}

const AUTH_DEFAULTS: IAuth = { isAuthenticated: () => false }

interface IProps {
  children: JSX.Element | JSX.Element[]
}
export const AuthContext = React.createContext(AUTH_DEFAULTS)

export const AuthProvider = ({ children }: IProps) => {
  const auth = useAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}
