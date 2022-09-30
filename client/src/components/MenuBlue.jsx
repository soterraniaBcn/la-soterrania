import React from "react";
import { Grid } from "@mui/material";

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
        <a className="links-menu" href="/sobrenosaltres" style={{ color:'#1446A0'}}>Sobre nosaltres</a>
        <a className="links-menu" href="/artistes" style={{ color:'#1446A0'}}>Artistes</a>
        <a className="links-menu" href="/espais" style={{ color:'#1446A0'}}>Espais</a>
        <a className="links-menu" href="/events" style={{ color:'#1446A0'}}>Esdeveniments</a>
      </Grid>
    </Grid>
  );
}
