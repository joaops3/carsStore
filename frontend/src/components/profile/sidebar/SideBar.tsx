import React, {useContext, useState, useEffect} from "react";
import { Col, Row, Container } from "react-bootstrap";
import SideBarIcon from "./SideBarIcon";
import { AiOutlineUserAdd, AiOutlineCar, AiOutlineFileAdd } from "react-icons/ai";
import {BiCreditCard} from "react-icons/bi"
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";



interface MainProfileInterface {
  children: React.ReactNode;
}

const SideBar: React.FC = () => {

  const param = useParams()
  const {user}= useContext(AuthContext)

  useEffect(()=> {}, [user])

  return (
    <>
      <Col sm={2} className="sidebar d-flex flex-column align-items-center">
        <SideBarIcon href={`/profile/${param.id}/`} icon={<AiOutlineUserAdd size={30} />}>
          Dados Cadastrais
        </SideBarIcon>
        <SideBarIcon href={`/profile/${param.id}/listcars`} icon={<AiOutlineCar size={30} />}>
          Ver Meus veiculos
        </SideBarIcon>
        <SideBarIcon href={`/profile/${param.id}/registercard`} icon={<BiCreditCard size={30} />}>
          Cadastrar Cartao
        </SideBarIcon>
        {user?.type && ( <SideBarIcon href={`/profile/${param.id}/registercars`} icon={<AiOutlineFileAdd size={30} />}>
          Cadastrar Veiculo
        </SideBarIcon>)}
      </Col>
    </>
  );
};

export default SideBar;
