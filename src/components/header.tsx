import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderComponent = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`

const HeaderWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const HeaderItem = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 2rem;
`

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
