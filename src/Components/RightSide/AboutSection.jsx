import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";



const AboutSection = ({activeSection}) => {
  const AboutSectionTypography = {
    fontSize: "0.85rem",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 300,
    padding: "4px",
    opacity: activeSection == "about" ? "1" : "0.5"
  };
  return (
    <>
      <Box display="flex" alignItems="center" flexDirection="column" m="10%"  id="about-section">
        <Typography sx={AboutSectionTypography}>
          Back after my schooling , I started my career in Information technology from Dr. Rammanohar Lohiya Awadh University, Ayodhya. During my graduation i work on some basic project like Path Following Robot, Automatic Fire Extinguisher System.<br/> Then i get some more ideas and start learning C language during this time i developed Student Ranking System. <br/> Then i came to know UI/UX development then i start learning HTML Css and JavaScript after learning these tehnology i developed  Replica of my collage website, Dashboard for Shopping Application, and also work in some static HTML pages. I also learn Oracle Database with Sql and PL/Sql  <br/>
          For my final year i start learning Python Programming Language and work on Corona Virus Case detection and Registration on this I used <Link style={{color:"white"}} target="_blank" to="https://www.geeksforgeeks.org/convolutional-neural-network-cnn-in-machine-learning/">CNN(convolutional neural network)</Link> for detection of corona virus.
        </Typography>

        <Typography sx={AboutSectionTypography} my={1}>
        I start my industry carrier as UI/UX developer i completed work on ReactJS.
        <br/> Here, I came to know how actually work on industry standard. Here, I learned so many things and libraries.
        like Map based library, chart based libraries and much more. 
        </Typography>
        <Typography sx={AboutSectionTypography} my={1}>
          Then i switch my career as a software developer and work on MERN technology.<br/>
          Here i learn so many things like ReactJs and Redux Redux Toolkit, MongoDB, Express, NodeJs.<br/>
          I stand alone developed two project(check the experience section for details) on ReactJS and with the help of backend team i also created APIs.
        </Typography>
      </Box>
    </>
  );
};

export default AboutSection;
