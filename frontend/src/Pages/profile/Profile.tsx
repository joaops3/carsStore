import React from "react";
import MainProfile from "../../components/profile/MainProfile";
import { Container, Row, Col, Modal, ModalBody, ModalHeader } from "react-bootstrap";

import Header from "../../components/header/Header";
import { Routes, Route, Outlet } from "react-router-dom";
import Edit from "./edit/Edit";
import UserData from "./userdata/UserData";
import ListCars from "./list/ListCars";
import RegisterCar from "./register/RegisterCar";
import RegisterCard from "./register/RegisterCard";

const Profile = () => {
  return (
    <>
   
      <Header fixed={false}></Header>
      <MainProfile>
      <Outlet></Outlet>
      </MainProfile>
      <Modal show={true} className="mobile-modal">
          <Modal.Header >
            <Modal.Title>  Atenção!</Modal.Title>
          </Modal.Header>
        
            <Modal.Body>
           <p>Acesse nosso app para melhor experiência</p>

            </Modal.Body>
      
         
        </Modal>
    </>
  );
};

export default Profile;
