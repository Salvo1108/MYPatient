// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  FormText,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";
// core components
import {
  registerPatient,
  setName,
  setSurname,
  setAMKA,
  setAddress,
  setNumber,
  setEmail,
} from "../redux/Patient";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InsertPatient = () => {
  const {
    name,
    surname,
    amka,
    address,
    number,
    email,
    isOkInsertPatient,
    isRejectedInsertPatient,
  } = useSelector((store) => store.patient);
  const dispatch = useDispatch();

  const insertPatient = (e) => {
    e.preventDefault();
    dispatch(registerPatient({ name, surname, amka, address, number, email }));
    toast.success("Successful!");
    if (isRejectedInsertPatient) {
      toast.error("Error!");
    }
  };

  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "200px",
          backgroundImage:
            "url(" + require("../../resources/backgroundInsert.jpg") + ")",
          backgroundSize: "auto",
          backgroundPosition: "right",
          backgroundRepeat: "repeat-y",
        }}
      >
        <span className="mask bg-gradient-default opacity-8" />
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <p className="text-white mt-0 mb-5">
                On this page you can enter your patients' information
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container id="InserimentoPazienteTabella">
        <Row id="TabellaInserimento">
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Patient Information</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <form onSubmit={(event) => insertPatient(event)}>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormText id="labelName">Name:</FormText>
                        <Input
                          id="name"
                          className="form-control-alternative"
                          onChange={(event) =>
                            dispatch(setName(event.target.value))
                          }
                          type="text"
                          required
                          name="name"
                          placeholder="Name"
                        />
                      </Col>
                      <Col lg="6">
                        <FormText id="labelSurname">Surname:</FormText>
                        <Input
                          id="surname"
                          className="form-control-alternative"
                          value={surname}
                          onChange={(event) =>
                            dispatch(setSurname(event.target.value))
                          }
                          type="text"
                          required
                          name="surname"
                          placeholder="Surname"
                        />
                      </Col>
                      <Col lg="6">
                        <FormText id="labelSex">AMKA:</FormText>
                        <Input
                          id="amka"
                          className="form-control-alternative"
                          value={amka}
                          onChange={(event) =>
                            dispatch(setAMKA(event.target.value))
                          }
                          type="number"
                          required
                          name="amka"
                          placeholder="01051119503"
                        />
                      </Col>
                      <Col lg="6">
                        <FormText id="labelEmail">Email:</FormText>
                        <Input
                          id="email"
                          className="form-control-alternative"
                          value={email}
                          onChange={(event) =>
                            dispatch(setEmail(event.target.value))
                          }
                          type="text"
                          required
                          name="email"
                          placeholder="Email"
                        />
                      </Col>
                      <Col lg="6">
                        <FormText id="labelPhoneNumber">Phone Number:</FormText>
                        <Input
                          id="number"
                          className="form-control-alternative"
                          value={number}
                          onChange={(event) =>
                            dispatch(setNumber(event.target.value))
                          }
                          type="number"
                          required
                          name="number"
                          placeholder="Phone Number"
                        />
                      </Col>
                      <Col lg="6">
                        <FormText id="labelAddress">Address:</FormText>
                        <Input
                          id="address"
                          className="form-control-alternative"
                          value={address}
                          onChange={(event) =>
                            dispatch(setAddress(event.target.value))
                          }
                          type="text"
                          required
                          name="address"
                          placeholder="Address"
                        />
                      </Col>
                    </Row>
                  </div>
                  <Button type="submit" id="BottoneInsert">
                    Insert
                  </Button>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      {isOkInsertPatient && <ToastContainer />}
      {isRejectedInsertPatient && <ToastContainer />}
    </>
  );
};

export default InsertPatient;
