import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
import BasketItem from "./BasketItem";
import { addMoneyRealMask } from "../../helpers/helpers";

const Basket = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState<any>(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Header fixed={false} />
      <Container className="">
        <Row className="products ">
          <Col md={7} className="mt-5 mx-3 bg-login">
            <Row>
              <h2>Seus Produtos: </h2>
            </Row>
            <BasketItem
              name_car={""}
              Carimgs={[]}
              price={20}
              model={""}
              year={20}
            ></BasketItem>
          </Col>
          <Col md={4} className="mt-5">
            <Row>
              <h2>Comprar agora</h2>
            </Row>
            <Row>
              <Col sm={12} className={"table"}>
                <Row>
                  {" "}
                  <Col md={8}>
                    <div>nome produto</div>
                  </Col>
                  <Col md={4}>
                    <div>preço</div>
                  </Col>
                </Row>
                <Row>
                  <Col md={8}>
                    <div>FRETE:</div>
                  </Col>
                  <Col md={4}>
                    <div style={{ color: "green" }}>GRATIS!!</div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="my-3">
              <Col md={8}>
                <div>TOTAL:</div>
              </Col>
              <Col md={4}>
                <div style={{ color: "green" }}>{addMoneyRealMask(1000)}</div>
              </Col>
            </Row>

            <Row>
              <Button
                bsPrefix="custom-class"
                className="btn-buy"
                onClick={() => {
                  handleShow();
                }}
              >
                {" "}
                FINALIZAR
              </Button>
            </Row>
          </Col>
        </Row>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Finalizar Pedido</Modal.Title>
          </Modal.Header>
          {user ? (
            <Modal.Body>
              <Row>
                <h6>Cartões cartão</h6>
                <Row>
                  <div>Cartões Disponiveis</div>
                </Row>
              </Row>
              <Row>
                <Link
                  className={"btn btn-sucess mt-5"}
                  to={"/profile/registerCard"}
                >
                  Finalizar pedido
                </Link>
              </Row>
            </Modal.Body>
          ) : (
            <Modal.Body>
              <Row>
                <h6>
                  Você não tem nenhum cartão cadastrado, adicione um cartão para
                  prosseguir.
                </h6>
              </Row>
              <Row>
                <Link
                  className={"btn btn-warning mt-5"}
                  to={"/profile/registerCard"}
                >
                  Adicionar Cartão
                </Link>
              </Row>
            </Modal.Body>
          )}
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default Basket;
