import React, { ReactElement } from "react";
import Header from "../header/Header";
import SideBar from "./sidebar/SideBar";
import { Container, Row, Col } from "react-bootstrap";


interface MainProfileInterface {
  children: React.ReactNode;
}

const MainProfile: React.FC<MainProfileInterface> = ({ children }) => {
  return (
    <>
      <div className={"w-100 d-flex"}>
        <SideBar></SideBar>
        <Col sm={6} className={"flex-fill"}>
          <Container>
          {children}
          </Container>
        </Col>
        </div>
      
    </>
  );
};

export default MainProfile;
