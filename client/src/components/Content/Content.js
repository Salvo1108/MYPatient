import React from "react";
import { Outlet } from "react-router-dom";

const Content = () => {
  return (
    <>
      <Outlet />
    </>
    // <Box
    //   component="main"
    //   sx={{
    //     backgroundColor: (theme) =>
    //       theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[900],
    //     flexGrow: 1,
    //     overflow: "auto",
    //   }}
    // >
    // {/* </Box> */}
  );
};

export default Content;
