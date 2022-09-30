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
        <a className="links-menu" href="/sobrenosaltres">Sobre nosaltres</a>
        <a className="links-menu" href="/artistes">Artistes</a>
        <a className="links-menu" href="/espais">Espais</a>
        <a className="links-menu" href="/esdeveniments">Esdeveniments</a>
      </Grid>
    </Grid>
  );
}
