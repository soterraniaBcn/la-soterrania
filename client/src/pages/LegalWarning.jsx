import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import HeaderBlue from "../components/HeaderBlue";
import FooterGris from "../components/FooterGris";

export default function About() {
  return (
    <>
      <Grid
        container
        style={{
          backgroundColor: "#FFFFFF",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          className="header-edit-spaces"
          sx={{
            mt: 0,
            bgcolor: "#CDCECF",
            height: "10rem",
            width: "100%",
      
          }}
        >
          <HeaderBlue />
        </Box>
        <Grid
          container
          className="about-container"
          style={{
            maxWidth: "80rem",
            mt: 5,
            backgroundColor: "white",
            pl: 3,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1>Avís legal</h1>
          <Typography
            variant="h1"
            color="black"
            component="div"
            style={{ padding: "2rem", fontSize: "1rem", lineHeight: "2rem" }}
          >
            <p>El prestador, responsable del lloc web, posa a disposició dels usuaris aquest document amb què pretén donar compliment a les obligacions disposades a la Llei 34/2002, de Serveis de la Societat de la Informació i del Comerç Electrònic ( LSSI-CE), així com informar a tots els usuaris del lloc web respecte a quines són les condicions dús del lloc web.</p>
            <p>El prestador es reserva el dret a modificar qualsevol tipus d'informació que pogués aparèixer al lloc web, sense que hi hagi obligació de preavisar o posar en coneixement dels usuaris aquestes obligacions, entenent-se com suficient amb la publicació al lloc web del prestador.</p>

          </Typography>
        </Grid>
        <FooterGris />
      </Grid>
    </>
  );
}
