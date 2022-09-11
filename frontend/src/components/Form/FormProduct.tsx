import React, { useState, useCallback } from "react";
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
import { CarsInterface } from "../../interfaces/interfaces";
import InputMask from "react-input-mask";
import DatePicker from "react-datepicker";
import { parseDate, formatDate } from "../../helpers/helpers";
import {useDropzone} from 'react-dropzone'

interface Props {
  operation: string;
  data?: CarsInterface;
}

const FormProduct: React.FC<Props> = ({ operation, data }) => {
  // const [data, setData] = useState<CarsInterface | object>({});

  const {
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
    control,
  } = useForm<CarsInterface>({ defaultValues: data });

  const onDrop = useCallback((acceptedFiles:any) => {
    // Do something with the files
  }, [])
 
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  

  const submit: SubmitHandler<CarsInterface> = (data) => {};

  return (
    <Container className="mt-5">
      <Form className="bg-login p-4" onSubmit={handleSubmit(submit)}>
        <Row>
          <Form.Group as={Col} md={5}>
            <Form.Label>Name</Form.Label>
            <Controller
              control={control}
              name={"name_car"}
              render={({ field: { onChange, value } }) => (
                <InputMask
                  id={"name_car"}
                  className={"input"}
                  type="text"
                  mask=""
                  placeholder="Nome"
                  value={value}
                  defaultValue={getValues("name_car")}
                  onChange={(e) => {
                    onChange(e);
                  }}
                />
              )}
              rules={{ required: "O nome é obrigatorio", maxLength: 50 }}
            />
            {errors?.name_car && (
              <Form.Text className="errorsMessage">
                {errors?.name_car.message}
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group as={Col} md={5}>
            <Form.Label>Fabricante</Form.Label>
            <Controller
              name="model"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputMask
                  type="model"
                  mask=""
                  className="input"
                  placeholder="Email"
                  value={value}
                  defaultValue={getValues("model")}
                  onChange={(e) => onChange(e)}
                ></InputMask>
              )}
              rules={{ required: "O model é obrigatorio", maxLength: 40 }}
            />
            {errors.model && (
              <Form.Text className="errorsMessage">
                {errors.model?.message}
              </Form.Text>
            )}
          </Form.Group>
        </Row>
        <Row className="mt-2">
          <Form.Group as={Col} md={5}>
            <Form.Label>Ano de Fabricação</Form.Label>
            <Controller
              control={control}
              name={"year"}
              render={({ field: { onChange, value } }) => (
                <InputMask
                  id={"year"}
                  className={"input"}
                  type="text"
                  mask=""
                  placeholder="Nome"
                  value={value}
                  defaultValue={getValues("year")}
                  onChange={(e) => {
                    onChange(e);
                  }}
                />
              )}
              rules={{ required: "O nome é obrigatorio", maxLength: 50 }}
            />
            {errors?.year && (
              <Form.Text className="errorsMessage">
                {errors?.year.message}
              </Form.Text>
            )}
          </Form.Group>
        </Row>
        <Row className="mt-2">
          <Form.Group as={Col} md={5}>
            <Form.Label>Preço</Form.Label>
            <Controller
              control={control}
              name={"price"}
              render={({ field: { onChange, value } }) => (
                <InputMask
                  id={"price"}
                  className={"input"}
                  type="text"
                  mask=""
                  placeholder="Nome"
                  value={value}
                  defaultValue={getValues("price")}
                  onChange={(e) => {
                    onChange(e);
                  }}
                />
              )}
              rules={{ required: "O nome é obrigatorio", maxLength: 50 }}
            />
            {errors?.price && (
              <Form.Text className="errorsMessage">
                {errors?.price.message}
              </Form.Text>
            )}
          </Form.Group>
        </Row>
        {/* <Row className="mt-4">
          <Form.Group as={Col} md={5}>
            <Form.Label>img</Form.Label>
            <Controller
              control={control}
              name={"Carimgs"}
              render={({ field: { onChange, value } }) => (
                <InputMask
                  id={"Carimgs"}
                  className={"input"}
                  type="text"
                  mask=""
                  placeholder="Nome"
                  value={value}
                  defaultValue={getValues("Carimgs")}
                  onChange={(e) => {
                    onChange(e);
                  }}
                />
              )}
              rules={{ required: "O nome é obrigatorio", maxLength: 50 }}
            />
            {errors?.Carimgs && (
              <Form.Text className="errorsMessage">
                {errors?.Carimgs.message}
              </Form.Text>
            )}
          </Form.Group>
        </Row> */}
        <Row className="mt-5">
       <Col md={6}>
       <div {...getRootProps()} className="drag">
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Arraste os arquivos</p>
            ) : (
              <p>Click ou arraste os arquivos</p>
            )}
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

export default FormProduct;
