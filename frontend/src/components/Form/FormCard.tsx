import React, { useState } from "react";
import {
  Container,
  Form,
  Col,
  Row,
  Button,
  Popover,
  OverlayTrigger,
} from "react-bootstrap";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { CardsInterface } from "../../interfaces/interfaces";
import InputMask from "react-input-mask";
import DatePicker from "react-datepicker";
import { parseDate, formatDate } from "../../helpers/helpers";
import UserService from "../../services/UserService";
import Toast from "../toast/Toast"
import {toast} from "react-toastify"
import {useParams} from "react-router-dom"

interface Props {
  operation: string;
  data?: CardsInterface;
}

const FormCard: React.FC<Props> = ({ operation, data }) => {
  // const [data, setData] = useState<UsersInterface | object>({});
  const [number, setNumber] = useState<string>("")
  const param = useParams()
  const {id} = param
  const {
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
    control,
  } = useForm<CardsInterface>({ defaultValues: data });

  const submit: SubmitHandler<CardsInterface> = async (data) => {
    // if(process.env.REACT_APP_ADMIN != "ADMIN") {
    //   return
    // }
    let dataClone = Object.assign({}, data);
    
    if(id){

      await UserService().registerCard(id, dataClone).then((response) => {toast.success("Cartão cadastrado com sucesso")}).catch(e => {console.log(e); toast.error("error no cadastro")})
    }
  };

  return (
    <Container className="mt-5">
      <Form className="bg-login p-4" onSubmit={handleSubmit(submit)}>
        <Row>
          <Col md={6}>
           {/*   <Row>
             <Form.Group as={Col} md={12}>
                <Form.Label>Name</Form.Label>
                <Controller
                  control={control}
                  name={"name"}
                  render={({ field: { onChange, value } }) => (
                    <InputMask
                      id={"name"}
                      className={"input"}
                      type="text"
                      mask=""
                      placeholder="Nome"
                      value={value}
                      defaultValue={getValues("name")}
                      onChange={(e) => {
                        onChange(e);
                      }}
                    />
                  )}
                  rules={{ required: "O nome é obrigatorio", maxLength: 50 }}
                />
                {errors?.name && (
                  <Form.Text className="errorsMessage">
                    {errors?.name.message}
                  </Form.Text>
                )}
              </Form.Group>
            </Row>
            <Row className="mt-2">
              <Form.Group as={Col} md={12}>
                <Form.Label>CPF</Form.Label>
                <Controller
                  control={control}
                  name={"name"}
                  render={({ field: { onChange, value } }) => (
                    <InputMask
                      id={"name"}
                      className={"input"}
                      type="text"
                      mask="999.999.999-99"
                      placeholder="Nome"
                      value={value}
                      defaultValue={getValues("name")}
                      onChange={(e) => {
                        onChange(e);
                      }}
                    />
                  )}
                  rules={{ required: "O nome é obrigatorio", maxLength: 50 }}
                />
                {errors?.name && (
                  <Form.Text className="errorsMessage">
                    {errors?.name.message}
                  </Form.Text>
                )}
              </Form.Group>
            </Row> */}
            <Row className="mt-2">
              <Form.Group as={Col} md={12}>
                <Form.Label>Numero Cartão</Form.Label>
                <Controller
                  control={control}
                  name={"card_number"}
                  render={({ field: { onChange, value } }) => (
                    <InputMask
                      id={"name"}
                      className={"input"}
                      type="text"
                      mask="9999 9999 9999 9999"
                      placeholder="9999 9999 9999 9999"
                      value={value}
                      defaultValue={getValues("card_number")}
                      onChange={(e) => {
                        onChange(e);
                        ; setNumber(e.target.value)
                      }}
                    />
                  )}
                  rules={{ required: "O nome é obrigatorio", maxLength: 50 }}
                />
                {errors?.card_number && (
                  <Form.Text className="errorsMessage">
                    {errors?.card_number.message}
                  </Form.Text>
                )}
              </Form.Group>
            </Row>
            <Row className="mt-2">
              <Form.Group as={Col} md={12}>
                <Form.Label>Código</Form.Label>
                <Controller
                  control={control}
                  name={"card_code"}
                  render={({ field: { onChange, value } }) => (
                    <InputMask
                      id={"name"}
                      className={"input"}
                      type="text"
                      mask="999"
                      placeholder="999"
                      value={value}
                      defaultValue={getValues("card_code")}
                      onChange={(e) => {
                        onChange(e);
                      }}
                    />
                  )}
                  rules={{ required: "O nome é obrigatorio", maxLength: 50 }}
                />
                {errors?.card_code && (
                  <Form.Text className="errorsMessage">
                    {errors?.card_code.message}
                  </Form.Text>
                )}
              </Form.Group>
            </Row>
            {/* <Row className="mt-2">
              <Form.Group as={Col} md={12}>
                <Form.Label>Data de validade</Form.Label>
                <Controller
                  control={control}
                  name={"card_date"}
                  render={({ field: { onChange, value } }) => (
                    <InputMask
                      id={"name"}
                      className={"input"}
                      type="text"
                      mask=""
                      placeholder="Nome"
                      value={value}
                      defaultValue={getValues("card_date")}
                      onChange={(e) => {
                        onChange(e);
                      }}
                    />
                  )}
                  rules={{ required: "O nome é obrigatorio", maxLength: 50 }}
                />
                {errors?.card_date && (
                  <Form.Text className="errorsMessage">
                    {errors?.card_date.message}
                  </Form.Text>
                )}
              </Form.Group>
            </Row> */}
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <div className="card-container">
              <div className="text-container">
                <div className="card-text">{number}</div>
                <div className="card-text">Imperador Napoleão</div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="text-end mt-3">
          <Button type="submit">Salvar</Button>
        </div>
      </Form>
    </Container>
  );
};

export default FormCard;
