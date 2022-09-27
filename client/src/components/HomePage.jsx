
import { Grid, Box } from "@mui/material";
import React from 'react';

// import { flexbox } from "@mui/system";
 import escenario from '../imagenes/escenario.png';
 //import escenario2 from '../imagenes/escenario2.png';
 import espacio from '../imagenes/espacio.png';
 import espai from '../imagenes/espai.png';
 //import evento from '../imagenes/evento.png';
import mujer from '../imagenes/mujer.png';
import persona2 from '../imagenes/persona2.png';
import señor from '../imagenes/señor.png';
// import tambor from '../imagenes/tambor.png';
// import trompeta from '../imagenes/trompeta.png';
 import usuario1 from '../imagenes/usuario1.png';
// import violin from '../imagenes/violin.png';
import Menu from "./Menu.jsx";
import Header from "./Header.jsx";


export default function HomePage() {
    return ( 
    
        <Grid container className="flow" style={{}}>
            
            <Header/>
            <p className="artista">Artistas</p>
           
        <Box className="team">
            <Grid container className="auto-grid" role="list">

                <a href="" target="_blank" className="profile">
                    <h2 className="profile__name">ruby Simmons</h2>
                    <p className="genero">Rock</p>
                    <img src={mujer} alt="mujer" />
                </a>

                
                <a href="" target="_blank" className="profile">
                    <h2 className="profile__name">Marcos Harris</h2>
                    <p className="genero">Jazz</p>
                    <img src={señor} alt="señor" />
                </a>

                
                <a href="" target="_blank" className="profile">
                    <h2 className="profile__name">Jim Morris</h2>
                    <p className="genero">Pop</p>
                    <img src={usuario1} alt="usuario1" />
                </a>
            </Grid>
        </Box>

        <Box className="team">
        <p className="artista">Espai</p>
            <Grid container className="auto-grid" role="list">

                <a href="" target="_blank" className="profile">
                    <h2 className="profile__name">ruby Simmons</h2>
                    <p className="genero">Rock</p>
                    <img src={espacio} alt="mujer" />
                </a>

                
                <a href="" target="_blank" className="profile">
                    <h2 className="profile__name">Marcos Harris</h2>
                    <p className="genero">Jazz</p>
                    <img src={espai} alt="señor" />
                </a>

                
                <a href="" target="_blank" className="profile">
                    <h2 className="profile__name">Jim Morris</h2>
                    <p className="genero">Pop</p>
                    <img src={escenario} alt="usuario1" />
                </a>
            </Grid>
        </Box>
        
    </Grid>
)
}
        
    