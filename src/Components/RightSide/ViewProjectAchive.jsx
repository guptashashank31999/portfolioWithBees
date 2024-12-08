import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const downloadResume = {
  fontFamily: "Poppins, sans-serif",
  fontSize: "1.3rem",
  cursor: "pointer",
  padding: "8px",
  marginRight: "10px",
  "&:hover": {
    transition: "0.3s",
    backgroundColor: "#7676763b",
    borderRadius: "15px",
    padding: "8px",
    marginRight: "10px",
  },
};
const ViewProjectAchive = () => {
  return (
    <Box my={10}>
      <Typography sx={downloadResume}>
        <Link to={"/projectDiscription"} style={{textDecoration:"none" , color:'white'}}>
          View Full Project Discription <ArrowOutwardIcon fontSize="small" />
        </Link>
      </Typography>
    </Box>
  );
};

export default ViewProjectAchive;
