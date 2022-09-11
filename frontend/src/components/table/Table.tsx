import React, { useEffect } from 'react'
import {Col, Container, Row} from "react-bootstrap"
import MyPagination from '../pagination/MyPagination'
import Cards from './Card/Cards'
import {carsQuery, CarsInterface} from "../../interfaces/interfaces"
interface Props {
  data:carsQuery | undefined,
  itemsPerPage: number,
  totalItems: number
  handlePageChange: (e: any)=> void
}

const Table: React.FC<Props> = ({data, itemsPerPage, handlePageChange, totalItems}) => {
  useEffect(()=> {}, [data])
  
  return (
    <>   {console.log("my data rows",data?.cars.rows)}
    <Container className='bg-login mt-5'>
   
        <Row className="p-3 d-flex justify-content-between">
        {(data?.cars.rows === undefined || data !== undefined) && (data?.cars.rows.map((card: any, index:number)=> {return <Cards key={index} id={card.id} name_car={card.name_car} model={card.model} year={card.year} price={card.price} Carimgs={card.Carimgs}></Cards>})) }
        </Row>
        <Row>
       <Col sm={12}>  {data !== undefined &&  (<MyPagination itemsPerPage={itemsPerPage} totalItems={totalItems} handlePageChange={(e) =>handlePageChange(e)}/>)}</Col>
        </Row>
    </Container>
    </>
  )
}

export default Table