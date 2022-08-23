import React from 'react'
import {Col, Container, Row} from "react-bootstrap"
import MyPagination from '../pagination/MyPagination'
import Cards from './Card/Cards'
import {carsQuery} from "../../interfaces/interfaces"
interface Props {
  data: carsQuery,
  itemsPerPage: number
  handlePageChange: (e: any)=> void
}

const Table: React.FC<Props> = ({data, itemsPerPage, handlePageChange}) => {
  
  return (
    <>
    <Container>
        <Row>
        {data !== undefined && (data.cars.rows.map((card: any, index)=> {return <Cards key={index} name_car={card.name_car} model={card.model} year={card.year} price={card.price} Carimgs={card.Carimgs}></Cards>})) }
        </Row>
        <Row>
          <MyPagination itemsPerPage={itemsPerPage}  totalItems={data.count} handlePageChange={(e) =>handlePageChange(e)}/>
        </Row>
    </Container>
    </>
  )
}

export default Table