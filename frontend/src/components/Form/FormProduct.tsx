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

const FormProduct: React.FC<Props> = ({ operation, data }) => {
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
          <Form.Group as={Col} md={5}>
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
          <Form.Group as={Col} md={5}>
            <Form.Label>Fabricante</Form.Label>
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputMask
                  type="email"
                  mask=""
                  className="input"
                  placeholder="Email"
                  value={value}
                  defaultValue={getValues("email")}
                  onChange={(e) => onChange(e)}
                ></InputMask>
              )}
              rules={{ required: "O email é obrigatorio", maxLength: 40 }}
            />
            {errors.email && (
              <Form.Text className="errorsMessage">
                {errors.email?.message}
              </Form.Text>
            )}
          </Form.Group>
        </Row>
        <Row className="mt-2">
        <Form.Group as={Col} md={5}>
            <Form.Label>Ano de Fabricação</Form.Label>
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
        <Form.Group as={Col} md={5}>
            <Form.Label>Preço</Form.Label>
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
        <Row className="mt-4">
        <Form.Group as={Col} md={5}>
            <Form.Label>img</Form.Label>
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

        <div className="text-end mt-3">
          <Button type="submit">Salvar</Button>
        </div>
      </Form>
    </Container>
  );
};

export default FormProduct;
