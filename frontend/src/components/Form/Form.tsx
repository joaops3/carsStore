import React from 'react'
import {Container, Form, Col, Row} from "react-bootstrap"

const FormRegister = () => {
  return (
    <Container>
        <Form>
            <Form.Group as={Col} md={3}>
                <Form.Label>name</Form.Label>
                <Form.Control type="text" placeholder="name" bsPrefix="custom-class" className="input"></Form.Control>
            </Form.Group>
        </Form>
    </Container>
  )
}

export default FormRegister