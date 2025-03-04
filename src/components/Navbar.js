import React from "react";
import { Navbar, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Data Visualization Dashboard</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
