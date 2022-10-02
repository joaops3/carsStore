import React, { useEffect, useState, useContext } from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import Button from "../UI/buttons/ButtonHeader";
import { BiUserCircle } from "react-icons/bi";
import { BsFillBasketFill } from "react-icons/bs";
import Logo from "../../assets/logo/logo.svg";
import { Link } from "react-router-dom";
import {AuthContext} from "../../context/AuthProvider"
import {CartContext} from "../../context/CartProvider"

interface Props {
  fixed?: boolean
}

const Header: React.FC<Props> = ({fixed}) => {
  const {isLogged, logout, user} = useContext(AuthContext)
  const [colorHeader, setColorHeader] = useState<boolean>(false);
  const [headerClass, setHeaderClass] = useState<string>("header")
  const {quantity} = useContext(CartContext)

  const showHeader = () => {

    let top = window.innerHeight * 0.75

    if (window.scrollY
      > 400) {
      setColorHeader(true);
    }
    if (window.scrollY * 0.75
      < 400) {
      setColorHeader(false);
    }

  }

  

  useEffect(()=> {
    if(fixed){
      setHeaderClass("header-fixed")
    }
    return ()=> window.addEventListener("scroll", showHeader)
  },[])
  

  return (
    <>
      <header>
        {/* @ts-ignore */}
        <Navbar className={`${headerClass}${colorHeader ? "-active" : ""}`} fixed={`${fixed ? "top" : ""}`} expand="lg">
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
                  Vantagens
                </Nav.Link>
                <Nav.Link href="#action3" className={"links"}>
                  Produtos
                </Nav.Link>
                <Nav.Link href="#action4" className={"links"}>
                  Sobre
                </Nav.Link>
              </Nav>
              <Nav>
                {isLogged ? (
                  <>
                    <Nav.Link href="/cart" className="links position-relative">
                      <BsFillBasketFill size={30} className={""} />
                    {  quantity > 0 && (<div className="rounded-circle bg-danger d-flex justify-content-center align-items-center contador">{quantity}</div>)}
                    </Nav.Link>
                    <NavDropdown
                      className={"links"}
                      title={<BiUserCircle size={30} className="links" />}
                      id="navbarScrollingDropdown"
                    >
                        <NavDropdown.Item href={`/profile/${user.id}`}>
                          Perfil
                        </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                       <div onClick={() => {logout()}}> Logout</div>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
                ) : (
                  <>
                    <div className="header-user">
                      <Link to="/login" className="header-login">
                        LOGIN
                      </Link>
                      <Link to="/signin" className="header-cadastrar">
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
