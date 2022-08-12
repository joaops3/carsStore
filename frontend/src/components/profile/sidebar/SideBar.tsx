import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import SideBarIcon from "./SideBarIcon";
import { AiOutlineUserAdd } from "react-icons/ai";
import "../../../styles/sidebar.scss";

interface MainProfileInterface {
  children: React.ReactNode;
}

const SideBar: React.FC = () => {
  return (
    <>
      <Col sm={2} className="bg-black">
        <SideBarIcon href="#" icon={<AiOutlineUserAdd size={30} />}>
          Dados Cadastrais
        </SideBarIcon>
        <SideBarIcon href="#" icon={<AiOutlineUserAdd size={30} />}>
          Dados Cadastrais
        </SideBarIcon>
      </Col>
    </>
  );
};

export default SideBar;
