import { Link } from "gatsby"
import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import Image from "./images/RosewoodLogo"

const NavComponent = () => {
  return (
    <>
      <Navbar expand="xl" bg="primary" variant="dark" id="navbar">
        <Navbar.Brand to="/" className="navbar__brand" as={Link}>
          <Image />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="navbar-toggler navbar-toggler-right ml-auto"
        />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              to="/preSorting"
              as={Link}
              className="mr-auto"
              id="navbar__link"
            >
              Sorting Quiz
            </Nav.Link>
            <Nav.Link
              to="/students"
              as={Link}
              className="mr-auto"
              id="navbar__link"
            >
              Students
            </Nav.Link>
            <Nav.Link to="/shop" as={Link} className="mr-auto">
              Shop
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
export default NavComponent
