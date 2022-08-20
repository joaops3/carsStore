import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import SideBarIcon from "./SideBarIcon";
import { AiOutlineUserAdd } from "react-icons/ai";


interface MainProfileInterface {
  children: React.ReactNode;
}

const SideBar: React.FC = () => {
  const admin = false
  return (
    <>
      <Col sm={2} className="bg-black sidebar d-flex flex-column align-items-center ">
        <SideBarIcon href="#" icon={<AiOutlineUserAdd size={30} />}>
          Dados Cadastrais
        </SideBarIcon>
        <SideBarIcon href="#" icon={<AiOutlineUserAdd size={30} />}>
          Ver Meus veiculos
        </SideBarIcon>
        {admin && ( <SideBarIcon href="#" icon={<AiOutlineUserAdd size={30} />}>
          Cadastrar Veiculo
        </SideBarIcon>)}
      </Col>
    </>
  );
};

export default SideBar;
