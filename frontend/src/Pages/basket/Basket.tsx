import React from 'react'
import {Container, Row, Col, Button} from "react-bootstrap"
import Header from "../../components/header/Header"
import {Link} from "react-router-dom"
import BasketItem from "./BasketItem"

const Basket = () => {
  return (
    <>
    <Header fixed={false}/>
   <Container className="">
   <Row className="products ">
   <Col md={7} className="mt-5 mx-3 bg-login">
    <Row><h2>Seus Produtos: </h2></Row>
   <BasketItem name_car={""} Carimgs={[]} price={20} model={""} year={20}></BasketItem>
    </Col>
    <Col md={4} className="mt-5">
    <Row><h2>Comprar agora</h2></Row>
     <Row className={"table"}>
        <Col md={8}><div>nome produto</div></Col>
        <Col md={4}><div>preço</div></Col>

    </Row>
    <Row>
        
        <Button> Finalizar</Button>
        
    </Row>
    </Col>
   </Row>
   </Container>
    </>
  )
}

export default Basket