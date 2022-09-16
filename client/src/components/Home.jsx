import background from '../imagenes/background.png';
import {Grid,Container,Button,} from "@mui/material";
import React from 'react';




export default function Home(){
    return(
     
       <Container fluid >
       <Grid container xl={12} >
     
        
                <img className="hero-image" src={background} alt=""/>
    
                <h1 className ="hero-text">La soterrània</h1>
                <h6 className ="hero-text">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
                
                
                <Button className="btn-grad">Enviar</Button>
               

            </Grid>
        </Container>

    

    )
}