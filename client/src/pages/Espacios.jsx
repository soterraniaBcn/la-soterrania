import React from "react";
import { Grid } from "@mui/material";
import MediaCardEspacios from "../components/MediaCardEspacios";
import FooterAzul from "../components/FooterAzul";

export default function Espacios() {
  return (
    <>
      <Grid container style={{ height: "100vh" }}>
        <Grid item style={{ width: "100vw" }}>
          <MediaCardEspacios />
        </Grid>
      </Grid>
      <FooterAzul />
    </>
  );
}
