import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import SideBarIcon from "./SideBarIcon";
import { AiOutlineUserAdd, AiOutlineCar, AiOutlineFileAdd } from "react-icons/ai";
import {BiCreditCard} from "react-icons/bi"


interface MainProfileInterface {
  children: React.ReactNode;
}

const SideBar: React.FC = () => {
  const admin = true
  return (
    <>
      <Col sm={2} className="sidebar d-flex flex-column align-items-center ">
        <SideBarIcon href="/profile/" icon={<AiOutlineUserAdd size={30} />}>
          Dados Cadastrais
        </SideBarIcon>
        <SideBarIcon href="/profile/listcars" icon={<AiOutlineCar size={30} />}>
          Ver Meus veiculos
        </SideBarIcon>
        <SideBarIcon href="/profile/registercard" icon={<BiCreditCard size={30} />}>
          Cadastrar Cartao
        </SideBarIcon>
        {admin && ( <SideBarIcon href="/profile/registercars" icon={<AiOutlineFileAdd size={30} />}>
          Cadastrar Veiculo
        </SideBarIcon>)}
      </Col>
    </>
  );
};

export default SideBar;
