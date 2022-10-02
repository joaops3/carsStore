import React from 'react'
import {Row, Col, Container,Image} from "react-bootstrap"
import { addMoneyRealMask } from '../../helpers/helpers'
import {CarsInterface} from "../../interfaces/interfaces"
import {AiOutlineClose} from "react-icons/ai"

interface Props extends CarsInterface {
  
   deleteBasket: (e: number) => void
}

const BasketItem: React.FC<Props> = ({name_car, Carimgs, price, model, year,id, deleteBasket}) => {
  return (
   <>
   <Row className='p-3 products-container'>
   <Col md={3}><Image src={Carimgs[0].url} width={200} height={100}></Image></Col>
   <Col xs={9}>
    <Row className='text-end'>
     <span> <AiOutlineClose size={30} onClick={() => {deleteBasket(id || 0 )}} style={{cursor: "pointer"}}></AiOutlineClose></span>

    </Row>
   <Row>

    <Col md={9}>
        <div className='ml-20'><strong>{name_car}</strong></div>
    </Col>
    <Col md={3}>
        <div><strong>{addMoneyRealMask(price)}</strong></div>
    </Col>
   </Row>

   </Col>
   </Row>
   </>
  )
}

export default BasketItem