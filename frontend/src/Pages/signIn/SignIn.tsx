import React, {useEffect, useState, useContext, useCallback} from 'react'
import FormUser from "../../components/form/FormUser"
import Header from '../../components/header/Header'
import {Container, Row} from "react-bootstrap"
import {UsersInterface} from "../../interfaces/interfaces"
import {AuthContext} from "../../context/AuthProvider"

const SignIn = () => {

  return (
    <>
    <Header fixed={false}></Header>
    <Container fluid>
    <Row className="text-center"><h1>Cadastrar</h1></Row>
    <FormUser operation={"sign"} ></FormUser>
    </Container>
    </>
  )
}

export default SignIn