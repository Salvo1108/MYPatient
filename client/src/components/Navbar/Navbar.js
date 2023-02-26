import { useDispatch } from "react-redux";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import React from "react";
import { logoutUser } from "../../redux/UserAuthentication";
import AppBar from "./AppBar";

const Navbar = ({ open, onClick }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const doLogout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <AppBar position="absolute" open={open}>
      <Toolbar
        sx={{
          pr: "24px", // keep right padding when drawer closed
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={onClick}
          sx={{
            marginRight: "36px",
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          Medical Practice Management
        </Typography>
        <IconButton color="inherit" onClick={(event) => doLogout(event)}>
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
