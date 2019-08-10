import { Link } from "gatsby"
import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import Image from "./images/RosewoodLogo"

const NavComponent = () => {
  return (
    <>
      <Navbar
        expand="xl"
        bg="primary"
        variant="dark"
        id="navbar"
        collapseOnSelect={true}
      >
        <Navbar.Brand to="/" className="navbar__brand" as={Link}>
          <Image />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="navbar-toggler navbar-toggler-right ml-auto"
        />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto mr-5">
            <Nav.Link
              to="/preSorting"
              as={Link}
              className="mr-auto"
              eventKey="1"
            >
              SORTING QUIZ
            </Nav.Link>
            <Nav.Link to="/students" as={Link} className="mr-auto" eventKey="2">
              STUDENTS
            </Nav.Link>
            <Nav.Link to="/shop" as={Link} className="mr-auto" eventKey="3">
              SHOP
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
export default NavComponent
