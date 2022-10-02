import React, {useEffect, useState, useContext, useCallback} from 'react'
import FormUser from "../../../components/form/FormUser"
import Header from '../../../components/header/Header'
import {Container, Row} from "react-bootstrap"
import {UsersInterface} from "../../../interfaces/interfaces"
import {AuthContext} from "../../../context/AuthProvider"
import UserService from "../../../services/UserService"
interface Idata{
  user: UsersInterface
}

const Edit = () => {
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
    <Container fluid>
    <Row className="text-center"><h1>EDITAR DADOS</h1></Row>
    <FormUser operation="edit" currentData={data.user} id={user.id}></FormUser>
    </Container>
   </>
  )
}

export default Edit