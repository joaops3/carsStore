import React, { useContext, useEffect } from "react";
import { Container, Form, Stack, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [error, setError] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const { login, isLogged } = useContext(Context);
  const navigate = useNavigate()

  const handleLogin = async () => {
    if(!email || !password){
      setError(true)
      return
    }
   
    await login(email, password)
      .then((e: any) => {
        toast.success("Login feito com sucesso");  navigate("/profile")
      })
      .catch((e: any) => {
        setError(true)
        toast.error("ERROR");
      });
  };

  useEffect(()=> { 
    if(isLogged){
     
      navigate("/profile")
    }
},[isLogged])
  return (
    <>
      <main className="p-login">
        <Container className="">
          <Form className="d-flex justify-content-center">
            <Col md={5} className="bg-login p-3">
          <Row className="text-center">   {error && <p>Email ou Senha Invalidos</p>}</Row>
              <Form.Group className="text-center fs-2" controlId="">
                <Form.Label className="login-title">Email</Form.Label>
                <Form.Control type="text" placeholder="Email" onChange={e => {setEmail(e.target.value)}}></Form.Control>
              </Form.Group>
              <Form.Group className="text-center fs-2 pt-2" controlId="">
                <Form.Label className="login-title">Senha</Form.Label>
                <Form.Control type="text" placeholder="Senha"onChange={e => {setPassword(e.target.value)}} ></Form.Control>
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
         
          </Form>
        </Container>
      </main>
    </>
  );
};

export default LoginForm;
