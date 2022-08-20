import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const Cards = () => {
  return (
    <>
      <Container>
        <Row>Titulo aqui</Row>
        <Row>
          <Col md={4} className="text-center">
            <Col>ICONE</Col>
            <Col>title</Col>
            <Col>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                quam consequatur porro necessitatibus obcaecati velit minima at
                sit quidem unde fuga, rem veniam vero, fugit distinctio minus
                laudantium eius ipsam.
              </p>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cards;
