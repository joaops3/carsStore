import React, { ReactElement } from "react";
import Header from "../Header";
import SideBar from "./sidebar/SideBar";
import { Container, Row, Col } from "react-bootstrap";


interface MainProfileInterface {
  children: React.ReactNode;
}

const MainProfile: React.FC<MainProfileInterface> = ({ children }) => {
  return (
    <>
   
      <Header></Header>
      <div className={"w-100 d-flex mt-5 pt-2"}>
        <SideBar></SideBar>
        <Col sm={6} className={"bg-danger flex-fill"}>
          {children}
        </Col>
        </div>
      
    </>
  );
};

export default MainProfile;
