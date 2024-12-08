import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Table } from "reactstrap";
import "./styles.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { fullProjectDiscription } from "./Data";
const backButton = {
  color: "#59DECA",
  fontSize: "1rem",
  fontFamily: "Poppins, sans-serif",
};
const allProject = {
  fontSize: "2rem",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
};
const buttonStyles = { color: "white", borderRadius: "15px", margin: "1px" };

const tables = {};

const FullProjectDiscription = () => {
  return (
    <>
      <Box m={5}>
        <Typography sx={backButton}>
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              cursor: "pointer",
            }}
            to={"/"}
          >
            <ArrowBackIcon fontSize="small" />
          </Link>{" "}
          Shashank Gupta
        </Typography>
        <Typography sx={allProject}>Projects by Own</Typography>
      </Box>

      <Box m={5} sx={tables}>
        <Table
          style={{ width: "100%", fontFamily: "Poppins, sans-serif" }}
          bordered
          className="fixed-header"
        >
          <thead>
            <tr
              style={{
                fontSize: "1.5rem",
                position: "sticky",
                top: 0,
                background: "#22203ceb",
              }}
            >
              <td style={{ padding: "5px" }}>S.No.</td>
              <td style={{ padding: "5px" }}>Project</td>
              <td style={{ padding: "5px" }}>Built With</td>
              <td style={{ padding: "5px" }}>URL</td>
            </tr>
          </thead>
          <tbody style={{ fontSize: "0.9rem" }}>
            {fullProjectDiscription.map((item, index) => {
              return (
                <tr>
                <td style={{textAlign:"center"}}>{index + 1}</td>
                  <td>{item.project}</td>
                  <td>
                    <Grid container>
                      {item.buildWith.map((data, i) => {
                        return (
                          
                            <Grid item sm={4}>
                              <Button
                                variant="outlined"
                                sx={buttonStyles}
                                size="small"
                              >
                                {data}
                              </Button>
                            </Grid>
                         
                        );
                      })}
                    </Grid>
                  </td>

                  <td>
                  {
                    index == 0 ? <>{item.url}</> : <Link style={{color:"white", opacity:"0.5"}} to={item.url} target="_blank">
                      Projetc URL
                    </Link>
                  }
                    
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Box>
    </>
  );
};

export default FullProjectDiscription;
