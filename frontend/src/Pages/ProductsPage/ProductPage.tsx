import React, { useEffect, useState, useCallback, useContext } from "react";
import CarouselMinimal from "../../components/carousel/CarouselMinimal";
import { Container, Col, Row, Button, Form, Image } from "react-bootstrap";
import Header from "../../components/header/Header";
import { useParams } from "react-router-dom";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import InputMask from "react-input-mask";
import UserService from "../../services/UserService";
import { onlyNumbers } from "../../helpers/helpers";
import { CarsInterface } from "../../interfaces/interfaces";
import CarsService from "../../services/CarsService";
import { CartContext } from "../../context/CartProvider";

interface dataInterface {
  cars: CarsInterface;
}

const initialState = { street: "", neighborhood: "", city: "", state: "" };

const ProductPage = () => {
  const param = useParams();
  const [cep, setCep] = useState<string>("");
  const [adress, setAdress] = useState({ ...initialState });
  const [data, setData] = useState<dataInterface | undefined>();
  const { addCart } = useContext(CartContext);

  const getData = useCallback(async () => {
    if (param.id) {
      await CarsService()
        .getCarsId(param.id)
        .then((data) => {
          setData(data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleCep = async () => {
    if (cep === "") {
      return;
    }
    const cepStg = onlyNumbers(cep);
    await UserService()
      .getCep(cepStg)
      .then((response: any) => {
        return response.data;
      })
      .then((data) => {
        setAdress({
          ...adress,
          street: data.logradouro,
          neighborhood: data.bairro,
          city: data.localidade,
          state: data.uf,
        });
      });
  };

  return (
    <>
      <Header fixed={false} />
      <Container>
        <Row className="products mt-5">
          <Col md={8}>
            {data?.cars.Carimgs && (
              <CarouselMinimal data={data?.cars.Carimgs}></CarouselMinimal>
            )}

            {/* {  data?.cars.Carimgs &&  ( <Image src={data?.cars.Carimgs[0].url}></Image>)} */}
          </Col>
          <Col md={4} className="mt-5">
            <Row className="text-center">
              <h2>Comprar agora</h2>
            </Row>

            <Row>
              <Col md={12} className="bg-login px-2 py-3">
                <div className="mb-2">
                  Calcule o prazo e valor do frete deste produto:
                </div>
                <Row className="d-flex align-items-center">
                  <Col sm={8}>
                    <InputMask
                      mask={"99.999-999"}
                      className="input"
                      placeholder="Digite seu CEP"
                      onChange={(e) => {
                        setCep(e.target.value);
                      }}
                    ></InputMask>
                  </Col>
                  <Col sm={4}>
                    <Button
                      className="ml-3"
                      onClick={() => {
                        handleCep();
                      }}
                    >
                      Procurar
                    </Button>
                  </Col>
                </Row>
                <Row className="mt-1">
                  <div>
                    <span>{adress.street}</span>{" "}
                    <span className="ml-1">{adress.neighborhood}</span>
                  </div>
                  <div>
                    <span>{adress.city}</span>{" "}
                    <span className="ml-1">{adress.state}</span>
                  </div>
                  {adress.street !== "" ? (
                    <div>
                      <span>
                        FRETE: <span style={{ color: "green" }}>GRATIS!!!</span>
                      </span>{" "}
                    </div>
                  ) : (
                    ""
                  )}
                </Row>
              </Col>
              <Col></Col>
            </Row>

            <Row className="mt-2">
              <Button
                onClick={() => {
                  if (param.id) {
                    addCart(Number(param.id));
                  }
                }}
              >
                <MdOutlineLocalGroceryStore /> Adicionar ao Carrinho
              </Button>
            </Row>
          </Col>
        </Row>
        <Row className="ml-1 mt-10 bg-login p-3">
          <Row className="py-6">
            <Row>
              <h3>Informações</h3>
            </Row>
            <Row>
              <Col>
                <div>
                  <span>Nome: </span>
                  {data?.cars.name_car}{" "}
                  <span>Fabricante: {data?.cars.model} </span>
                </div>
                <div>
                  <span>Ano: </span>
                  {data?.cars.year}
                </div>
                <div>
                  <span>
                    Descrição: Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Perferendis sapiente assumenda reiciendis
                    quae quibusdam at veritatis voluptatem placeat magnam nisi?
                    Odit vel vero quam praesentium facere voluptates, quidem
                    nisi est.{" "}
                  </span>{" "}
                </div>
              </Col>
            </Row>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default ProductPage;
