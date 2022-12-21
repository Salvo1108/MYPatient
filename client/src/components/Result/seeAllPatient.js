import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// reactstrap components
import { Container, Row, Col } from "reactstrap";
// core components
import { useSelector } from "react-redux";

const SeePatient = () => {
  const { resultAllPatient } = useSelector((store) => store.patient);

  const columns = [
    {
      field: "name",
      headerName: "Name",
      minWidth: 325,
      type: "string",
      sortable: true,
    },
    {
      field: "surname",
      headerName: "Surname",
      minWidth: 290,
      type: "string",
      sortable: true,
    },
    {
      field: "amka",
      headerName: "AMKA",
      minWidth: 255,
      type: "string",
      sortable: true,
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 255,
      type: "string",
      sortable: true,
    },
    {
      field: "number",
      headerName: "Number",
      minWidth: 255,
      type: "string",
      sortable: true,
    },
    {
      field: "address",
      headerName: "Address",
      minWidth: 255,
      type: "string",
      sortable: true,
    },
  ];

  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "350px",
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
                On this page you can view all patient information
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={resultAllPatient}
          columns={columns}
          getRowId={(row) => row.amka}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          components={{
            Toolbar: GridToolbar,
          }}
        />
      </Box>
    </>
  );
};
export default SeePatient;
