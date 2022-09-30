import React from "react";
import { Grid } from "@mui/material";
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <Grid
      container
      className="menu-container"
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "5vh",
        width: "100%",

      }}
    >
      <Grid
        item
        className="menu-links-container"
        sm={10}
        md={10}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "80px",
          width: "50vw",
        }}
      >
        <Link to="/sobrenosaltres" style={{ color:'#1446A0'}} className="links-menu" >Sobre nosaltres</Link>
        <Link to="/artistes" style={{ color:'#1446A0'}} className="links-menu" >Artistes</Link>
        <Link to="/espais" style={{ color:'#1446A0'}} className="links-menu" >Espais</Link>
        <Link to="/events" style={{ color:'#1446A0'}} className="links-menu" >Esdeveniments</Link>
      </Grid>
    </Grid>
  );
}
