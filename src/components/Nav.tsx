import React, { useState } from "react"
import { Nav, Navbar } from "react-bootstrap"
import Image from "./images/RosewoodLogo"
import { Link } from "gatsby"

export const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <>
      <Navbar
        expand="xl"
        bg="primary"
        variant="dark"
        id="navbar"
        expanded={isExpanded}
        onSelect={() => setIsExpanded(false)}
        onToggle={expanded => setIsExpanded(expanded)}
      >
        <Navbar.Brand
          to="/"
          className="navbar__brand"
          as={Link}
          id="rosewood-logo"
        >
          <Image />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="custom-toggler navbar-toggler navbar-toggler-right  "
          style={{ marginRight: "11%", marginLeft: "auto" }}
        />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link
              to="sorting-quiz"
              as={Link}
              className="mx-auto"
              eventKey={1}
            >
              SORTING QUIZ
            </Nav.Link>
            <Nav.Link to="yearbook" as={Link} className="mx-auto" eventKey={2}>
              YEARBOOK
            </Nav.Link>
          </Nav>
          <Nav className="mx-auto">
            <Nav.Link
              href="https://shop.therosewoodchronicles.co.uk/"
              target="_blank"
              className="mx-auto"
              eventKey={4}
              as="a"
            >
              SHOP
            </Nav.Link>
            <Nav.Link
              href="https://www.penguin.co.uk/series/roschron/the-rosewood-chronicles.html"
              target="_blank"
              className="mx-auto"
              eventKey={5}
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
