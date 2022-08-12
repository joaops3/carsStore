import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

function HeaderProfile() {
  return (
    <>
      <Navbar bg="dark">
        <Container>
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
            <Nav className="">
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">
                  Configuracoes
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderProfile;
