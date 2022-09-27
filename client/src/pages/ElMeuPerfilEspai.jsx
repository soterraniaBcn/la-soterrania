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
import Header from "../components/Header";
import imagenperfil from "../imagenes/imageperfil.jpeg";




export default function ElMeuPerfilArtista() {
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
        <Header />
      </Grid>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <p
          style={{
            fontSize: "2rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          El meu perfil
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
                Hola x!
              </Typography>
              <Typography variant="p" style={{ marginRight: "1%" }}>
              correoX@xmail.com
                <Typography
                  variant="p"
                  color="text.secondary"
                  style={{ marginLeft: "0.3rem",
                   display: "flex",
                   flexDirection:"column"}}
                >
                  Espai
                </Typography>
              </Typography>
            </CardContent>
          </Box>
        </Card>

       </Container>

       <Grid container 
          className="Profile-espais vw-100"
          sx={{
            display: "flex",
            flexDirection: "column",
            
          }}
        >
          
          
          <Grid item className="espais-data" style={{display:'flex', justifyContent:'center', alignItems:"center",flexDirection:"column"}}>
          
          <Box>
          <p>Nom del espai</p>
          <p>Ubicació</p>
          <p>Correu electrònic</p>
          <p>Descripció</p>
          <p>Horari</p>
          <p>Aforament</p>
           </Box>
          
      

       <Grid item className= "Buttons-modif-baixa" style={{justifyContent:"center"}}>
          <Button
            style={{
              backgroundColor: "#1446A0",
              width: "6rem",
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
            Modificar
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
            Donar-me de baixa
         </Button>
         </Grid>
         </Grid>
       </Grid>
       </Grid>
  
  )
        }  