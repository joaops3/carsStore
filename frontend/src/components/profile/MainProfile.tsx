import React, { ReactElement } from "react";
import HeaderProfile from "./headerProfile/HeaderProfile";
import SideBar from "./sidebar/SideBar";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/sidebar.scss";

interface MainProfileInterface {
  children: React.ReactNode;
}

const MainProfile: React.FC<MainProfileInterface> = ({ children }) => {
  return (
    <>
      <HeaderProfile></HeaderProfile>
      <Container fluid className={"d-flex bg-primary"}>
        <SideBar></SideBar>
        <Col sm={6} className={"bg-danger flex-fill"}>
          <Container>{children}</Container>
        </Col>
      </Container>
    </>
  );
};

export default MainProfile;
