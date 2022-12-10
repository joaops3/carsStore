import React from 'react'
import {Row, Col, Container,Image, Table} from "react-bootstrap"
import { addMoneyRealMask } from '../../helpers/helpers'
import {CarsInterface} from "../../interfaces/interfaces"
import {AiOutlineClose} from "react-icons/ai"

interface Props extends CarsInterface {
  
   deleteBasket: (e: number) => void
}

const BasketItem: React.FC<Props> = ({name_car, Carimgs, price, model, year,id, deleteBasket}) => {
  return (
   <>
      <tr className=' products-container d-flex justify-content-between align-items-center'>
        <td>
        <Image src={Carimgs[0].url} width={200} height={100}></Image>
        </td>
        <td>  <div className='ml-20'><strong>{name_car}</strong></div></td>
        <td>
        <div><strong>{addMoneyRealMask(price)}</strong></div>
        </td>
        <td>
        <AiOutlineClose size={30} onClick={() => {deleteBasket(id || 0 )}} style={{cursor: "pointer"}}></AiOutlineClose>
        </td>
      </tr>
   </>
  )
}

export default BasketItem