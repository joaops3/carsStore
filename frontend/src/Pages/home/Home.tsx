import React, { useCallback } from "react";
import Header from "../../components/header/Header";
import MainBanner from "../../components/banner/MainBanner";
import Banner from "../../components/banner/Banner";
import BannerLeft from "../../components/banner/BannerLeft";
import Footer from "../../components/footer/Footer";
import img1 from "../../assets/images/banner1.png";
import Table from "../../components/table/Table";
import { Row, Container, Col } from "react-bootstrap";
import MainSideBar from "../../components/mainSideBar/MainSideBar";
import SearchBar from "../../components/search/SearchBar";
import Loading from "../../components/UI/loading/Loading";
import { useState, useEffect } from "react";
import { CarsInterface, carsQuery } from "../../interfaces/interfaces";
import Cards from "../../components/table/Card/Cards";
import CarsService from "../../services/CarsService";

const Home = () => {
  const [data, setData] = useState<carsQuery | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(3);
  const [loading, setLoading] = useState<boolean>(true);

  const handlePageChange = (currentPage: number) => {
    setCurrentPage(currentPage);
    console.log(currentPage)
  };

  const getCars = useCallback(()=>{
    CarsService().getCars(currentPage, itemsPerPage).then((data) => {setData(data); 
      setTotalItems(data.count);
      setLoading(false) })
    console.log(currentPage)
  },[])

  useEffect(() => {
    getCars()
    
  }, [getCars, currentPage]);
  
  return (
    <>
      {console.log("my data here",data)}
      <Header fixed={true}></Header>
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
            {loading ? (
              <Loading></Loading>
            ) : (
              <Table
                data={data}
                itemsPerPage={itemsPerPage}
                handlePageChange={(e) => handlePageChange(e)}
              ></Table>
            )}
          </Col>
        </Row>
      </Container>
      <BannerLeft text={"left"}> </BannerLeft>
      <Footer></Footer>
    </>
  );
};

export default Home;
