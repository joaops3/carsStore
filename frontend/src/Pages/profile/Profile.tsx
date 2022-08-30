import React from "react";
import MainProfile from "../../components/profile/MainProfile";
import { Container, Row, Col } from "react-bootstrap";
import ProfileRoutes from "./ProfileRoutes";

const Profile = () => {
  return (
    <MainProfile>
      <ProfileRoutes></ProfileRoutes>
    </MainProfile>
  );
};

export default Profile;
