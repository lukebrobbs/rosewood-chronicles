import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import Image from "./images/RosewoodLogo"
import { Link } from "./Scroll"

const NavComponent = () => {
  return (
    <>
      <Navbar
        expand="xl"
        bg="primary"
        variant="dark"
        id="navbar"
        collapseOnSelect={true}
        sticky="top"
      >
        <Navbar.Brand to="title-page" className="navbar__brand" as={Link}>
          <Image />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="navbar-toggler navbar-toggler-right ml-auto mr-3"
        />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              to="pre-sorting"
              as={Link}
              block="start"
              className="mx-auto"
              eventKey={1}
            >
              SORTING QUIZ
            </Nav.Link>
            <Nav.Link to="shop" as={Link} className="mx-auto" eventKey={2}>
              SHOP
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
export default NavComponent
