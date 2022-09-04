import React from "react";
import MainProfile from "../../components/profile/MainProfile";
import { Container, Row, Col } from "react-bootstrap";
import ProfileRoutes from "./ProfileRoutes";
import Header from "../../components/header/Header";

const Profile = () => {
  return (
    <>
    <Header fixed={false}></Header>
    <MainProfile>
      <ProfileRoutes></ProfileRoutes>
    </MainProfile>
    </>
  );
};

export default Profile;
