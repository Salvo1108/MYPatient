import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

const listItem = ({ icon: Icon, name }) => {
  return (
    <ListItemButton component={Link} to={`/${name.toLowerCase()}`}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={name} />
    </ListItemButton>
  );
};

export default listItem;
