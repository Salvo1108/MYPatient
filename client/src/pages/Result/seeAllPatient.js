import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import {AllPatient} from "../../redux/Patient";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

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
  useEffect(() => {
    dispatch(AllPatient());
  }, [dispatch]);


  const { resultAllPatient } = useSelector((store) => store.patient);
  const dispatch = useDispatch();

  const columns = [
    {
      field: "name",
      headerName: "Name",
      minWidth: 180,
      type: "string",
      sortable: true,
    },
    {
      field: "surname",
      headerName: "Surname",
      minWidth: 180,
      type: "string",
      sortable: true,
    },
    {
      field: "amka",
      headerName: "AMKA",
      minWidth: 180,
      type: "string",
      sortable: true,
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 210,
      type: "string",
      sortable: true,
    },
    {
      field: "number",
      headerName: "Number",
      minWidth: 180,
      type: "string",
      sortable: true,
    },
    {
      field: "address",
      headerName: "Address",
      minWidth: 250,
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
