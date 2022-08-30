import React from 'react'
import FormUser from "../../../components/Form/FormUser"
import {Container, Row} from "react-bootstrap"

const Edit = () => {
  return (
   <>
    <Container fluid>
    <Row className="text-center"><h1>EDITAR DADOS</h1></Row>
    <FormUser operation="edit"></FormUser>
    </Container>
   </>
  )
}

export default Edit