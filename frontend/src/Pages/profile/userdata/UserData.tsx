import React, {useState, useEffect, useCallback, useContext} from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { formatDate, parseDate } from "../../../helpers/helpers";
import UserService from "../../../services/UserService";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import { UsersInterface } from "../../../interfaces/interfaces";
import Loading from "../../../components/UI/loading/Loading"

interface Idata{
  user: UsersInterface
}
const UserData = () => {
  const [data, setData] = useState<Idata>({} as Idata)
  const [isLoading, setLoading] = useState<boolean>(true)
  const {user} = useContext(AuthContext)

  const getData = useCallback(() => {
    if(user.id){
      UserService().getUser(user.id)
        .then((response)=> {setData(response.data); setLoading(false)})
        .catch((e)=> {console.log(e)})
    }
  }, [user])

  useEffect(()=>{
    getData()
  }, [getData])
  return (
    <>
    { isLoading ? <Loading></Loading> : 
    <>
      <Container  className="bg-login py-2 px-4">
      <h1 className="text-center">Dados do usuario</h1>
      <Row className="my-4 d-flex justify-content-end">
        <Col sm={3}>
          <Link to="/profile/edit" className="header-cadastrar">
            Editar Dados
          </Link>
        </Col>
      </Row>
        <Row className={"mt-2 "}>
          <Col md={4} className={"mt-3 data-container"}>
            <div className="data-title">
              Name:
        <span className="data-text">{data.user.name}</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4} className={"mt-3  data-container"}>
            <div className="data-title">
              Email:
              <span className="data-text">{data.user.email}</span>
            </div>
          </Col>
        </Row>
        <Row className={"mt-2"}>
          <Col md={4} className={"my-3 data-container"}>
            <div className="data-title">
              
              Nascimento:
              <span className="data-text">
                {formatDate(new Date(data.user.nascimento), "dd/mm/yyyy")}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </>

    }
   
    
    </>
  );
};

export default UserData;
