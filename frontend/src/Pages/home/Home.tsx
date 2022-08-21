import React from "react";
import Header from "../../components/Header";
import MainBanner from "../../components/banner/MainBanner";
import Banner from "../../components/banner/Banner";
import BannerLeft from "../../components/banner/BannerLeft";
import Footer from "../../components/footer/Footer";
import img1 from "../../assets/images/banner1.png";
import { Row, Container, Col } from "react-bootstrap";
import MainSideBar from "../../components/mainSideBar/MainSideBar";
import SearchBar from "../../components/search/SearchBar";
import Loading from "../../components/UI/loading/Loading";
import { useState, useEffect } from "react";
import { CarsInterface, cars, carsQuery } from "../../interfaces/interfaces";
import Cards from "../../components/table/Card/Cards";
const Home = () => {
  const [data, setData] = useState<any | undefined >(undefined)

  const getCars = async () => {
      await fetch("http://localhost:8000/car?page=0&limit=6")
        .then((res) => {return res.json()})
        .then((data) => {setData(data)})
       
  }

  useEffect(()=>{getCars()},[])
  return (
   
    <>
     {console.log(data)}
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
          <SearchBar></SearchBar>
          <MainSideBar></MainSideBar>
          <Col>
          <Container className="">
            <Row className="p-2">
              {/* {@ts-ignore} */}
              {data !== undefined && (data.cars.rows.map((card: any)=> {return <Cards name_car={card.name_car} model={card.model} year={card.year} price={card.price} Carimgs={card.Carimgs}></Cards>})) }
            </Row>
          </Container>
          </Col>
        </Row>
      </Container>
      <BannerLeft text={"left"}> </BannerLeft>
      <Footer></Footer>
    </>
  );
};

export default Home;
