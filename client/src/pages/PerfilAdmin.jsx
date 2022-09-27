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
import FooterGris from "../components/FooterGris";




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
          backgroundColor: "#cdcecf",
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
          flexDirection: "column", mt:5
        }}
      >
        <p xs={10}
          style={{
            fontSize: "1.7rem",
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

       </Container>  
       
    
      
       <Grid container 
          className="Backstage-artists vw-100"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            
            
          }}
        >
          
          <Box style={{display:'flex',justifyContent:'center'}}>
          <p >Artistes al Backstage</p>
       </Box>
          <Grid item className="artist-list" style={{display:'flex', justifyContent:'space-between'}}>
          
          <Box  style={{paddingLeft:"3rem", display:'flex', flexDirection:'column'}}>
          <p>Nom i cognoms</p>
          <p>Nom del artista/grup</p>
          <p>Correu electrònic</p>
          <p>Gènere musical</p>
          <p>Descripció</p>
           </Box>
          
          <Grid item className= "Buttons-accept-reject">
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
            Acceptar
         </Button>
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
            Rebutjar
         </Button>
         </Grid>
         </Grid>

         <Grid container 
          className="Backstage-artists vw-100"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            
            
          }}
        >
          
          <Box style={{display:'flex',justifyContent:'center'}}>
          <p >Espais al Backstage</p>
       </Box>
          <Grid item className="artist-list" style={{display:'flex', justifyContent:'space-between'}}>
          
          <Box  style={{paddingLeft:"3rem", display:'flex', flexDirection:'column'}}>
          <p>Nom del espai</p>
          <p>Ubicació</p>
          <p>Correu electrònic</p>
          <p>Descripció</p>
          <p>Horari</p>
          <p>Aforament</p>

           </Box>
          
          <Grid item className= "Buttons-accept-reject">
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
            Acceptar
         </Button>
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
            Rebutjar
         </Button>
         </Grid>
         </Grid>


            
         </Grid>
      

            
         </Grid>
      
  <FooterGris/>
    </Grid>

  );
}
