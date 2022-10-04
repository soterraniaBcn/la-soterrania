import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import React, { useEffect, useState } from "react";
import { Container, Box, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import GetEvent from "../services/getInfo";
import HeaderPestBlue from "../components/HeaderPestBlue";
import FooterAzul from "../components/FooterAzul";




export default function DetailEvent() {
  const [allEvents, setAllEvents] = useState([]);
  useEffect(() => {
    GetEvent.getAll().then((res) => {
      let eventsList = res;
      setAllEvents(eventsList);
    });
  }, []);
  return (
    <>
      <Grid
        container
        style={{ height: "10rem", backgroundColor: "#1446A0", width: "100vw" }}
      >
        <HeaderPestBlue />
      </Grid>
      <div style={{ backgroundColor: "#1446A0" }}>
        <Box
          style={{
            backgroundColor: "#1446A0",
            height: "90px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link
            to="/admin/editaresdeveniments"
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              style={{
                backgroundColor: "#E2A0FF",
                color: "#1446A0",
                borderRadius: "40px",
                height: "2rem",
                fontWeight: "bold",
              }}
            >
              Afegir nou esdeveniment
            </Button>
          </Link>
        </Box>
        <div>
          {allEvents.map((e, i) => (
            <div key={i}>
              <Container ClassName="vh=100">
                <Card sx={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 140, ml: 5, mr: 2, mt: 3, mb: 3 }}
                    src="https://fever.imgix.net/filter/photo/00c8a68e-3d54-11ec-b103-ae6ad6225d20?auto=format"
                    alt="Live from space album cover"
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "25rem",
                    }}
                  >
                    <CardContent sx={{ mt: 5 }}>
                      <Typography sx={{}} component="div" variant="h5">
                        {e.nombre}
                      </Typography>
                      <Typography
                        component="div"
                        variant="p"
                        style={{ marginRight: "1%" }}
                      >
                        {e.organizacion}
                      </Typography>
                      <Typography
                        component="div"
                        variant="p"
                        style={{ marginRight: "1%" }}
                      >
                        {e.fechainicio}, {e.horainicio}, {e.horafin}
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
                <Card sx={{ display: "flex", mb: "3rem" }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5" sx={{ ml: 2 }}>
                        Descripció:
                      </Typography>
                      <Typography
                        variant="p"
                        color="text.secondary"
                        component="div"
                        sx={{ ml: 2 }}
                      >
                        {e.descripcion}
                      </Typography>
                      <Grid item md={7}>
                        <CardContent sx={{ flex: "1 0 auto" }}>
                          <Typography
                            component="div"
                            variant="p"
                            style={{ marginRight: "1%" }}
                          >
                            Ubicació:
                            <Typography
                              variant="p"
                              color="text.secondary"
                              style={{ marginLeft: "0.3rem" }}
                            >
                              {e.ubicacion}
                            </Typography>
                          </Typography>
                          <Typography
                            component="div"
                            variant="p"
                            style={{ marginRight: "1%" }}
                          >
                            Web:
                            <Typography
                              variant="p"
                              color="text.secondary"
                              style={{ marginLeft: "0.3rem" }}
                            >
                              {e.web}
                            </Typography>
                          </Typography>
                        </CardContent>
                      </Grid>
                      <Box
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "end",
                          gap: "4%",
                        }}
                      >
                        <Link
                          to="/admin/editaresdeveniments"
                          style={{ textDecoration: "none" }}
                        >
                          <Button>Editar</Button>
                          <Button style={{ color: "red" }}>Eliminar</Button>
                        </Link>
                      </Box>
                    </CardContent>
                  </Box>
                </Card>
              </Container>
            </div>
          ))}
        </div>
      </div>
      <FooterAzul />
    </>
  );
}
