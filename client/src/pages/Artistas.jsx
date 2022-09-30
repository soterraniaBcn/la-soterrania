import React from "react";
import SearchBar from "../components/SearchBar";
import { Container, Grid } from "@mui/material";
import Header from "../components/Header";
import MediaCardArtistas from "../components/MediaCardArtistas";
import FooterAzul from "../components/FooterAzul";

export default function Artistas() {
  return (
    <>
      <Grid container>
        <Container style={{ height: '10rem', backgroundColor: '#1446A0'}}>
          <Header />
          <SearchBar />
        </Container>
        <MediaCardArtistas />
        <FooterAzul />
      </Grid>
    </>
  );
}
