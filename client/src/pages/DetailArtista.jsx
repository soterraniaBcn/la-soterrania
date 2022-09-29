import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Card from '@mui/material/Card'
import React, { useState, useEffect } from "react";
import { Container, Box, Grid, Button } from '@mui/material'
import GetArtistById from '../services/getArtistById'
import { useParams } from 'react-router-dom'
import FooterRosa from '../components/FooterRosa';



export default function DetailArtista() {
  const {id}=useParams()
  const [oneArtist, setOneArtist] = useState({})

  useEffect(() => {
    GetArtistById.getOne(id).then((res) => {
      let artist = res
      setOneArtist(artist)
    })
  }, [])

  return (
    <div style={{backgroundColor:"pink"}}>  
    <Box style={{backgroundColor:"pink", height:'90px' }}>
      
      </Box>  
      <Container ClassName="vh=100" >
        <Card sx={{ display: 'flex'}}>
          <CardMedia
            component="img"
            sx={{ width: 140, ml: 5, mr: 2, mt: 3, mb: 3 }}
            src={oneArtist.foto}
            alt="Live from space album cover"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto", mt: 5 }}>
              <Typography sx={{}} component="div" variant="h5">
                {oneArtist.nombre}
              </Typography>
              <Typography
                component="div"
                variant="p"
                style={{ marginRight: "1%" }}
              >
                Género musical:
                <Typography
                  variant="p"
                  color="text.secondary"
                  style={{ marginLeft: "0.3rem" }}
                >
                  {oneArtist.generomusical}
                </Typography>
              </Typography>
            </CardContent>
          </Box>
        </Card>
        <Card sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5" sx={{ ml: 2 }}>
                Descripción:
              </Typography>
              <Typography
                variant="p"
                color="text.secondary"
                component="div"
                sx={{ ml: 2 }}
              >
                {oneArtist.descripcion}
              </Typography>
              <Grid
                container
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Grid item md={7}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography
                      component="div"
                      variant="p"
                      style={{ marginRight: "1%" }}
                    >
                      Nombre de la banda:
                      <Typography
                        variant="p"
                        color="text.secondary"
                        style={{ marginLeft: "0.3rem" }}
                      >
                        {oneArtist.nombre}
                      </Typography>
                    </Typography>
                    <Typography component="div" variant="p">
                      Componentes de la banda:
                      <Typography
                        variant="p"
                        color="text.secondary"
                        style={{ marginLeft: "0.3rem" }}
                      >
                        {oneArtist.instrumentacion}
                      </Typography>
                    </Typography>
                    <Typography component="div" variant="p">
                      Situación de la instrumentación:
                      <Typography
                        variant="p"
                        color="text.secondary"
                        style={{ marginLeft: "0.3rem" }}
                      >
                        No tenemos nada pero tocamos muy bien
                      </Typography>
                    </Typography>
                    <Typography component="div" variant="p">
                      Género:
                      <Typography
                        variant="p"
                        color="text.secondary"
                        style={{ marginLeft: "0.3rem" }}
                      >
                        {oneArtist.genero}
                      </Typography>
                    </Typography>
                    <Typography component="div" variant="p">
                      Notas:
                      <Typography
                        variant="p"
                        color="text.secondary"
                        style={{ marginLeft: "0.3rem" }}
                      >
                        {oneArtist.notas}
                      </Typography>
                    </Typography>
                  </CardContent>
                </Grid>
                <Grid
                  item
                  md={5}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <CardContent
                    sx={{
                      flex: "1 0 auto",
                    }}
                  >
                    <Typography variant="p" style={{ marginRight: "1%" }}>
                      Número telefónico:
                      <Typography
                        variant="p"
                        color="text.secondary"
                        style={{ marginLeft: "0.3rem" }}
                      >
                        {oneArtist.telefono1}
                      </Typography>
                    </Typography>
                    <Typography
                      component="div"
                      variant="p"
                      style={{ marginRight: "1%" }}
                    >
                      E-mail:
                      <Typography
                        variant="p"
                        color="text.secondary"
                        style={{ marginLeft: "0.3rem" }}
                      >
                        {oneArtist.email}
                      </Typography>
                    </Typography>
                    <Typography
                      component="div"
                      variant="p"
                      style={{ marginRight: "1%" }}
                    >
                      Instagram:
                      <Typography
                        variant="p"
                        color="text.secondary"
                        style={{ marginLeft: "0.3rem" }}
                      >
                       {oneArtist.redsocial1}
                      </Typography>
                    </Typography>
                    <Typography
                      component="div"
                      variant="p"
                      style={{ marginRight: "1%" }}
                    >
                      Facebook:
                      <Typography
                        variant="p"
                        color="text.secondary"
                        style={{ marginLeft: "0.3rem" }}
                      >
                        {oneArtist.redsocial2}
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
                  <Button>editar</Button>
                  <Button style={{ color: "red" }}>eliminar</Button>
                </Box>
              </Grid>
            </CardContent>
          </Box>
        </Card>
      </Container>
      <FooterRosa />
    </div>
  );
}
