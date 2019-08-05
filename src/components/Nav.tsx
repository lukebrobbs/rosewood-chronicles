import { Link } from "gatsby"
import React from "react"
import { Nav, Navbar } from "react-bootstrap"

const NavComponent = () => {
  return (
    <Navbar expand="xl" bg="primary" variant="dark">
      <Navbar.Brand to="/" as={Link}>
        Rosewood Chronicles
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link to="/about" as={Link}>
            About the books
          </Nav.Link>
          <Nav.Link to="/students" as={Link}>
            Meet The Students
          </Nav.Link>
          <Nav.Link to="/preSorting" as={Link}>
            Sorting Quiz
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default NavComponent
