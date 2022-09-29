import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import React, { useEffect, useState } from 'react';
import imagen from '../imagenes/imagen_nuria.PNG';
import { Container, Box, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import GetEvent from '../services/getInfo';

export default function DetailEvent() {
  const [allEvents, setAllEvents] = useState([])

  useEffect(() => {
    GetEvent.getAll().then((res) => {
      let eventsList = res
      setAllEvents(eventsList)
    })
  }, [])

  return (
    <div style={{ backgroundColor: 'pink' }}>
      <Box
        style={{
          backgroundColor: 'pink',
          height: '90px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Link to="/newpost">
          <Button variant="contained">Crear Nuevo Evento</Button>
        </Link>
      </Box>

      <div>
        {allEvents.map((e, i) => (
          <div key={i}>
            <Container ClassName="vh=100">
              <Card sx={{ display: 'flex' }}>
                <CardMedia
                  component="img"
                  sx={{ width: 140, ml: 5, mr: 2, mt: 3, mb: 3 }}
                  src={imagen}
                  alt="Live from space album cover"
                />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '25rem',
                  }}
                >
                  <CardContent sx={{ mt: 5 }}>
                    <Typography sx={{}} component="div" variant="h5">
                      {e.nombre}
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
                      {e.fechainicio}, {e.horainicio}, {e.horafin}
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
                      {e.descripcion}
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
                            {e.ubicacion}
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
                    <Box
                      style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'end',
                        gap: '4%',
                      }}
                    >
                      <Button>editar</Button>
                      <Button style={{ color: 'red' }}>eliminar</Button>
                    </Box>
                  </CardContent>
                </Box>
              </Card>
            </Container>
          </div>
        ))}
      </div>
    </div>
  )
}
