import React from "react";
import MainProfile from "../../components/profile/MainProfile";
import { Container, Row, Col } from "react-bootstrap";

const UserData = () => {
  return (
    <MainProfile>
      <Row className="text-center">
        <h1>DADOS CADASTRAIS</h1>
      </Row>
    </MainProfile>
  );
};

export default UserData;
