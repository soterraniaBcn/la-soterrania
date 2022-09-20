import React from 'react'
import { Grid, Typography } from '@mui/material'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <Grid
        container
        style={{
          backgroundColor: '#E2A0FF',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Header />
        <Grid
          container
          className="about-container"
          style={{
            maxWidth: '80rem',
            mt: 5,
            backgroundColor: 'white',
            pl: 3,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
          }}
        >
          <h2>
          Muchas gracias por tu solisitud, en breve tendras noticias del
          equipo!! 
          </h2>

          <Typography
            variant="h1"
            color="black"
            component="div"
            style={{ padding: '2rem', fontSize: '1rem', lineHeight: '2rem' }}
          >
            <h4>
              Puedes entrar en contacto con nosotros a travez de este e-mail
            </h4>
            <Link to={{}}>laquenosepresentaalasreuniones@gmail.com</Link>
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}
