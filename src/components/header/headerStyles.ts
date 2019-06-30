import { Link } from "gatsby"
import styled from "styled-components"

export const HeaderComponent = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`

export const HeaderWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

export const HeaderItem = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 2rem;
`

export const SignOutButton = styled.button`
  color: white;
  background: none;
  border: none;
  margin: 2em;
  cursor: pointer;
`
