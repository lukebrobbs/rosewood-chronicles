import PropTypes from "prop-types"
import React from "react"

import { HeaderComponent, HeaderItem, HeaderWrapper } from "./headerStyles"

interface IProps {
  siteTitle: string
}

const Header = ({ siteTitle }: IProps) => (
  <HeaderComponent>
    <HeaderWrapper>
      <HeaderItem to="/">{siteTitle}</HeaderItem>
      <HeaderItem to="/about">About the books</HeaderItem>
      <HeaderItem to="/students">Meet The Students</HeaderItem>
      <HeaderItem to="/signIn">Sign In</HeaderItem>
    </HeaderWrapper>
  </HeaderComponent>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
