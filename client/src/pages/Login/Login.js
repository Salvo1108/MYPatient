import React from "react";
import { Input, FormText } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/UserAuthentication";
import { useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logoMed from "../../resources/Icon_Header.jpg";
import backgroundMed from "../../resources/Login.jpg";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const doLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(" + backgroundMed + ")",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={logoMed} id="LogoMed" alt="CodingDS IMG"></img>
            <Typography variant="h4" className="mb-0" id="LabelMyPatient">
              MYPatient
            </Typography>
            <br></br>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form onSubmit={(event) => doLogin(event)}>
              <FormText id="labelLoginEmail">Email:</FormText>
              <Input
                id="emailLogin"
                className="input-transparent pl-3"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                required
                name="email"
                placeholder="Email"
              />
              <FormText id="labelLoginPassword">Password:</FormText>
              <Input
                id="passwordLogin"
                className="input-transparent pl-3"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                required
                name="password"
                placeholder="Password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
