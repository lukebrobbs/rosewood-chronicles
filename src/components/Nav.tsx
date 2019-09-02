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
        sticky="top"
      >
        <Navbar.Brand to="/" className="navbar__brand" as={Link}>
          <Image />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="navbar-toggler navbar-toggler-right ml-auto mr-3"
        />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link to="/home" as={Link} className="mx-auto" eventKey={2}>
              HOME
            </Nav.Link>
            <Nav.Link
              to="/sorting-quiz/pre-sorting"
              as={Link}
              className="mx-auto"
              eventKey={1}
            >
              SORTING QUIZ
            </Nav.Link>
            <Nav.Link
              href="https://www.shopify.com"
              target="_blank"
              className="mx-auto"
              eventKey={3}
              as="a"
            >
              MERCHANDISE
            </Nav.Link>
            <Nav.Link
              href="https://www.penguin.co.uk/series/roschron/the-rosewood-chronicles.html"
              target="_blank"
              className="mx-auto"
              eventKey={3}
              as="a"
            >
              BOOKS
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
export default NavComponent
