import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useContext,
} from "react";
import { Container, Row, Col, Button, Modal, Table } from "react-bootstrap";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
import BasketItem from "./CartItem";
import { addMoneyRealMask } from "../../helpers/helpers";
import CarsService from "../../services/CarsService";
import { CarsInterface } from "../../interfaces/interfaces";
import { CartContext } from "../../context/CartProvider";
interface DataInterface {
  cars: CarsInterface[];
}

const Basket = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState<any>(true);
  const [data, setData] = useState<DataInterface>({} as DataInterface);
  const { cart, removeCart } = useContext(CartContext);

  const [basket, setBasket] = useState((prev: any) => {
    let actualCart = localStorage.getItem("cart");
    if (actualCart) {
      return JSON.parse(actualCart);
    } else {
      return [];
    }
  });

  const getData = useCallback(() => {
    CarsService()
      .getAllCars()
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [basket]);

  useEffect(() => {
    getData();
  }, [cart, removeCart]);

  const filteredList = useMemo(() => {
    if (data.cars) {
      let newList: any[] = [];
      data?.cars.filter((item: CarsInterface) => {
        for (let teste of cart) {
          if (teste.id === item.id) newList.push(item);
        }
      });
      return newList;
    }
  }, [data, removeCart, cart]);

  const total = useMemo(() => {
    if (data.cars) {
      let soma: number = 0;
      data?.cars.filter((item: CarsInterface) => {
        for (let teste of cart) {
          if (teste.id === item.id) soma += item.price;
        }
      });
      return soma;
    }
  }, [data, removeCart, cart]);

  return (
    <>
      <Header fixed={false} />
      <Container className="">
        <Row className="products ">
          <Col md={7} className="mt-5 mx-3 bg-login">
            <Row>
              <h2>Seus Produtos: </h2>
            </Row>
            <Table>
              <thead></thead>
              <tbody>
                {filteredList &&
                  filteredList?.map((item: CarsInterface, key: number) => {
                    return (
                      <BasketItem
                        key={key}
                        id={item.id}
                        name_car={item.name_car}
                        Carimgs={item.Carimgs}
                        price={item.price}
                        model={item.model}
                        year={item.year}
                        deleteBasket={removeCart}
                      ></BasketItem>
                    );
                  })}
              </tbody>
            </Table>
          </Col>
          <Col md={4} className="mt-5">
            <Row>
              <h2>Comprar agora</h2>
            </Row>
            <Row>
              <Col sm={12} className={"table"}></Col>
            </Row>
            <Row className="my-3">
              <Col md={8}>
                <div>FRETE: </div>
              </Col>
              <Col md={4}>
                <div style={{ color: "green" }}>GRATIS!!</div>
              </Col>
            </Row>
            <Row className="my-3">
              <Col md={8}>
                <div>TOTAL:</div>
              </Col>
              <Col md={4}>
                <div style={{ color: "green" }}>{addMoneyRealMask(total)}</div>
              </Col>
            </Row>

            <Row>
              <Button
                bsPrefix="custom-class"
                className="btn-buy"
                onClick={() => {
                  setShow(true);
                }}
              >
                {" "}
                FINALIZAR
              </Button>
            </Row>
          </Col>
        </Row>
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Finalizar Pedido</Modal.Title>
          </Modal.Header>
          {user ? (
            <Modal.Body>
              <Row className="mb-5">
                <h6>Cartões disponíveis:</h6>
               
                  <div>cartão 1</div>
                
              </Row>
              <Row className="mt-2">
                <Button variant="warning">Finalizar pedido</Button>
              </Row>
            </Modal.Body>
          ) : (
            <Modal.Body>
              <Row>
                <h6>
                  Você não tem nenhum cartão cadastrado, adicione um cartão para
                  prosseguir.
                </h6>
              </Row>
              <Row className="mt-4">
                <Link
                  className={"btn btn-warning mt-5"}
                  to={"/profile/registerCard"}
                >
                  Adicionar Cartão
                </Link>
              </Row>
            </Modal.Body>
          )}
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                setShow(false);
              }}
            >
              Cancelar
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
      <Modal show={true} className="mobile-modal">
        <Modal.Header>
          <Modal.Title> Atenção!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Acesse nosso app para melhor experiência</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Basket;
