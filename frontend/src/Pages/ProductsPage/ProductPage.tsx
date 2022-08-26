import React from 'react'
import CarouselMinimal from '../../components/carousel/CarouselMinimal'
import {Container, Col, Row, Button} from "react-bootstrap"
import Header from "../../components/header/Header"
import { useParams } from 'react-router-dom'
import {MdOutlineLocalGroceryStore} from "react-icons/md"

const ProductPage = () => {
    const param = useParams()
    const data = [
        {
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
          caption: ``
          
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
            caption: ``
            
          },
      ];

  
  return (
   <>
   <Header fixed={false}/>
   <Container>
   <Row className="products">
   <Col md={8}>
    <CarouselMinimal data={data}></CarouselMinimal>
    </Col>
    <Col md={4} className="mt-5">
    <Row><h2>Comprar agora</h2></Row>
   
   
    <Row>
        
        <Button> <MdOutlineLocalGroceryStore/> Adicionar ao Carrinho</Button>
        
    </Row>
    </Col>
   </Row>
   <Row className="mt-5 p-3">
    <Row className="py-5">
       <Row> <h3>Informações</h3></Row>
       <Row>
        <Col>
        <div><span>Nome: </span> <span>Fabricante: </span></div>
        <div><span>Ano: </span> <span>Fabricante: </span></div>
        
        </Col>
       </Row>
    </Row>
   </Row>
   </Container>
   </>
  )
}

export default ProductPage