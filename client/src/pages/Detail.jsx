import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Card from '@mui/material/Card'
import React from 'react'
import imagen from '../imagen/imagen_nuria.PNG'
import { Container, Box, Grid } from '@mui/material'

export default function Detail() {
  return (
    <Container ClassName="vh=100">
      <Card sx={{ display: 'flex', mt: 3 }}>
        <CardMedia
          component="img"
          sx={{ width: 151, ml: 7, mr: 2, mt: 5, mb: 3 }}
          src={imagen}
          alt="Live from space album cover"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto', mt: 5 }}>
            <Typography component="div" variant="h5">
              Nombre del artista/espacio/evento
            </Typography>
            <Typography
              component="div"
              variant="p"
              style={{ marginRight: '1%' }}
            >
              Género musical:
              <Typography
                variant="p"
                color="text.secondary"
                style={{ marginLeft: '0.3rem' }}
              >
                Pop-Electrónico-magnético
              </Typography>
            </Typography>
          </CardContent>
        </Box>
      </Card>
      <Card sx={{ display: 'flex' }}>
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
                mt: 2,
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
                    Nombre de la banda:
                    <Typography
                      variant="p"
                      color="text.secondary"
                      style={{ marginLeft: '0.3rem' }}
                    >
                      Unicornio Loco
                    </Typography>
                  </Typography>
                  <Typography component="div" variant="p">
                    Componentes de la banda:
                    <Typography
                      variant="p"
                      color="text.secondary"
                      style={{ marginLeft: '0.3rem' }}
                    >
                      Guitarrista, flauta y trompeta
                    </Typography>
                  </Typography>
                  <Typography component="div" variant="p">
                    Situación de la instrumentación:
                    <Typography
                      variant="p"
                      color="text.secondary"
                      style={{ marginLeft: '0.3rem' }}
                    >
                      No tenemos nada pero tocamos muy bien
                    </Typography>
                  </Typography>
                  <Typography component="div" variant="p">
                    Género:
                    <Typography
                      variant="p"
                      color="text.secondary"
                      style={{ marginLeft: '0.3rem' }}
                    >
                      Pansexual
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
                md={5}
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
                </CardContent>
              </Grid>
            </Grid>
          </CardContent>
        </Box>
      </Card>
    </Container>
  )
}
