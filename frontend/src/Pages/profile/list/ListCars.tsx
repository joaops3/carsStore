import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Cards from "../../../components/table/Card/Cards";
import Loading from "../../../components/UI/loading/Loading";

const ListCars = () => {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  return (
    <Container fluid className="">
      <Row className="text-center">
        <h1>Meus Veículos</h1>
      </Row>
      {isLoading ? (
        <Loading />
      ) : (
        <Row className="bg-login p-4">
          {data !== undefined &&
            data.cars.rows.map((card: any, index: number) => {
              return (
                <Cards
                  key={index}
                  name_car={card.name_car}
                  model={card.model}
                  year={card.year}
                  price={card.price}
                  Carimgs={card.Carimgs}
                ></Cards>
              );
            })}
        </Row>
      )}
    </Container>
  );
};

export default ListCars;
