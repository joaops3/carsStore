import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const Header: React.FC = () => {
  return (
    <>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#">icone</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">link1</Nav.Link>
              <Nav.Link href="#">link2</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#">Login</Nav.Link>
              <Nav.Link href="#">Cadastro</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
