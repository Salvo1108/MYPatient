import DashboardIcon from "@mui/icons-material/Dashboard";
import ArticleIcon from "@mui/icons-material/Article";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import ListItem from "./listItem";
import React from "react";

export const mainListItems = (
  <>
    <ListItem icon={DashboardIcon} name="Dashboard" />
    <ListItem icon={AssignmentIndIcon} name="Insert" />
    <ListItem icon={ArticleIcon} name="List" />
  </>
);
