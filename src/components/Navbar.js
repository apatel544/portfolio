import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";

const NavBar = () => {
  return (
    <Navbar className="navbar">
      <Navbar.Brand as={Link} to="/">Ankur Patel</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto, activeKey={(this.state.activeKey)} 
onSelect={e => {e.preventDefault(); this.handleSelect(e);} ">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          {/* <Nav.Link as={Link} to="/about">About</Nav.Link> */}
          <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
          <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
          {/* <Nav.Link as={Link} to="/contact">Contact</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar >
  );
};

export default NavBar;
