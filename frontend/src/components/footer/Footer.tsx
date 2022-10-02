import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import Logo from "../../assets/logo/logo.svg"
import {Link} from "react-router-dom"
const Footer = () => {
  return (
    <footer>
      <Container className={"text-center p-3 mt-5"}>
        <Row className={"p-4 pb-5"}>
          <Col md={4}>

            <h4> Mais Informações</h4>
          <Row>
            <Col md={12}><a href="#">Information</a></Col>
            <Col md={12}><a href="#">Information</a></Col>
            <Col md={12}><a href="#">Information</a></Col>
          </Row>
          </Col>
          <Col md={4}> <h4>Ultimas Noticias</h4>
          <Row>
            <Col md={12}><a href="#">news</a></Col>
            <Col md={12}><a href="#">news</a></Col>
            <Col md={12}><a href="#">news</a></Col>
          </Row></Col>
          <Col md={4}> <h4>Sobre Nós</h4>
          <Row>
            <Col md={12}><a href="#">sobre nos</a></Col>
            <Col md={12}><a href="#">sobre nos</a></Col>
            <Col md={12}><a href="#">sobre nos</a></Col>
          </Row>
          </Col>
        </Row>
        <Row className="p-4 line">
          <Col md={8} className="p-2"><img src={Logo} alt=""/></Col>
          <Col md={4} className=" p-2">
           <a href="https://www.linkedin.com/in/joaopedrosilva3/" className="mx-1 socials"><BsLinkedin size={25}></BsLinkedin></a>
            <a href="https://github.com/joaops3" className="mx-1 socials"> <AiFillInstagram size={25}></AiFillInstagram></a>
            <a href="https://github.com/joaops3" className="mx-1 socials"> <BsGithub size={25}></BsGithub></a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
