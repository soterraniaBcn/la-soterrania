import React from 'react'
import { Grid } from '@mui/material'
import MediaCardArtistas from '../components/MediaCardArtistas'
import FooterAzul from '../components/FooterAzul'

export default function Artistas() {
  return (
    <>
      <Grid container style={{ height: '100vh' }}>
        <Grid item style={{ width: '100vw' }}>
          <MediaCardArtistas />
        </Grid>
        <FooterAzul />
      </Grid>
    </>
  )
}
