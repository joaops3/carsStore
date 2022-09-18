import React from 'react'
import {Row, Col, Container,Image} from "react-bootstrap"
import { addMoneyRealMask } from '../../helpers/helpers'
import {CarsInterface} from "../../interfaces/interfaces"

interface Props extends CarsInterface {
  
   deleteBasket: (e: number) => void
}

const BasketItem: React.FC<Props> = ({name_car, Carimgs, price, model, year,id, deleteBasket}) => {
  return (
   <>
   <Row className='p-3 products-container'>
    <Row className='text-end'>
     <span> <button onClick={() => {deleteBasket(id || 0 )}}>excluir</button></span>
    </Row>
    <Col md={3}><Image src={Carimgs[0].url} width={200} height={100}></Image></Col>
    <Col md={6}>
        <div className='ml-20'><strong>{name_car}</strong></div>
    </Col>
    <Col md={3}>
        <div><strong>{addMoneyRealMask(price)}</strong></div>
    </Col>
   </Row>
   </>
  )
}

export default BasketItem