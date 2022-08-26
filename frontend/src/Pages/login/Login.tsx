import React from 'react'
import Header from '../../components/header/Header'
import LoginForm from "../../components/login/LoginForm"

const Login = () => {
  return (
    <>
    <Header fixed={false}/>
    <LoginForm/>
    </>
  )
}

export default Login