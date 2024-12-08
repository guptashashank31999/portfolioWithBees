import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const position = { textAlign: "left" };
const experienceDetails = { textAlign: "left" };
const experienceDetailsTypography = {
  fontSize: "14px",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 200,
  padding: "4px",
};
const buttonStyles = { color: "white", borderRadius: "15px", margin: "5px" };

const positionDiscription = {
  fontSize: "22px",
  padding: "4px",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 400,
};

const yearTypography = {
  fontSize: "22px",
  padding: "4px",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 300,
  opacity: 0.5,
};

const Experience1 = ({ item }) => {
  return (
    <>
      <Box
        id="experience-section"
        my={4}
        display="flex"
        alignItems="center"
        flexDirection="column"
        sx={{
          padding: "8px",
          marginRight: "10px",
          opacity: 0.5,
          "&:hover": {
            backgroundColor: "#7676763b",
            borderRadius: "15px",
            padding: "8px",
            marginRight: "10px",
            transition: "0.3s",
            opacity: 1.5,
          },
        }}
      >
        <Grid container>
          <Grid item sm={3} xs={6}>
            <Typography sx={yearTypography}>{item.year}</Typography>
          </Grid>
          <Grid sm={9} xs={6} item sx={position}>
            <Typography sx={positionDiscription}>
              {item.designationAndProject}
            </Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid sm={3} item></Grid>
          <Grid sm={9} item sx={experienceDetails}>
            <Typography sx={experienceDetailsTypography}>
              {item.discription}
            </Typography>
          </Grid>
        </Grid>

        <Box my={1} display="flex" flexDirection="row">
          <Grid container>
            {item.technology.map((btn, index) => {
              return (
                <Grid item sm={3} xs={6}>
                  <Button variant="outlined" sx={buttonStyles} size="small">
                    {btn}
                  </Button>
                </Grid>
              );
            })}
          </Grid>
        </Box>
        {/* <Box my={2}>
          <Grid container>
            <Grid item sm={3}>
              <Button variant="outlined" sx={buttonStyles}>JavaScript</Button>
            </Grid>
            <Grid item sm={4}>
              <Button variant="outlined"  sx={buttonStyles} >React</Button>
            </Grid>
            <Grid item sm={3}>
              <Button variant="outlined"  sx={buttonStyles}>Node</Button>
            </Grid>
            <Grid item sm={3}>
              <Button variant="outlined"  sx={buttonStyles}>Express</Button>
            </Grid>
          </Grid>
        </Box> */}

        {/* <Box
          my={4}
          display="flex"
          alignItems="center"
          flexDirection="row"
         
        >
          <Typography>
            <JavascriptIcon />
          </Typography>
          <Typography>
            <JavascriptIcon />
          </Typography>
          <Typography>
            <JavascriptIcon />
          </Typography>
          <Typography>
            <JavascriptIcon />
          </Typography>
          <Typography>
            <JavascriptIcon />
          </Typography>
        </Box> */}
      </Box>
    </>
  );
};

export default Experience1;
