import React, { useContext } from "react";
import { Container, Form, Stack, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { toast } from "react-toastify";
import Toast from "../../components/toast/Toast";
import { Context } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [error, setError] = useState<boolean>(false);
  const { login } = useContext(Context);
  const navigate = useNavigate()

  const handleLogin = () => {
    console.log("dsds")
    navigate("/profile")
    // login(email, password)
    //   .then((e: any) => {
    //     toast.success("Login feito com sucesso");
    //   })
    //   .catch((e: any) => {
    //     toast.error("ERROR");
    //   });
  };
  return (
    <>
      <Toast></Toast>
      <main className="p-login">
        <Container className="">
          <Form className="d-flex justify-content-center">
            <Col md={5} className="bg-login p-3">
              <Form.Group className="text-center fs-2" controlId="">
                <Form.Label className="login-title">Email</Form.Label>
                <Form.Control type="text" placeholder="Email"></Form.Control>
              </Form.Group>
              <Form.Group className="text-center fs-2 pt-2" controlId="">
                <Form.Label className="login-title">Senha</Form.Label>
                <Form.Control type="text" placeholder="Senha"></Form.Control>
              </Form.Group>
              <Form.Text>
                <a href="#">Recuperar senha</a>
              </Form.Text>
              <Form.Group
                as={Col}
                sm={12}
                className="d-flex align-items-center justify-content-center pt-2"
              >
                <Button bsPrefix="custom-class" className="header-cadastrar" onClick={() => {handleLogin()}}>
                  LOGAR
                </Button>
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
