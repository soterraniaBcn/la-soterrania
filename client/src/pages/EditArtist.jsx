import React from "react";
import {
  Grid,
  FormGroup,
  TextareaAutosize,
  Box,
  Button,
} from "@mui/material";
import Header from "../components/Header";

export default function EditArtist() {
  return (
    <>
      <Grid container className="vh-100">
        <Box
          className="header-edit-spaces"
          sx={{
            mt: 0,
            bgcolor: "#E2A0FF",
            height: "10rem",
            width: "100%",
            position: "fixed",
          }}
        >
          <Header />
        </Box>

        <Grid
          container
          className="Form-container"
          style={{
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FormGroup
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "12rem",

              backgroundColor: "#00000",
              width: "25rem",
              height: "30rem",
              borderRadius: "1rem",
              border: "2px solid #ea20ff",
              lineHeight: "1px",
            }}
          >
            <Box style={{ lineHeight: "1px" }}>
              <p>Nom de l' artista/grup:</p>
              <input
                type="text"
                style={{
                  width: "auto",
                  fontSize: "1.1rem",
                  borderRadius: "1rem",
                  border: "0.1rem solid grey",
                }}
              />
            </Box>

            <Box style={{ lineHeight: "1px" }}>
              <p>Fotografia (url):</p>
              <input
                type="text"
                style={{
                  color: "#000000",
                  width: "auto",
                  fontSize: "1.1rem",
                  borderRadius: "10px",
                  border: "1px solid grey",
                }}
              />
            </Box>

            <Box style={{ lineHeight: "1px" }}>
              <p>Gènere musical:</p>
              <input
                type="text"
                style={{
                  color: "#000000",
                  width: "auto",
                  fontSize: "1.1rem",
                  borderRadius: "10px",
                  border: "1px solid grey",
                }}
              />
            </Box>

            <Box style={{ lineHeight: "1px" }}>
              <p>Correu electrònic:</p>
              <input
                type="text"
                style={{
                  fontSize: "1.1rem",
                  borderRadius: "10px",
                  border: "1px solid grey",
                }}
              />
            </Box>

            <Box style={{ lineHeight: "1px" }}>
              <p>Descripció:</p>
              <TextareaAutosize
                maxRows={6}
                aria-label="maximum height"
                placeholder="Escriu una breu descripció..."
                defaultValue=""
                style={{
                  fontFamily: "Consolas",
                  fontSize: "1.1rem",
                  marginTop: 0,
                  borderRadius: "10px",
                  border: "1px solid grey",
                }}
              />
            </Box>
          </FormGroup>

          <Grid item className="Buttons-row">
            <Button
              style={{
                backgroundColor: "#E2A0FF",
                width: "6rem",
                height: "1.8rem",
                borderRadius: "40px",
                color: "black",
                textTransform: "capitalize",
                fontSize: "1rem",
                fontWeight: "200",
                border: "2.5px solid grey",
                margin: "0.8rem",
              }}
            >
              Afegir +
            </Button>

            <Button
              style={{
                backgroundColor: "#E2A0FF",
                width: "6rem",
                height: "1.8rem",
                borderRadius: "40px",
                color: "black",
                textTransform: "capitalize",
                fontSize: "1rem",
                fontWeight: "200",
                border: "2.5px solid grey",
                margin: "0.8rem",
              }}
            >
              Editar
            </Button>
            <Button
              style={{
                backgroundColor: "#E2A0FF",
                width: "6rem",
                height: "1.8rem",
                borderRadius: "40px",
                color: "black",
                textTransform: "capitalize",
                fontSize: "1rem",
                fontWeight: "200",
                border: "2.5px solid grey",
                margin: "0.8rem",
              }}
            >
              Eliminar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}