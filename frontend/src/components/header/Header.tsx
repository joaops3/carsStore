import React, { useEffect, useState, useContext } from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import Button from "../UI/buttons/ButtonHeader";
import { BiUserCircle } from "react-icons/bi";
import { BsFillBasketFill } from "react-icons/bs";
import Logo from "../../assets/logo/logo.svg";
import { Link } from "react-router-dom";
import {AuthContext} from "../../context/AuthProvider"
import {CartContext} from "../../context/CartProvider"
import {getToken} from "../../api/auth"


interface Props {
  fixed?: boolean
}

const Header: React.FC<Props> = ({fixed}) => {
  const {isLogged, logout, user} = useContext(AuthContext)
  const [colorHeader, setColorHeader] = useState<boolean>(false);
  const [headerClass, setHeaderClass] = useState<string>("header")
  const {quantity} = useContext(CartContext)
  const [userid, setUserId] = useState(getToken)

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
    window.addEventListener("scroll", showHeader);
    return ()=> {window.removeEventListener("scroll",showHeader)}
  },[userid])
  

  return (
    <>
      <header>
        <Navbar className={`${headerClass}${colorHeader ? "-active" : ""}`} fixed={fixed ? "top" : undefined} expand="lg">
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
              <Nav.Link href={`/cart/`} className="links position-relative">
                      <BsFillBasketFill size={30} className={""} />
                    {  quantity > 0 && (<div className="rounded-circle bg-danger d-flex justify-content-center align-items-center contador">{quantity}</div>)}
                    </Nav.Link>
                {isLogged ? (
                  <>
                   
                    <NavDropdown
                      className={"links"}
                      title={<BiUserCircle size={30} className="links" />}
                      id="navbarScrollingDropdown"
                    >
                        <NavDropdown.Item >
                        <Link to={`/profile/${userid.id}/`} >
                          Perfil
                        </Link>
                        </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                       <div onClick={() => {logout()}}> Logout</div>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
                ) : (
                  <>
                    
                      <Link to="/login" className="header-login ml-15">
                        LOGIN
                      </Link>
                      <Link to="/signin" className="header-cadastrar">
                        CADASTRAR
                      </Link>
                
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
