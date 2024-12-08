import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import JavascriptIcon from "@mui/icons-material/Javascript";
import Explorer from "../../../Images/explorer-page-logo.png";
import vAutomateLogo from "../../../Images/vAutomateLogo.png"

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
const imageCss = {
  padding: "4px",
};

const buttonStyles = { color: "white", borderRadius: "15px", margin: "5px" };

const Project1 = ({item}) => {
  return (
    <>
      <Box
      id="projects-section"
        my={4}
        display="flex"
        alignItems="center"
        flexDirection="column"
        sx={{
          padding: "8px",
          marginRight: "10px",
          opacity:0.5,
          "&:hover": {
            backgroundColor: "#7676763b",
            borderRadius: "15px",
            padding: "8px",
            marginRight: "10px",
            transition: "0.3s",
            opacity:1.5,
          },
        }}
      >
        <Grid container>
          <Grid item sm={12}>
            <Typography sx={positionDiscription}>
             {item.designationAndProject}
            </Typography>
          </Grid>
          <Grid item sm={6} sx={imageCss}>
            <img src={item.img} width="100%"/>
          </Grid>
          <Grid item sm={6}>
            <Typography sx={experienceDetailsTypography}>
              {item.discription}
            </Typography>
          </Grid>
        </Grid>

        <Box my={1} display="flex" flexDirection="row">
        <Grid container>
        {
          item.technology.map((data, i) => {
            return (
              <Grid item sm={3}>
              <Button variant="outlined" sx={buttonStyles} size="small">
           {data} 
          </Button>
          </Grid>
            )
          })
        }
        </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Project1;
