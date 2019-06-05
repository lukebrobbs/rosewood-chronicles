// tslint:disable-next-line: no-implicit-dependencies
import { WindowLocation } from "@reach/router"
import { navigate } from "gatsby"
import React, { useContext } from "react"
import { FirebaseContext } from "../components/firebase/FirebaseProvider"

interface IPrivateRouteInterface {
  component: React.FunctionComponent
  location: WindowLocation
  path: string
}

const PrivateRoute = ({
  component: Component,
  location,
  path,
  ...rest
}: IPrivateRouteInterface) => {
  const { isAuthenticated, initialized } = useContext(FirebaseContext)
  if (!initialized) {
    return <p>Loading...</p>
  }
  if (!isAuthenticated && location.pathname !== `/signIn`) {
    // If the user is not logged in, redirect to the signin page.
    navigate(`/signIn`)
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute
