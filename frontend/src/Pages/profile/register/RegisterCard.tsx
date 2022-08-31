import React from 'react'
import {Container, Row} from "react-bootstrap"
import FormCard from '../../../components/form/FormCard'

const RegisterCard = () => {
  return (
    <Container fluid>
    <Row className="text-center"><h1>CADASTRAR CARTÃO DE CREDITO</h1></Row>
    <FormCard operation="edit"></FormCard>
    </Container>
  )
}

export default RegisterCard