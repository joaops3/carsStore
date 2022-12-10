import React, { useState, useCallback, useContext, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Cards from "../../../components/table/Card/Cards";
import Loading from "../../../components/UI/loading/Loading";
import TransactionService from "../../../services/TransactionService";
import { AuthContext } from "../../../context/AuthProvider";
import { useParams } from "react-router-dom";
import { CarsInterface } from "../../../interfaces/interfaces";

const ListCars = () => {
  const [data, setData] = useState<{cars: CarsInterface[]}>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const param = useParams()
  //const {user} = useContext(AuthContext)

  const getData = useCallback(()=> {
    if(param.id){

      TransactionService().seeOwned(param.id).then((resp) => {})
    }
  }, [])

  useEffect(()=> {
    getData()
  
  }, [getData])

  
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
            data.cars.map((card: any, index: number) => {
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
