import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Card from '@mui/material/Card'
import React, { useState, useEffect } from 'react'
import { Container, Box, Grid, Button } from '@mui/material'
import GetArtistById from '../services/getArtistById'
import { useParams, Link } from 'react-router-dom'
import imagenmusical from '../imagenes/imagenmusical.webp'
import FooterAzul from '../components/FooterAzul'
import HeaderPestBlue from '../components/HeaderPestBlue'

export default function DetailArtista() {
  const { id } = useParams()
  const [oneArtist, setOneArtist] = useState({})

  useEffect(() => {
    GetArtistById.getOne(id).then((res) => {
      let artist = res
      setOneArtist(artist)
    })
  }, [])

  return (
    <div style={{ backgroundColor: '#1446A0' }}>
      <Grid
        container
        style={{ height: '10rem', backgroundColor: '#1446A0', width: '100vw' }}
      >
        <HeaderPestBlue />
      </Grid>
      <Box style={{ backgroundColor: '#1446A0', height: '90px' }}></Box>
      <Container ClassName="vh=100">
        <Card sx={{ display: 'flex' }}>
          <CardMedia
            component="img"
            sx={{ width: 140, ml: 5, mr: 2, mt: 3, mb: 3 }}
            src={imagenmusical}
            alt="Imagen del artista"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto', mt: 5 }}>
              <Typography sx={{}} component="div" variant="h5">
                {oneArtist.nombre}
              </Typography>
              <Typography
                component="div"
                variant="p"
                style={{ marginRight: '1%' }}
              >
                Gènere musical:
                <Typography
                  variant="p"
                  color="text.secondary"
                  style={{ marginLeft: '0.3rem' }}
                >
                  {oneArtist.generomusical}
                </Typography>
              </Typography>
            </CardContent>
          </Box>
        </Card>
        <Card sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5" sx={{ ml: 2 }}>
                Descripció:
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
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}
              >
                <Grid item md={7}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography
                      component="div"
                      variant="p"
                      style={{ marginRight: '1%' }}
                    >
                      Web:
                      <Typography
                        variant="p"
                        color="text.secondary"
                        style={{ marginLeft: '0.3rem' }}
                      >
                        {oneArtist.web}
                      </Typography>
                    </Typography>
                    <Typography component="div" variant="p">
                      Instrumentació:
                      <Typography
                        variant="p"
                        color="text.secondary"
                        style={{ marginLeft: '0.3rem' }}
                      >
                        {oneArtist.instrumentacion}
                      </Typography>
                    </Typography>
                    <Typography component="div" variant="p">
                      Gènere:
                      <Typography
                        variant="p"
                        color="text.secondary"
                        style={{ marginLeft: '0.3rem' }}
                      >
                        {oneArtist.genero}
                      </Typography>
                    </Typography>
                    <Typography component="div" variant="p">
                      Notes:
                      <Typography
                        variant="p"
                        color="text.secondary"
                        style={{ marginLeft: '0.3rem' }}
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
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <CardContent
                    sx={{
                      flex: '1 0 auto',
                    }}
                  >
                    <Typography variant="p" style={{ marginRight: '1%' }}>
                      Número de telèfon:
                      <Typography
                        variant="p"
                        color="text.secondary"
                        style={{ marginLeft: '0.3rem' }}
                      >
                        {oneArtist.telefono1}
                      </Typography>
                    </Typography>
                    <Typography
                      component="div"
                      variant="p"
                      style={{ marginRight: '1%' }}
                    >
                      Correu electrònic:
                      <Typography
                        variant="p"
                        color="text.secondary"
                        style={{ marginLeft: '0.3rem' }}
                      >
                        {oneArtist.email}
                      </Typography>
                    </Typography>
                    <Typography
                      component="div"
                      variant="p"
                      style={{ marginRight: '1%' }}
                    >
                      Xarxa social 1:
                      <Typography
                        variant="p"
                        color="text.secondary"
                        style={{ marginLeft: '0.3rem' }}
                      >
                        {oneArtist.redsocial1}
                      </Typography>
                    </Typography>
                    <Typography
                      component="div"
                      variant="p"
                      style={{ marginRight: '1%' }}
                    >
                      Xarxa social 2:
                      <Typography
                        variant="p"
                        color="text.secondary"
                        style={{ marginLeft: '0.3rem' }}
                      >
                        {oneArtist.redsocial2}
                      </Typography>
                    </Typography>
                  </CardContent>
                </Grid>
                <Box
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'end',
                    gap: '4%',
                  }}
                >
                  <Button style={{ backgroundColor: '#1446A0' }}>
                    <Link
                      to="/admin/editarartista"
                      style={{
                        color: 'white',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                      }}
                    >
                      editar
                    </Link>
                  </Button>
                  <Button style={{ backgroundColor: 'red' }}>
                    <Link
                      to="/admin/editarartista"
                      style={{
                        color: 'white',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                      }}
                    >
                      eliminar
                    </Link>
                  </Button>
                </Box>
              </Grid>
            </CardContent>
          </Box>
        </Card>
      </Container>
      <FooterAzul />
    </div>
  )
}
