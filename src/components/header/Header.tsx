import PropTypes from "prop-types"
import React, { useContext } from "react"

import { FirebaseContext } from "../firebase/FirebaseProvider"
import { HeaderComponent, HeaderItem, HeaderWrapper } from "./headerStyles"

interface IProps {
  siteTitle: string
}

const Header = ({ siteTitle }: IProps) => {
  const { userId } = useContext(FirebaseContext)
  return (
    <HeaderComponent>
      <HeaderWrapper>
        <HeaderItem to="/">{siteTitle}</HeaderItem>
        <HeaderItem to="/about">About the books</HeaderItem>
        <HeaderItem to="/students">Meet The Students</HeaderItem>
        {userId ? (
          <HeaderItem to="/signIn">Sign Out</HeaderItem>
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
