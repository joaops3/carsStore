import React from 'react'
import {Route, Routes} from "react-router-dom"
import UserData from "../Pages/user/UserData"
import Home from "../Pages/home/Home"
import Header from "../components/Header"
import Login from "../Pages/login/Login"
import Register from '../Pages/register/Register'

function Router() {
  return (
   <>
<Header fixed={true}/>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/register" element={<Register/>}></Route>
    <Route path="/profile" element={<UserData/>}></Route>
   </Routes>
   </>
  )
}

export default Router