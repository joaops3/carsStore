import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import UserData from "../pages/profile/userdata/UserData";
import Home from "../pages/home/Home";
import Header from "../components/header/Header";
import Login from "../pages/login/Login";
import SignIn from "../pages/signIn/SignIn";
import ProductPage from "../pages/productsPage/ProductPage";
import Cart from "../pages/cart/Cart";
import Profile from "../pages/profile/Profile";
import Private from "./Private";
import Toast from "../components/toast/Toast";
import Edit from "../pages/profile/edit/Edit";
import ListCars from "../pages/profile/list/ListCars";
import RegisterCar from "../pages/profile/register/RegisterCar";
import RegisterCard from "../pages/profile/register/RegisterCard";
import Userid from "../pages/profile/userid";
function Router() {
  return (
    <>
      <Toast></Toast>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/product/:id" element={<ProductPage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route
          path="profile"
          element={
            <Private>
              <Profile />
            </Private>
          }
        >
          <Route path=":id" element={<Private><Userid></Userid></Private>}>
            <Route index={true} element={<UserData></UserData>}></Route>
            <Route path="edit" element={<Edit></Edit>}></Route>
            <Route path="listcars" element={<ListCars></ListCars>}></Route>
            <Route path="registercars" element={<RegisterCar />}></Route>
            <Route path="registercard" element={<RegisterCard />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default Router;
