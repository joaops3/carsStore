import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { formatDate } from "../../../helpers/helpers";

const UserData = () => {
  return (
    <>
      <h1 className="text-center">Dados do usuario</h1>
      <Row className="my-4 d-flex justify-content-end">
        <Col sm={3}>
          <Link to="/profile/edit" className="header-cadastrar">
            Editar Dados
          </Link>
        </Col>
      </Row>
      <Container fluid className=" bg-login py-2 px-4">
        <Row className={"mt-2"}>
          <Col md={4} className={"mt-3 data-container"}>
            <div className="data-title">
              Name:
              <span className="data-text">Napoleão</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4} className={"mt-3  data-container"}>
            <div className="data-title">
              Email:
              <span className="data-text">email@dsdsd</span>
            </div>
          </Col>
        </Row>
        <Row className={"mt-2"}>
          <Col md={4} className={"my-3 data-container"}>
            <div className="data-title">
              {" "}
              Nascimento:{" "}
              <span className="data-text">
                {formatDate(new Date(), "dd/mm/yyyy")}{" "}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserData;
