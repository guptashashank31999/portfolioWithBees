import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const positionDiscription = {
  fontSize: "1.5rem",
  padding: "4px",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 400,
  marginBottom: "10px",
};

const experienceDetailsTypography = {
  fontSize: "14px",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 200,
  padding: "4px",
};


const Footer = () => {
  return (
    <Box
      my={4}
      display="flex"
      alignItems="center"
      flexDirection="column"
      sx={{
        padding: "8px",
        marginRight: "10px",
        "&:hover": {
          backgroundColor: "#7676763b",
          borderRadius: "15px",
          padding: "8px",
          marginRight: "10px",
          transition: "0.3s",
        },
      }}
    >
    <Grid container>
      <Grid item sm={10}>
      <Typography sx={experienceDetailsTypography}>
        Developed in ReactJS and coded in Visual Studio Code by me
        truly. Built with Material UI CSS, deployed with Vercel.
      </Typography></Grid>
      <Grid item sm={2}>
      <img
          src={require("../../Images/ramadan-without_background.gif")}
          alt="loading..."
        style={{width:"4rem"}}
        />
      </Grid>
    </Grid>
      
    </Box>
  );
};

export default Footer;
