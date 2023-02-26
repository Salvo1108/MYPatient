import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar open={open} onClick={toggleDrawer} />
        <Sidebar open={open} onClick={toggleDrawer} />
        <Outlet />
      </Box>
      <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
        <Footer />
      </Container>
    </>
  );
}

export default Layout;
