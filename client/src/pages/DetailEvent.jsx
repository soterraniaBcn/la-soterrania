import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Card from '@mui/material/Card'
import React from 'react'
import imagen from '../imagenes/imagen_nuria.PNG'
import { Container, Box, Grid } from '@mui/material'

export default function DetailEvent() {
  return (
    <div style={{ backgroundColor: 'pink' }}>
      <Box style={{ backgroundColor: 'pink', height: '90px' }}>.</Box>
      <Container ClassName="vh=100">
        <Card sx={{ display: 'flex' }}>
          <CardMedia
            component="img"
            sx={{ width: 140, ml: 5, mr: 2, mt: 3, mb: 3 }}
            src={imagen}
            alt="Live from space album cover"
          />
          <Box
            sx={{ display: 'flex', flexDirection: 'column', width: '25rem' }}
          >
            <CardContent sx={{ mt: 5 }}>
              <Typography sx={{}} component="div" variant="h5">
                Nombre del Evento
              </Typography>
              <Typography
                component="div"
                variant="p"
                style={{ marginRight: '1%' }}
              >
                Banda/Artista:
              </Typography>
              <Typography
                component="div"
                variant="p"
                style={{ marginRight: '1%' }}
              >
                martes 13 de septembre 20hs
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
                tenemor la oportunidad de compartir con unicorlo loco este
                martes a la noche blablablaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </Typography>
              <Grid item md={7}>
                <CardContent sx={{ flex: '1 0 auto' }}>
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
            </CardContent>
          </Box>
        </Card>
      </Container>

      <Box style={{ backgroundColor: 'pink', height: '90px' }}>.</Box>
      <Container ClassName="vh=100">
        <Card sx={{ display: 'flex' }}>
          <CardMedia
            component="img"
            sx={{ width: 140, ml: 5, mr: 2, mt: 3, mb: 3 }}
            src={imagen}
            alt="Live from space album cover"
          />
          <Box
            sx={{ display: 'flex', flexDirection: 'column', width: '25rem' }}
          >
            <CardContent sx={{ mt: 5 }}>
              <Typography sx={{}} component="div" variant="h5">
                Nombre del Evento
              </Typography>
              <Typography
                component="div"
                variant="p"
                style={{ marginRight: '1%' }}
              >
                Banda/Artista
              </Typography>
              <Typography
                component="div"
                variant="p"
                style={{ marginRight: '1%' }}
              >
                martes 13 de septembre 20hs
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
                tenemor la oportunidad de compartir con unicorlo loco este
                martes a la noche blablablaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </Typography>
              <Grid item md={7}>
                <CardContent sx={{ flex: '1 0 auto' }}>
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
            </CardContent>
          </Box>
        </Card>
      </Container>
    </div>
  )
}
