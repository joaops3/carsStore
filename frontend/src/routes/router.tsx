import React from 'react'
import {Route, Routes} from "react-router-dom"
import UserData from "../Pages/profile/UserData"
import Home from "../Pages/home/Home"
import Header from "../components/header/Header"
import Login from "../Pages/login/Login"
import SignIn from '../Pages/signIn/SignIn'
import ProductPage from '../Pages/ProductsPage/ProductPage'
import Basket from '../Pages/basket/Basket'

function Router() {
  return (
   <>

   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/product" element={<ProductPage/>}></Route>
    <Route path="/basket" element={<Basket/>}></Route>
    <Route path="/signin" element={<SignIn/>}></Route>
    <Route path="/profile" element={<UserData/>}></Route>
   </Routes>
   </>
  )
}

export default Router