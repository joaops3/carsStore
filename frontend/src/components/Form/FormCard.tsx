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
import { UsersInterface } from "../../interfaces/interfaces";
import InputMask from "react-input-mask";
import DatePicker from "react-datepicker";
import { parseDate, formatDate } from "../../helpers/helpers";

interface Props {
  operation: string;
  data?: UsersInterface;
}

const FormCard: React.FC<Props> = ({ operation, data }) => {
  // const [data, setData] = useState<UsersInterface | object>({});

  const {
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
    control,
  } = useForm<UsersInterface>({ defaultValues: data });

  const submit: SubmitHandler<UsersInterface> = (data) => {};

  return (
    <Container className="mt-5">
      <Form className="bg-login p-4" onSubmit={handleSubmit(submit)}>
        <Row>
          <Col md={6}>
            <Row>
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
            </Row>
            <Row className="mt-2">
              <Form.Group as={Col} md={12}>
                <Form.Label>Numero Cartão</Form.Label>
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
                <Form.Label>Codigo</Form.Label>
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
                <Form.Label>Data de validade</Form.Label>
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
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <div className="card-container">
              <div className="text-container">
                <div className="card-text">2222 2222 2222 2222</div>
                <div className="card-text">Napoleao Bonapart</div>
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
