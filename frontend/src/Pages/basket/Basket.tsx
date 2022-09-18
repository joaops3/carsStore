import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
import BasketItem from "./BasketItem";
import { addMoneyRealMask } from "../../helpers/helpers";
import CarsService from "../../services/CarsService";
import { CarsInterface } from "../../interfaces/interfaces";

interface DataInterface {
  cars: CarsInterface[]
}

const Basket = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState<any>(true);
  const [data, setData] = useState<DataInterface>();
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem("basket") || ""))
  const [total, setTotal] = useState<number>(0)

  let filteredList =  useMemo(() => {
    return data?.cars.filter((item: CarsInterface)=> {
      if(basket){
        if(basket.includes(`${item.id}`)){
          setTotal((previous) => {return previous + item.price})
          return item
        }
      }else{
        return null
      }
    })
  }, [data])

 


  const getData = useCallback(() => {
    CarsService()
      .getAllCars()
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const deleteBasket = (e: number) => {
 
    let list = basket
   
   list.slice(list.indexOf(`${e}`))
   
   localStorage.setItem("basket", list)
  }

  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <>
      {console.log("data here", data)}
      {console.log("filtro", total)}
      <Header fixed={false} />
      <Container className="">
        <Row className="products ">
          <Col md={7} className="mt-5 mx-3 bg-login">
            <Row>
              <h2>Seus Produtos: </h2>
            </Row>
            {filteredList &&
             
            filteredList?.map((item: CarsInterface, key: number) => {return (
                
                  <BasketItem
                  key={key}
                  id={item.id}
                    name_car={item.name_car}
                    Carimgs={item.Carimgs}
                    price={item.price}
                    model={item.model}
                    year={item.year}
                    deleteBasket={deleteBasket}
                  ></BasketItem>
                )
                })}
          </Col>
          <Col md={4} className="mt-5">
            <Row>
              <h2>Comprar agora</h2>
            </Row>
            <Row>
              <Col sm={12} className={"table"}>
               
               
              </Col>
            </Row>
            <Row className="my-3">
                  <Col md={8}>
                    <div>FRETE:</div>
                  </Col>
                  <Col md={4}>
                    <div style={{ color: "green" }}>GRATIS!!</div>
                  </Col>
                </Row>
            <Row className="my-3">
              <Col md={8}>
                <div>TOTAL:</div>
              </Col>
              <Col md={4}>
                <div style={{ color: "green" }}>{addMoneyRealMask(total)}</div>
              </Col>
            </Row>

            <Row>
              <Button
                bsPrefix="custom-class"
                className="btn-buy"
                onClick={() => {
                  setShow(true)
                }}
              >
                {" "}
                FINALIZAR
              </Button>
            </Row>
          </Col>
        </Row>
        <Modal show={show} onHide={() => setShow(false)}>
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
            <Button variant="secondary" onClick={() =>{setShow(false)}}>
              Cancelar
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default Basket;
