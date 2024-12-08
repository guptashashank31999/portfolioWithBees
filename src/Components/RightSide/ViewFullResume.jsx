import { Box, Typography } from '@mui/material'
import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const downloadResume = {fontFamily: "Poppins, sans-serif", fontSize:"1.3rem", cursor:"pointer", padding: "8px",
    marginRight: "10px",
  "&:hover":{
  
    transition: "0.3s",
    backgroundColor: "#7676763b",
    borderRadius: "15px",
    padding: "8px",
    marginRight: "10px",
    
  }}
const ViewFullResume = () => {

  return (
    <Box my={10}>
     <Typography sx={downloadResume} >
     <a style={{color:"white"}} href={require("../../assets/ShashankGupta_resume_2024.pdf")} download="Shashank_Gupta_Resume.pdf">
        View Full Resume <ArrowOutwardIcon fontSize="small" />
        </a>
     </Typography> 
    </Box>
  )
}

export default ViewFullResume
