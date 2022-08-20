import React from "react";
import Header from "../../components/Header";
import MainBanner from "../../components/banner/MainBanner";
import Banner from "../../components/banner/Banner";
import BannerLeft from "../../components/banner/BannerLeft";
import Footer from "../../components/footer/Footer";
import img1 from "../../assets/images/banner1.png";
import { Row, Container, Col } from "react-bootstrap";
import MainSideBar from "../../components/mainSideBar/MainSideBar";

const Home = () => {
  return (
    <>
      <MainBanner></MainBanner>
      <Banner img={img1}>
        <h1 className="">title</h1>
        <div className="mt-3">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            finibus ut enim elementum faucibus. Nam gravida non nulla non
            vehicula. Etiam elementum ali
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            finibus ut enim elementum faucibus. Nam gravida non nulla non
            vehicula. Etiam elementum ali
          </p>
        </div>
      </Banner>
      <Container>
        <Row>
          <MainSideBar></MainSideBar>
        </Row>
      </Container>
      <BannerLeft text={"left"}> </BannerLeft>
      <Footer></Footer>
    </>
  );
};

export default Home;
