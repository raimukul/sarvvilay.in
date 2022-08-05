import React from "react";
import "./Header.css";
import logo from "../images/logo.jpg";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="md" variant="light" className="headerbg">
        <Navbar.Brand href="/">
          <img
            alt="Nityamukt Logo"
            src={logo}
            width="200"
            height="65"
            className="d-inline-block align-top logobg"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link as={Link} to="/" className="h5 ext3" eventKey="2">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="h5 ext3" eventKey="2">
              About us
            </Nav.Link>
            <Nav.Link as={Link} to="/donate" className="h5 ext3" eventKey="2">
              Donation
            </Nav.Link>
           
            <Nav.Link as={Link} to="/contact" className="h5 ext3" eventKey="2">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
