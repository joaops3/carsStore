import React, { useCallback } from "react";
import Header from "../../components/header/Header";
import MainBanner from "../../components/banner/MainBanner";
import Section from "../../components/banner/Section";
import Footer from "../../components/footer/Footer";
import img1 from "../../assets/images/banner1.png";
import img2 from "../../assets/images/banner2.jpg";
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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(6);
  const [loading, setLoading] = useState<boolean>(true);

  const handlePageChange = (currentPage: number) => {
    setCurrentPage(currentPage);
  };

  const getCars = useCallback(async () => {
    await CarsService()
      .getCars(currentPage, itemsPerPage)
      .then((data) => {
        setData(data);
        setTotalItems(data.totalItems);
        setLoading(false);
      });
  }, [currentPage]);

  useEffect(() => {
    getCars();
  }, [getCars, currentPage]);

  return (
    <>
      <Header fixed={true}></Header>
      <MainBanner></MainBanner>

      <Container>
        <Section img={img1} text="right">
          <h2 className="">The best for you</h2>

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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            finibus ut enim elementum faucibus. Nam gravida non nulla non
            vehicula. Etiam elementum ali
          </p>
        </Section>

        <Row>
          <SearchBar></SearchBar>
          <MainSideBar data={data}></MainSideBar>
          <Col>
            {loading ? (
              <Loading></Loading>
            ) : (
              <Table
                data={data}
                itemsPerPage={itemsPerPage}
                totalItems={totalItems}
                handlePageChange={(e) => handlePageChange(e)}
              ></Table>
            )}
          </Col>
        </Row>

        <Section text={"left"} img={img2}>
          <h2 className="">Future right here</h2>

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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            finibus ut enim elementum faucibus. Nam gravida non nulla non
            vehicula. Etiam elementum ali
          </p>
        </Section>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Home;
