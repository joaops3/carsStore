import React from 'react'
import {Container, Row} from "react-bootstrap"
import FormProduct from '../../../components/form/FormProduct'

const RegisterCar = () => {
  return (
    <Container fluid>
 <h1 className="text-center">CADASTRAR PRODUTO</h1>
    <FormProduct operation="edit"></FormProduct>
    </Container>
  )
}

export default RegisterCar