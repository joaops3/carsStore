import React from 'react'
import {Container, Row} from "react-bootstrap"
import FormCard from '../../../components/form/FormCard'

const RegisterCard = () => {
  return (
    <Container fluid>
 <h1 className='text-center'>CADASTRAR CARTÃO DE CREDITO</h1>
    <FormCard operation="edit"></FormCard>
    </Container>
  )
}

export default RegisterCard