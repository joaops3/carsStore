
import React from 'react'
import {Routes, Route} from "react-router-dom"
import Edit from './edit/Edit'
import UserData from "./userdata/UserData"
import ListCars from './list/ListCars'
import RegisterCar from './register/RegisterCar'
import RegisterCard from './register/RegisterCard'

const ProfileRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<UserData></UserData>}/>
    <Route path="/edit" element={<Edit></Edit>}></Route>
    <Route path="/listcars" element={<ListCars></ListCars>}></Route>
    <Route path="/registercars" element={<RegisterCar/>}></Route>
    <Route path="/registercard" element={<RegisterCard/>}></Route>
   </Routes>
  )
}

export default ProfileRoutes