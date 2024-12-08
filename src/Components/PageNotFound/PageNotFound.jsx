import { Box, Typography } from "@mui/material";
import React from "react";
const pnf = { height: "50vh" };
const pnfTypo = { fontFamily: "Poppins, sans-serif", fontSize: "2rem" };
const PageNotFound = () => {
  return (
    <>
      <Box sx={pnf} display="flex" justifyContent="center" alignItems="center">
        <img
          src={require("../../Images/pnf.gif")}
          alt="loading..."
          width={200}
        />
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography sx={pnfTypo}>Page Not Found</Typography>
      </Box>
    </>
  );
};

export default PageNotFound;
