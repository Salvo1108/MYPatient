// reactstrap components
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// core components
import {
  registerPatient,
} from "../../redux/Patient";
import { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InsertPatient = () => {
  const {
    isOkInsertPatient,
    isRejectedInsertPatient,
  } = useSelector((store) => store.patient);
  
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [amka, setAMKA] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const insertPatient = (e) => {
    e.preventDefault();
    dispatch(registerPatient({ name, surname, amka, address, number, email }));
    setName("");
    setSurname("");
    setAMKA("");
    setAddress("");
    setNumber("");
    setEmail("");
    toast.success("Successful!");
    if (isRejectedInsertPatient) {
      toast.error("Error!");
    }
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <ContactPageIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Patient Data
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={insertPatient}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  type="text"
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  value={surname}
                  onChange={(event) => setSurname(event.target.value)}
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="amka"
                  value={amka}
                  onChange={(event) => setAMKA(event.target.value)}
                  label="AMKA"
                  name="amka"
                  type="number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={number}
                  onChange={(event) => setNumber(event.target.value)}
                  id="number"
                  label="Number"
                  type="number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                  id="address"
                  label="Address"
                  name="address"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Insert
            </Button>
          </Box>
        </Box>
      </Container>
      {isOkInsertPatient && <ToastContainer />}
      {isRejectedInsertPatient && <ToastContainer />}
    </>
  );
};

export default InsertPatient;
