import React from 'react'
import {Card, Button} from "react-bootstrap"
import { Link } from 'react-router-dom'
import { addMoneyRealMask } from '../../../helpers/helpers'
import { CarsInterface } from '../../../interfaces/interfaces'

interface Props extends CarsInterface {
  oneimg: string
}

const Cards: React.FC<CarsInterface> = ({name_car, model, year,price, Carimgs, id}) => {

  return (
    <>
   
    <Card className=" p-2 m-1" style={{ width: '18rem', maxHeight: "360px" }}>
      <Card.Img variant="top" src={`${Carimgs[0].url}`} style={{maxHeight: "150px", minHeight: "150px"}} />
      <Card.Body>
        <Card.Title className="card-text">{name_car}</Card.Title>
        <Card.Text>
          <div className='card-text'>Fabricante: {model}</div>  <div>Ano: {year}</div>
        </Card.Text>
        <Card.Text>
         {addMoneyRealMask(price) }
        </Card.Text>
        <Link to={`/product/${id}`} className="btn-product">COMPRAR</Link>
      </Card.Body>
    </Card>
    </>
  )
}

export default Cards