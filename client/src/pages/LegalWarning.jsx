import React from "react";
import { Grid, Typography } from "@mui/material";
import Header from "../components/Header";

export default function About() {
  return (
    <>
      <Grid
        container 
        style={{
          backgroundColor: "#E2A0FF",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",          
        }}
      >
        <Header />
       <Grid container className="about-container" 
       style={{maxWidth:"80rem",mt:5, backgroundColor:"white", pl:3, display:"flex", justifyContent: 'center'}}>
         <h1>Avis legal</h1>
        <Typography 
                variant="h1"
                color="black"
                component="div"
                style={{ padding:"2rem",fontSize:"1rem", lineHeight:"2rem"}}
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

              </Typography>
        </Grid>
    
        </Grid>
        </>
  )}

        //
        // <p></p>
