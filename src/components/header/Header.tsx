import firebase from "firebase"
import { navigate } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import { FirebaseContext } from "../firebase/FirebaseProvider"
import {
  HeaderComponent,
  HeaderItem,
  HeaderWrapper,
  SignOutButton,
} from "./headerStyles"

interface IProps {
  siteTitle: string
}

const Header = ({ siteTitle }: IProps) => {
  const handleSignOut = async () => {
    navigate("/")
    await firebase.auth().signOut()
  }

  const { userId } = useContext(FirebaseContext)
  return (
    <HeaderComponent>
      <HeaderWrapper>
        <HeaderItem to="/">{siteTitle}</HeaderItem>
        <HeaderItem to="/about">About the books</HeaderItem>
        <HeaderItem to="/students">Meet The Students</HeaderItem>
        {userId ? (
          <SignOutButton onClick={handleSignOut}>Sign Out</SignOutButton>
        ) : (
          <HeaderItem to="/signIn">Sign In</HeaderItem>
        )}
      </HeaderWrapper>
    </HeaderComponent>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
