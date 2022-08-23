import React, { useEffect, useState } from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import Button from "../UI/buttons/ButtonHeader";
import { BiUserCircle } from "react-icons/bi";
import { BsFillBasketFill } from "react-icons/bs";
import Logo from "../assets/logo/logo.svg";
import { Link } from "react-router-dom";

interface Props {
  fixed?: boolean
}

const Header: React.FC<Props> = ({fixed}) => {
  const isLogged = false;
  const [colorHeader, setColorHeader] = useState<boolean>(false);


  const showHeader = () => {

    let top = window.innerHeight * 0.75

    if (window.scrollY
      > 400) {
      setColorHeader(true);
      console.log("ativo")
    }
    if (window.scrollY * 0.75
      < 400) {
      setColorHeader(false);
    }

  }

  

  useEffect(()=> {
   
    return ()=> window.addEventListener("scroll", showHeader)
  },[])
  

  return (
    <>
      <header>
        {/* @ts-ignore */}
        <Navbar className={`header${colorHeader ? "-active": ""} ${fixed ? "": "-bg"}`} fixed={`${fixed ? "top" : ""}`} expand="lg">
          <Container>
            <Navbar.Brand href="/">
              <img src={Logo} width="150px" alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse
              className={"justify-content-end"}
              id="navbarScroll"
            >
              <Nav
                className="nav-links me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link className={"links"} href="#action1">
                  Home
                </Nav.Link>
                <Nav.Link href="#action2" className={"links"}>
                  Link
                </Nav.Link>
                <Nav.Link href="#action2" className={"links"}>
                  Link
                </Nav.Link>
                <Nav.Link href="#action2" className={"links"}>
                  Link
                </Nav.Link>
              </Nav>
              <Nav>
                {isLogged ? (
                  <>
                    <Nav.Link href="#action2" className="links">
                      <BsFillBasketFill size={25} />
                    </Nav.Link>
                    <NavDropdown
                      className={"links"}
                      title={<BiUserCircle size={30} className="links" />}
                      id="navbarScrollingDropdown"
                    >
                      <NavDropdown.Item href="#action4">
                        Perfil
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
                ) : (
                  <>
                    <div className="header-user">
                      <Link to="/login" className="header-login">
                        LOGIN
                      </Link>
                      <Link to="/register" className="header-cadastrar">
                        CADASTRAR
                      </Link>
                    </div>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
