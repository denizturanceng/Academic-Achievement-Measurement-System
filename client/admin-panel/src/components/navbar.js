//import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigation = () => {
  return (
    <Navbar bg="primary" expand="lg" className="position-fixed top-0 w-100">
      <Navbar.Brand href="#home" className="p-3">Your Brand</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#Home">Home</Nav.Link>
          <NavDropdown title="Product Management" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Add Product</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#sales-data">Sales Data</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;

