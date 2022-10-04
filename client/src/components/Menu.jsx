import React from 'react'
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <Grid
      container
      className="menu-container"
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: '5vh',
        width: '100%',
      }}
    >
      <Grid
        item
        className="menu-links-container"
        sm={10}
        md={10}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '80px',
          width: '50vw',
          color: 'white',
        }}
      >
        <Link to="/sobrenosaltres" className="links-menu">
          Sobre nosaltres
        </Link>
        <Link to="/artistes" className="links-menu">
          Artistes
        </Link>
        <Link to="/espais" className="links-menu">
          Espais
        </Link>
        <Link to="/esdeveniments" className="links-menu">
          Esdeveniments
        </Link>
      </Grid>
    </Grid>
  )
}
