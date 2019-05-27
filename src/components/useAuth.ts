import auth0, { Auth0DecodedHash } from "auth0-js"
import { useState } from "react"

export interface IAuth {
  login: () => void
  isAuthenticated: () => boolean
  authenticate: () => void
  logout: () => void
}

const useAuth = (): IAuth => {
  const [expiresAt, setExpiresAt] = useState(0)

  const Auth0 = new auth0.WebAuth({
    clientID: process.env.CLIENT_ID || "",
    domain: process.env.AUTH_DOMAIN || "",
    redirectUri: process.env.AUTH_REDIRECT_URI,
    responseType: "token id_token",
    scope: "openid profile",
  })

  const handleAuthentication = () => {
    Auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        setSession(authResult)
        // Auth0.client.userInfo(authResult.accessToken, (err, info) => {
        //   console.log(info)
        // })
      }
      if (err) {
        throw new Error(err.error)
      }
    })
  }

  const setSession = (authResult: Auth0DecodedHash) => {
    if (authResult.expiresIn) {
      const expires = authResult.expiresIn * 1000 + new Date().getTime()
      setExpiresAt(expires)
    }
  }

  // const renewSession = () => {
  //   Auth0.checkSession({}, (err, authResult) => {
  //     if (authResult && authResult.accessToken && authResult.idToken) {
  //       setSession(authResult)
  //     } else if (err) {
  //       logout()

  //       alert(
  //         `Could not get a new token (${err.error}: ${err.error_description}).`
  //       )
  //     }
  //   })
  // }

  const logout = () => {
    Auth0.logout({
      returnTo: window.location.origin,
    })
  }

  const isAuthenticated = () => {
    return new Date().getTime() < expiresAt
  }

  return {
    authenticate: () => handleAuthentication(),
    isAuthenticated: () => isAuthenticated(),
    login: () => Auth0.authorize(),
    logout: () => logout(),
  }
}

export default useAuth
