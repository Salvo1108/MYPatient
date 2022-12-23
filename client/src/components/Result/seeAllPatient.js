import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// core components
import { useSelector } from "react-redux";

function generateRandom() {
  var length = 8,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

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
      <Box sx={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={resultAllPatient}
          columns={columns}
          getRowId={(row) => generateRandom()}
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
