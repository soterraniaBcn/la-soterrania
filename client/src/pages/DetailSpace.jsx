import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Card from '@mui/material/Card'
import React from 'react'
import imagen from '../imagenes/imagen_nuria.PNG'
import { Container, Box, Grid } from '@mui/material'

export default function DetailSpace() {
  return (
    <div style={{backgroundColor:'pink'}} >

    <Container ClassName="vh=100">
      <Card sx={{ display: 'flex'}}>
        <CardMedia
          component="img"
          sx={{ width: 140, ml: 5, mr: 2, mt: 3, mb: 2 }}
          src={imagen}
          alt="Live from space album cover"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto', mt: 5 }}>
            <Typography component="div" variant="h5">
              Nombre del salon
            </Typography>
            <Typography
              component="div"
              variant="p"
              style={{ marginRight: '1%' }}
            >
              Tematica
              <Typography
                variant="p"
                color="text.secondary"
                style={{ marginLeft: '0.3rem' }}
              >
                Jazz contemporaneo
              </Typography>
            </Typography>
          </CardContent>
        </Box>
      </Card>
      <Card sx={{ display: 'flex', padding:0 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5" sx={{ ml: 2 }}>
              Descripción:
            </Typography>
            <Typography
              variant="p"
              color="text.secondary"
              component="div"
              sx={{ ml: 2 }}
            >
              Portada de #Genderful sin censura, el próximo lanzamiento de
              @thepunkyunicorns en el que tengo el enorme placer de colaborar.
              Genderful is comming! 27/05/2022 🎸🦄🌈*Noticia con la portada sin
              censura de @lamanyanacat (gràcies Andrés) Pre-save disponible ⬇️
              en la bio de @thepunkyunicorns #thepunkyunicorns #censura
              #artecensurado #lleidatanament #lleidacity #lleidamusic
              #musicslleida #punkmusic #punksnotdead #punkisnotdead #unicorn
              #unicornio
            </Typography>
            <Grid
              container
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
            }}
            >
              <Grid item md={6}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography
                    component="div"
                    variant="p"
                    style={{ marginRight: '1%' }}
                    >
                    Dias y horarios:
                    <Typography
                      variant="p"
                      color="text.secondary"
                      style={{ marginLeft: '0.3rem' }}
                    >
                      lunes a viernes de las 7:00 a las 7:15
                    </Typography>
                  </Typography>
                  <Typography component="div" variant="p">
                    Capacidad:
                    <Typography
                      variant="p"
                      color="text.secondary"
                      style={{ marginLeft: '0.3rem' }}
                    >
                      200px, pero apretaditos entran 250
                    </Typography>
                  </Typography>
                  <Typography component="div" variant="p">
                    Pagina web:
                    <Typography
                      variant="p"
                      color="text.secondary"
                      style={{ marginLeft: '0.3rem' }}
                    >
                      soterrania.com
                    </Typography>
                  </Typography>
                  <Typography component="div" variant="p">
                    Equipamiento:
                    <Typography
                      variant="p"
                      color="text.secondary"
                      style={{ marginLeft: '0.3rem' }}
                    >
                     Micro, apmli y mucho mas
                    </Typography>
                  </Typography>
                  <Typography component="div" variant="p">
                    Lgtbfriendly:
                    <Typography
                      variant="p"
                      color="text.secondary"
                      style={{ marginLeft: '0.3rem' }}
                    >
                      Si
                    </Typography>
                  </Typography>
                  <Typography component="div" variant="p">
                    Petfriendly:
                    <Typography
                      variant="p"
                      color="text.secondary"
                      style={{ marginLeft: '0.3rem' }}
                      >
                      Si
                    </Typography>
                  </Typography>
                  <Typography component="div" variant="p">
                    Notas:
                    <Typography
                      variant="p"
                      color="text.secondary"
                      style={{ marginLeft: '0.3rem' }}
                      >
                      Recibimos comida como parte de pago
                    </Typography>
                  </Typography>
                </CardContent>
              </Grid>
              <Grid
                item
                md={6}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column', 
                  alignItems: 'center'
                }}
                >
                <CardContent
                  sx={{
                      flex: '1 0 auto',
                  }}
                  >
                  <Typography variant="p" style={{ marginRight: '1%' }}>
                    Número telefónico:
                    <Typography
                      variant="p"
                      color="text.secondary"
                      style={{ marginLeft: '0.3rem' }}
                      >
                      663344557
                    </Typography>
                  </Typography>
                  <Typography
                    component="div"
                    variant="p"
                    style={{ marginRight: '1%' }}
                    >
                    E-mail:
                    <Typography
                      variant="p"
                      color="text.secondary"
                      style={{ marginLeft: '0.3rem' }}
                      >
                      hola@gmail.com
                    </Typography>
                  </Typography>
                  <Typography
                    component="div"
                    variant="p"
                    style={{ marginRight: '1%' }}
                  >
                    Instagram:
                    <Typography
                      variant="p"
                      color="text.secondary"
                      style={{ marginLeft: '0.3rem' }}
                    >
                      holahola
                    </Typography>
                  </Typography>
                  <Typography
                    component="div"
                    variant="p"
                    style={{ marginRight: '1%' }}
                    >
                    Facebook:
                    <Typography
                      variant="p"
                      color="text.secondary"
                      style={{ marginLeft: '0.3rem' }}
                    >
                      hola chau
                    </Typography>
                  </Typography>
                  <Typography
                    component="div"
                    variant="p"
                    style={{ marginRight: '1%' }}
                    >
                    Ubicacion:
                    <Typography
                      variant="p"
                      color="text.secondary"
                      style={{ marginLeft: '0.3rem' }}
                      >
                      Carrer florecillas
                    </Typography>
                  </Typography>
                  <Typography
                    component="div"
                    variant="p"
                    style={{ marginRight: '1%' }}
                    >
                    Facil acceso a traves de
                    <Typography
                      variant="p"
                      color="text.secondary"
                      style={{ marginLeft: '0.3rem' }}
                      >
                          L3, L1, bicying
                    </Typography>
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </CardContent>
        </Box>
      </Card>
    </Container>
  </div>
  )
}
