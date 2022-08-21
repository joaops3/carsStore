import React from 'react'
import {Row, Container, Col, Form} from "react-bootstrap"

const MainSideBar = () => {
  return (
    <>
    
    <Col md={2} className="mt-5 p-3 mainSideBar">
    <Row className="text-center mb-3">
        <h5>Selecione por:</h5>
      </Row>
     <Form>
     <Form.Check reverse aria-label="option 1" label="marca" id=""/>
     <Form.Check reverse aria-label="option 1" label="marca" id=""/>
     <Form.Check reverse aria-label="option 1" label="marca" id=""/>
     </Form>
    </Col>
    </>
  )
}

export default MainSideBar