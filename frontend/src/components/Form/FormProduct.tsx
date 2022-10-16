import React, { useState, useCallback } from "react";
import {
  Container,
  Form,
  Col,
  Row,
  Button,
  Popover,
  OverlayTrigger,
  ProgressBar,
  Table,
  Image,
} from "react-bootstrap";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { CarsInterface } from "../../interfaces/interfaces";
import InputMask from "react-input-mask";
import { useDropzone } from "react-dropzone";
import CarsService from "../../services/CarsService";
import CurrencyInput from "react-currency-input-field";
import { uniqueId } from "lodash";
import { filesize } from "filesize";
import { AiOutlineClose } from "react-icons/ai";
import { onlyNumbers, removeSpecialCharacters } from "../../helpers/helpers";
import { toast } from "react-toastify";

interface Props {
  operation: string;
  data?: CarsInterface;
}

interface IUploadedFiles {
  key: string;
  preview: string;
  name: string;
  readableSize: string;
  url: string;
  progress: number;
  error: string;
  uploaded: boolean;
}

const FormProduct: React.FC<Props> = ({ operation, data }) => {
  const [amount, setAmount] = useState<string | undefined>("0");
  const [uploadedFiles, setUploadedFiles] = useState<IUploadedFiles[]>([]);

  const {
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
    control,
  } = useForm<CarsInterface>({ defaultValues: data });

  const onDrop = useCallback((acceptedFiles: any) => {
    const newList = acceptedFiles.map((file: any) => ({
      key: uniqueId(),
      preview: URL.createObjectURL(file),
      name: file.name,
      readableSize: filesize(file.size),
      url: null,
      progress: 0,
      error: null,
      uploaded: false,
    }));

    setUploadedFiles((prev) => [...prev, ...newList]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 5,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".svg", ".webp"],
    },
  });

  const submit: SubmitHandler<CarsInterface> = (data) => {
    if (process.env.REACT_APP_ADMIN != "ADMIN") {
      return;
    }

    const formdata = new FormData()
    uploadedFiles.forEach((file)=> {formdata.append("carimg", file.key)})

    let cloneData = Object.assign({}, data);
    cloneData.price = Number(onlyNumbers(`${data.price}`))
    cloneData.Carimgs = uploadedFiles;
    cloneData.model = removeSpecialCharacters(cloneData.model)
   
     CarsService() //@ts-ignore
      .setCars(cloneData)
      .then((response) => {toast.success("Carro cadastrado com sucesso")})
      .catch((e) => {toast.error(e)});
  };

  const handleDelete = (id: string) => {
    setUploadedFiles((prev) => prev.filter((item) => item.key != id));
  };

  return (
    <>
      <Container className="mt-5">
        <Form
          className="bg-login p-4"
          onSubmit={handleSubmit(submit)}
          encType="multipart/form-data"
        >
          <Row>
            <Form.Group as={Col} md={6}>
              <Form.Group as={Col} md={12}>
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

              <Form.Group as={Col} md={12}>
                <Form.Label>Fabricante</Form.Label>
                <Controller
                  name="model"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <InputMask
                      type="model"
                      mask="aaaaaaaaaa"
                      className="input"
                      placeholder="Fabricante"
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

              <Form.Group as={Col} md={12}>
                <Form.Label>Ano de Fabricação</Form.Label>
                <Controller
                  control={control}
                  name={"year"}
                  render={({ field: { onChange, value } }) => (
                    <InputMask
                      id={"year"}
                      className={"input"}
                      type="text"
                      mask="9999"
                      placeholder="Ano de fabricação"
                      value={value}
                      defaultValue={getValues("year")}
                      onChange={(e) => {
                        onChange(e);
                      }}
                    />
                  )}
                  rules={{
                    required: "O ano de fabricação é obrigatorio",
                    maxLength: 50,
                  }}
                />
                {errors?.year && (
                  <Form.Text className="errorsMessage">
                    {errors?.year.message}
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group as={Col} md={12}>
                <Form.Label>Preço</Form.Label>
                <Controller
                  control={control}
                  name={"price"}
                  render={({ field: { onChange, value } }) => (
                    <CurrencyInput
                      id="amount"
                      name="amount"
                      placeholder="R$ 0.00"
                      className="input"
                      decimalSeparator={"."}
                      groupSeparator={","}
                      allowNegativeValue={false}
                      allowDecimals={true}
                      decimalsLimit={2}
                      decimalScale={2}
                      disableGroupSeparators={true}
                      prefix={"R$"}
                      value={value}
                      onValueChange={(value) => {
                        onChange(value);
                      }}
                    />
                  )}
                  rules={{ required: "O preço é obrigatorio", maxLength: 50 }}
                />
                {errors?.price && (
                  <Form.Text className="errorsMessage">
                    {errors?.price.message}
                  </Form.Text>
                )}
              </Form.Group>
            </Form.Group>

            {/*-------------table-------------    */}
            <Form.Group as={Col} md={6} className={"mt-4"}>
              <Table>
                <tbody></tbody>
                {!!uploadedFiles.length &&
                  uploadedFiles.map((file, index) => (
                    <>
                      <tr key={index}>
                        {file.preview && (
                          <td>
                       
                            <Image
                              src={file.preview}
                              width={50}
                              height={50}
                              style={{ borderRadius: "5px" }}
                            ></Image>
                          </td>
                        )}

                        {file.name && <td>{file.name}</td>}
                        {/* 
                  {!file.uploaded &&
                    !file.error &&(<ProgressBar now={100}></ProgressBar>)}
                     */}
                        <td onClick={(e) => handleDelete(file.key)}>
                          <AiOutlineClose
                            size={40}
                            style={{ cursor: "pointer" }}
                          ></AiOutlineClose>
                        </td>
                      </tr>
                    </>
                  ))}
              </Table>
            </Form.Group>
          </Row>

          <Row className="mt-5">
            <Form.Group as={Col} md={6}>
              <div {...getRootProps()} className="drag">
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Arraste os arquivos</p>
                ) : (
                  <p>Click ou arraste os arquivos</p>
                )}
              </div>
            </Form.Group>
          </Row>

          <div className="text-end mt-3">
            <Button type="submit">Salvar</Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default FormProduct;
