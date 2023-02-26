import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Footer() {
  return (
    <Typography
      variant="body2"
      id="Footer"
      color="text.secondary"
      align="center"
    >
      {"Copyright © "} {new Date().getFullYear()}{" "}
      <Link
        color="inherit"
        href="https://www.linkedin.com/in/salvatore-amideo-aa3261126/"
      >
        made by Salvatore Amideo
      </Link>{" "}
    </Typography>
  );
}

export default Footer;
