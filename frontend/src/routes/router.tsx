import React from 'react'
import {Route, Routes} from "react-router-dom"
import UserData from "../Pages/profile/Profile"
import Home from "../Pages/home/Home"
import Header from "../components/header/Header"
import Login from "../Pages/login/Login"
import SignIn from '../Pages/signIn/SignIn'
import ProductPage from '../Pages/productsPage/ProductPage'
import Basket from '../Pages/basket/Basket'
import Profile from '../Pages/profile/Profile'
import Private from './Private'

function Router() {
  return (
   <>

   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/product" element={<ProductPage/>}></Route>
    <Route path="/basket" element={<Basket/>}></Route>
    <Route path="/signin" element={<SignIn/>}></Route>
    <Route path="/profile/*" element={<Private><Profile/></Private>}></Route>
   </Routes>
   </>
  )
}

export default Router