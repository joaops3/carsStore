import React from "react";
import "./styles/App.scss";
import HeaderProfile from "./components/profile/headerProfile/HeaderProfile";
import Header from "./components/Header";
import SideBar from "./components/profile/sidebar/SideBar"
import { BrowserRouter } from "react-router-dom";
import Teste from "./components/profile/teste";

function App() {
  return (
    <>
      <BrowserRouter>
       <Teste></Teste>
      </BrowserRouter>
    </>
  );
}

export default App;
