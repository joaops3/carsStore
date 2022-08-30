import React from "react";
import { Row, Form, Col } from "react-bootstrap";
import Button from "../UI/buttons/ButtonHeader";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <>
      <Row className="justify-content-center pt-2">
        <Col md={6} className="d-flex ">
          <Form.Control
            bsPrefix="custom-class"
            className="input"
          ></Form.Control>
          <Button className="mx-2 header-cadastrar p-2">
            <FaSearch size={20}></FaSearch>
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default SearchBar;
