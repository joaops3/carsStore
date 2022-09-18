import React from "react";
import { Route, Routes } from "react-router-dom";
import UserData from "../pages/profile/Profile";
import Home from "../pages/home/Home";
import Header from "../components/header/Header";
import Login from "../pages/login/Login";
import SignIn from "../pages/signIn/SignIn";
import ProductPage from "../pages/productsPage/ProductPage";
import Basket from "../pages/basket/Basket";
import Profile from "../pages/profile/Profile";
import Private from "./Private";
import Toast from "../components/toast/Toast";
function Router() {
  return (
    <>
      <Toast></Toast>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/product/:id" element={<ProductPage />}></Route>
        <Route path="/basket" element={<Basket />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route
          path="/profile/*"
          element={
            <Private>
              <Profile />
            </Private>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default Router;
