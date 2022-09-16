import React from "react";
import {
  Grid,
  Container,
  Box,
  Button,
  CardContent,
  CardMedia,
  Typography,
  Card,

} from "@mui/material";
import SearchBar from "../components/SearchBar";
import imagenperfil from "../imagenes/imageperfil.jpeg";




export default function PerfilAdmin() {
  return (
    <Grid
      container
      sx={{
        height: "100vh",
      
      }}
    >
      <Grid
        item
        style={{
          backgroundColor: "#E2A0FF",
          height: "10rem",
          width: "100%",
        }}
      >
        <SearchBar />
      </Grid>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column", mt:5
        }}
      >
        <p
          style={{
            fontSize: "2rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Panell d' administració
        </p>

        <Card sx={{ display: "flex", flexDirection: "row" }}>
          <CardMedia
            style={{ display: "flex", alignItems: "start" }}
            component="img"
            sx={{ width: 151, ml: 3, mr: 2, mt: 5, mb: 3 }}
            src={imagenperfil}
            alt="Perfil image"
          />
          <Box sx={{}}>
            <CardContent sx={{ flex: "1 0 auto", mt: 5 }}>
              <Typography component="div" variant="h5">
                Mar Montobbio
              </Typography>
              <Typography variant="p" style={{ marginRight: "1%" }}>
              lasoterrania@gmail.com
                <Typography
                  variant="p"
                  color="text.secondary"
                  style={{ marginLeft: "0.3rem",
                   display: "flex",
                   flexDirection:"column"}}
                >
                  Admin
                </Typography>
              </Typography>
            </CardContent>
          </Box>
        </Card>

        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            style={{
              backgroundColor: "#1446A0",
              width: "12rem",
              height: "2rem",
              borderRadius: "40px",
              color: "white",
              textTransform: "capitalize",
              fontSize: "1rem",
              fontWeight: "200",
              border: "2.5px solid grey",
              margin: "1.3em",
            }}
          >
            Gestionar Artistes
          </Button>
          <Button
            style={{
              backgroundColor: "#1446A0",
              width: "12rem",
              height: "2rem",
              borderRadius: "40px",
              color: "white",
              textTransform: "capitalize",
              fontSize: "1rem",
              fontWeight: "200",
              border: "2.5px solid grey",
              margin: "1.3em",
            }}
          >
            Gestionar Espais
          </Button>
          <Button
            style={{
              backgroundColor: "#1446A0",
              width: "12rem",
              height: "2rem",
              borderRadius: "40px",
              color: "white",
              textTransform: "capitalize",
              fontSize: "1rem",
              fontWeight: "200",
              border: "2.5px solid grey",
              margin: "1.3em",
            }}
          >
            Gestionar Events
          </Button>
        </Grid>
      </Container>
    </Grid>
  );
}
