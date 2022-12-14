import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Card from '@mui/material/Card'
import React, { useEffect, useState } from 'react'
import { Container, Box, Grid, Button } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import GetSpaceById from '../services/getSpaceById'
import FooterAzul from '../components/FooterAzul'
import HeaderPestBlue from '../components/HeaderPestBlue'

export default function DetailSpace() {
  const { id } = useParams()
  const [oneSpace, setOneSpace] = useState({})

  useEffect(() => {
    GetSpaceById.getOne(id).then((res) => {
      let artist = res
      setOneSpace(artist)
    })
  }, [])
  return (
    <div style={{ backgroundColor: '#1446A0', height: '100vh' }}>
      <Grid
        container
        style={{ height: '10rem', backgroundColor: '#1446A0', width: '100vw' }}
      >
        <HeaderPestBlue />
      </Grid>
      <Container style={{ marginBottom: '8rem' }}>
        <Card sx={{ display: 'flex' }}>
          <CardMedia
            component="img"
            sx={{ width: 140, ml: 5, mr: 2, mt: 3, mb: 2 }}
            src={oneSpace.foto}
            alt="Live from space album cover"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto', mt: 5 }}>
              <Typography component="div" variant="h5">
                {oneSpace.nombre}
              </Typography>
              <Typography
                component="div"
                variant="p"
                style={{ marginRight: '1%' }}
              >
                Temàtica
                <Typography
                  variant="p"
                  color="text.secondary"
                  style={{ marginLeft: '0.3rem' }}
                >
                  {oneSpace.genero}
                </Typography>
              </Typography>
            </CardContent>
          </Box>
        </Card>
        <Card sx={{ display: 'flex', padding: 0 }}>
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
                {oneSpace.descripcion}
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
                      Dies i horaris:
                      <Typography
                        variant="p"
                        color="text.secondary"
                        style={{ marginLeft: '0.3rem' }}
                      >
                        Dilluns a divendres de les 7:00 a les 7:15
                      </Typography>
                    </Typography>
                    <Typography component="div" variant="p">
                      Aforament:
                      <Typography
                        variant="p"
                        color="text.secondary"
                        style={{ marginLeft: '0.3rem' }}
                      >
                        {oneSpace.capacidad}
                      </Typography>
                    </Typography>
                    <Typography component="div" variant="p">
                      Web:
                      <Typography
                        variant="p"
                        color="text.secondary"
                        style={{ marginLeft: '0.3rem' }}
                      >
                        {oneSpace.web}
                      </Typography>
                    </Typography>
                    <Typography component="div" variant="p">
                      Equipament:
                      <Typography
                        variant="p"
                        color="text.secondary"
                        style={{ marginLeft: '0.3rem' }}
                      >
                        {oneSpace.instrumentacion}
                      </Typography>
                    </Typography>
                    <Typography component="div" variant="p">
                      Lgtbfriendly:
                      <Typography
                        variant="p"
                        color="text.secondary"
                        style={{ marginLeft: '0.3rem' }}
                      >
                        {oneSpace.ltbfrendly}
                      </Typography>
                    </Typography>
                    <Typography component="div" variant="p">
                      Petfriendly:
                      <Typography
                        variant="p"
                        color="text.secondary"
                        style={{ marginLeft: '0.3rem' }}
                      >
                        {oneSpace.petfrendly}
                      </Typography>
                    </Typography>
                    <Typography component="div" variant="p">
                      Notes:
                      <Typography
                        variant="p"
                        color="text.secondary"
                        style={{ marginLeft: '0.3rem' }}
                      >
                        {oneSpace.notas}
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
                    alignItems: 'center',
                  }}
                >
                  <CardContent
                    sx={{
                      flex: '1 0 auto',
                    }}
                  >
                    <Typography variant="p" style={{ marginRight: "1%" }}>
                      Número telèfon:
                      <Typography
                        variant="p"
                        color="text.secondary"
                        style={{ marginLeft: '0.3rem' }}
                      >
                        {oneSpace.telefono1}
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
                        {oneSpace.email1}
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
                        {oneSpace.redsocial1}
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
                        {oneSpace.redsocial2}
                      </Typography>
                    </Typography>
                    <Typography
                      component="div"
                      variant="p"
                      style={{ marginRight: '1%' }}
                    >
                      Ubicació:
                      <Typography
                        variant="p"
                        color="text.secondary"
                        style={{ marginLeft: '0.3rem' }}
                      >
                        {oneSpace.ubicacion}
                      </Typography>
                    </Typography>
                    <Typography
                      component="div"
                      variant="p"
                      style={{ marginRight: '1%' }}
                    >
                      Fàcil accés:
                      <Typography
                        variant="p"
                        color="text.secondary"
                        style={{ marginLeft: '0.3rem' }}
                      >
                        L3, L1, bicing
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
                  <Link to="/admin/editarespais" style={{textDecoration: "none"}}>
                  <Button>Editar</Button>
                  <Button style={{ color: "red" }}>Eliminar</Button>
                  </Link>
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
