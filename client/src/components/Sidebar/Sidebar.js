import React from "react";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { mainListItems } from "./listItems";
import Drawer from "./Drawer";
import Logo from "../../resources/IconMenu.jpg";

const Sidebar = ({ open, onClick }) => {
  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <img
          src={Logo}
          id="LogoDrawer"
          width="100"
          height="50"
          alt="Logo Medicina"
        />
        <IconButton onClick={onClick}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">{mainListItems}</List>
    </Drawer>
  );
};

export default Sidebar;
