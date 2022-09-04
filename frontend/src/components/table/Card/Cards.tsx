import React from 'react'
import {Card, Button} from "react-bootstrap"
import { addMoneyRealMask } from '../../../helpers/helpers'
import { CarsInterface } from '../../../interfaces/interfaces'

interface Props extends CarsInterface {
  oneimg: string
}

const Cards: React.FC<CarsInterface> = ({name_car, model, year,price, Carimgs}) => {

  return (
    <>
   
    <Card className=" p-2 m-1" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`${Carimgs[0].url}`} />
      <Card.Body>
        <Card.Title>{name_car}</Card.Title>
        <Card.Text>
          <span>Fabricante: {model}</span>  <span>Ano: {year}</span>
        </Card.Text>
        <Card.Text>
          <span>{addMoneyRealMask(price) }</span>
        </Card.Text>
        <Button variant="primary">COMPRAR</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default Cards