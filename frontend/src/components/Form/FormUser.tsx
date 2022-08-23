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
import {parseDate, formatDate} from "../../helpers/helpers"

interface Props {
  operation: string;
  data?: UsersInterface;
}

const [data, setData] = useState<UsersInterface | object>({});
const [nascimento, setNascimento] = useState<Date | null>();
const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
const [confirmationError, setConfirmationError] = useState<boolean>(false)

const FormUser: React.FC<Props> = ({ operation, data }) => {
  const {
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
    control,
  } = useForm<UsersInterface>({ defaultValues: data });

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Requisitos</Popover.Header>
      <Popover.Body>
        <ul>
          <li>A senha deve conter 1 Letra Maiuscula</li>
          <li>A senha deve conter 1 Letra Minuscula</li>
          <li>A senha deve conter 1 numero</li>
          <li>A senha deve conter 1 caractere especial</li>
          <li>A senha deve conter min 8 e max 20 caracteres</li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const submit: SubmitHandler<UsersInterface> = (data) => {
    if(data.password !== passwordConfirmation){
      setConfirmationError(true)
      return
    }
    let dataClone = Object.assign({}, data)

    let birthDate = formatDate(new Date(dataClone.nascimento), "yyyy-mm-dd")
    dataClone.nascimento = birthDate

    
    
    


  };

  return (
    <Container className="mt-5">
      <Form className="bg-login p-4" onSubmit={handleSubmit(submit)}>
        <Row>
          <Form.Group as={Col} md={3}>
            <Form.Label>name</Form.Label>
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
                {errors?.name?.message?.toString()}
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group as={Col} md={3}>
            <Form.Label>Email</Form.Label>
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputMask
                  type="email"
                  mask=""
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
          <Form.Group as={Col} md={3}>
            <Form.Label>Nascimento</Form.Label>
            <Controller
              name="nascimento"
              control={control}
              render={({ field: { onChange, value } }) => (
                <DatePicker
                  dateFormat={"P"}
                  value={value.toString()}
                  selected={nascimento}
                  onChange={(e) => {
                    onChange(e), setNascimento(e);
                  }}
                  customInput={<InputMask mask="99/99/9999" />}
                  showDisabledMonthNavigation
                  className="form-control"
                  autoComplete="off"
                  dropdownMode="select"
                  showMonthDropdown
                  showYearDropdown
                  adjustDateOnChange
                />
              )}
              rules={{ required: "O nascimento é obrigatorio" }}
            />
            {errors.nascimento && (
              <Form.Text className="errorsMessage">
                {errors.nascimento?.message}
              </Form.Text>
            )}
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md={3}>
            <Form.Label>Password</Form.Label>
            <Controller
              name="password"
              control={control}
              render={({ field: { onChange, value } }) => (
                <OverlayTrigger
                  trigger="click"
                  placement="right"
                  overlay={popover}
                >
                  <InputMask
                    type="password"
                    mask=""
                    value={value}
                    defaultValue={getValues("password")}
                    onChange={(e) => onChange(e)}
                  ></InputMask>
                </OverlayTrigger>
              )}
              rules={{ required: "A senha é obrigatoria", maxLength: 40 }}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group>
            <Form.Label>Comfirmação de senha</Form.Label>
            <Form.Control
              type="password"
              value={passwordConfirmation}
              onChange={(e) => {
                setPasswordConfirmation(e.target.value);
              }}
            ></Form.Control>
         { confirmationError &&  <Form.Text>As senhas não são iguais</Form.Text>}
          </Form.Group>
        </Row>
        <Row>
          <Button type="submit"></Button>
        </Row>
      </Form>
    </Container>
  );
};

export default FormUser;
