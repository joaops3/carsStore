import React from "react";
import { Container, Form, Stack, Button,Row,Col } from "react-bootstrap";
import { useState } from "react";

const LoginForm: React.FC = () => {
  const [error, setError] = useState<boolean>(false);
  return (
    <>
    <main className="p-login">
      <Container className ="">
        <Form className="d-flex justify-content-center">
          <Col md={4} className="bg-login p-3">
          <Form.Group className="text-center fs-2" controlId="">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Email"></Form.Control>
          </Form.Group>
          <Form.Group className="text-center fs-2 pt-2" controlId="">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="text" placeholder="Senha"></Form.Control>
          </Form.Group>
          <Form.Text><a href="#">Recuperar senha</a></Form.Text>
          <Form.Group as={Col} sm={12} className="d-flex align-items-center justify-content-center pt-2"> 
       
            <Button>Login</Button>
         
          
          </Form.Group>

          </Col>
          {error && <p>Email ou Senha Invalidos</p>}
        </Form>
      </Container>
      </main>
    </>
  );
};

export default LoginForm;
