import React, { useContext, useEffect } from "react";
import { Container, Form, Stack, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [error, setError] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const { login, isLogged,user } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleLogin = async () => {
    if(!email || !password){
      setError(true)
      return
    }
   
    await login(email, password)
      .then((id: number) => {
        
        toast.success("Login feito com sucesso");  navigate(`/profile/${id}`)
      })
      .catch((e: any) => {
        setError(true)
        toast.error("ERROR");
      });
  };

  useEffect(()=> { 
    if(isLogged && user){
     
      navigate(`/profile/${user.id}`)
    }
},[isLogged])
  return (
    <>
      <main className="p-login">
        <Container className="">
          <Form className="d-flex justify-content-center">
            <Col md={5} className="bg-login p-3">
          <Row className="text-center">   {error && <p className="errorsMessage">Email ou Senha Inválidos</p>}</Row>
              <Form.Group className="text-center fs-2" controlId="">
                <Form.Label className="login-title">Email</Form.Label>
                <Form.Control type="text" bsPrefix="custom-class" className="input" placeholder="Email" onChange={e => {setEmail(e.target.value)}}  onKeyDown={(e)=> {if(e.key ==="Enter")return handleLogin()}}></Form.Control>
              </Form.Group>
              <Form.Group className="text-center fs-2 pt-2" controlId="">
                <Form.Label className="login-title">Senha</Form.Label>
                <Form.Control type="password" bsPrefix="custom-class" className="input" placeholder="Senha"onChange={e => {setPassword(e.target.value)}}  onKeyDown={(e)=> {if(e.key ==="Enter") handleLogin()}} ></Form.Control>
              </Form.Group>
              <Form.Text>
                <a href="#" style={{color: "red"}}>Recuperar senha</a>
              
              </Form.Text>
              <div style={{color: "blue"}}>   tester@email.com
               </div >
               <div style={{color: "blue"}}> 123</div>
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
