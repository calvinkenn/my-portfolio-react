import React from "react";
import { NavLink } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./MainNavigation.css";

const MainNavigation = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="mx-3" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="p-1">
          <Nav.Item className="mx-3">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="mx-3">
            <Nav.Link as={NavLink} to="/projects">
              Projects
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="mx-3">
            <Nav.Link as={NavLink} to="/certificates">
              Certificates
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNavigation;
