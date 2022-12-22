import * as React from "react";
import { AppBar, Toolbar, Typography, Link } from "@material-ui/core";

const Footer = () => {
  return (
    <>
      <AppBar
        position="static"
        id="Footer"
        elevation={0}
        component="footer"
        color="default"
      >
        <Toolbar style={{ justifyContent: "center" }}>
          <Typography variant="body2" color="white" align="center">
            {"Copyright © "} {new Date().getFullYear()}{" "}
            <Link
              color="inherit"
              href="https://www.linkedin.com/in/salvatore-amideo-aa3261126/"
            >
              made by Salvatore Amideo
            </Link>{" "}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Footer;
