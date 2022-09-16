import HeaderRight from "./Header";
import background from '../imagenes/background.png';
import { Grid, Container, Button, Box } from "@mui/material";
import React from 'react';




export default function Home() {
    return (

        <Container style={{}}>

            <Grid container className="home" >


                <img className="hero-image" src={background} alt="" />
                <HeaderRight />
                <Box className="hero-text">
                    <h4>La Soterrania </h4>
                    <p>Plataforma de difusió cultural que promou vincles entre artistes i</p>
                    <p> espais socials/culturals alternatius.</p>

                </Box>
                <Box>  
                    <Button class Name="btn-grad">Enviar</Button>
                 </Box>
            </Grid>

        </Container>



    )
}