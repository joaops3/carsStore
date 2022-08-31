import React from 'react'
import {Container, Row} from "react-bootstrap"
import FormProduct from '../../../components/form/FormProduct'

const RegisterCar = () => {
  return (
    <Container fluid>
    <Row className="text-center"><h1>CADASTRAR PRODUTO</h1></Row>
    <FormProduct operation="edit"></FormProduct>
    </Container>
  )
}

export default RegisterCar