import React from 'react'
import { Grid, Typography} from '@mui/material'
import HeaderBlue from '../components/HeaderBlue'
import { Link } from 'react-router-dom'
export default function About() {
  return (
    <>
      <Grid
        container
        style={{
          backgroundColor: "#E2A0FF",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: 0
        }}
      >
        <HeaderBlue />
        <Grid
          item
          xs={8}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            width: "22rem",
            maxHeight: "27rem",
            borderRadius: "1rem",
            border: "5px solid #CDCECF",
            marginTop: "2rem",
            marginBottom: "8.5rem"
          }}
        >
          <Grid container style={{justifyContent:"center", maxWidth:"80%"}}>
        <p style={{fontSize:"2rem"}}>Moltes gràcies per la vostra sol·licitud!</p>
        <Typography
                variant="p"
                color="black"
                fontFamily="Consolas"
                component="div"
                fontSize="1.1rem"
                lineHeight="2rem"
              >
    En breu tindràs notícies de l'equip ;)
    </Typography>
    <Typography
                variant="p"
                color="black"
                fontFamily="Consolas"
                component="div"
                fontSize="0.8rem"
                lineHeight="2rem"
              >
    Podeu entrar en contacte amb nosaltres a través d'aquest e-mail:<Link to={{}}>lasoterrania@gmail.com</Link>
    </Typography>
    </Grid>
        </Grid>
      </Grid>
</>
  )
}