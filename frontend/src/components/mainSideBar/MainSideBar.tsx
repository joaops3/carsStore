import React from 'react'
import {Row, Container, Col, Form} from "react-bootstrap"
import { CarsInterface, carsQuery } from '../../interfaces/interfaces'

interface Props {
  data:carsQuery | undefined,
}


const MainSideBar: React.FC<Props> = ({data}) => {
  return (
    <>
    {console.log(data)}
    <Col md={2} className="mt-5 p-3 mainSideBar">
    <Row className="text-center mb-3">
        <h5>Selecione por:</h5>
      </Row>
     <Form>
   
    {data && (data.cars.rows.map((item: CarsInterface, key: number) => {
      return (  <Form.Check key={key} reverse aria-label="option 1" label={item.model} id="" style={{textTransform: "capitalize"}}/>)
    }))}
     </Form>
    </Col>
    </>
  )
}

export default MainSideBar