
import { Grid, Box } from "@mui/material";
import React from 'react';
import flecha from '../imagenes/flecha.png';
 import escenario from '../imagenes/escenario.png';
 import evento2 from '../imagenes/evento2.png';
 import espacio from '../imagenes/espacio.png';
 import espai from '../imagenes/espai.png';
 import evento from '../imagenes/evento.png';
import mujer from '../imagenes/mujer.png';
//import persona2 from '../imagenes/persona2.png';
import señor from '../imagenes/señor.png';
// import tambor from '../imagenes/tambor.png';
// import trompeta from '../imagenes/trompeta.png';
 import usuario1 from '../imagenes/usuario1.png';
// import violin from '../imagenes/violin.png';

import Header from "./Header.jsx";
import { Link } from "react-router-dom";


export default function HomePage() {
    return ( 
    <>
            <Box style={{height:"10rem",width:"100vw", overflowY:"auto"}}> 
            <Header/>
            </Box>
        <Grid container className="flow " style={{}}>
           
           <Grid item style={{}}>
        <Box className="team" style ={{marginTop:"7rem"}}>
        <p className="artista" style={{fontSize:"30px",fontWeight:"bold"}}>Artistas</p>
            <Grid container className="auto-grid" role="list">

                <a href="" target="_blank" className="profile">
                    <h2 className="profile__name">Ruby Simmons</h2>
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
                   
            <Link to = "/artistes">
                   <img src={flecha} alt="flecha" style={{width:"5rem",height:"5rem"}}/>
                   </Link>
            </Grid>
        </Box>
       

        <Box className="team" >
        <p className="artista" style={{fontSize:"30px",fontWeight:"bold"}}>Espai</p>
            <Grid container className="auto-grid" role="list">

                <a href="" target="_blank" className="profile">
                    <h2 className="profile__name">Glories</h2>
                    <p className="genero">Avinguda Diagonal,208</p>
                    <img src={espacio} alt="mujer" />
                </a>

                
                <a href="" target="_blank" className="profile">
                    <h2 className="profile__name">Badalona</h2>
                    <p className="genero">Carrer de Ribas i Perdigó, 42</p>
                    <img src={espai} alt="señor" />
                </a>

                
                <a href="" target="_blank" className="profile">
                    <h2 className="profile__name">Madrid</h2>
                    <p className="genero">Calle de Méndez Álvaro, 28045 Madrid</p>
                    <img src={escenario} alt="usuario1" />
                </a>
            </Grid>
        </Box>
        <p className="artista" style={{fontSize:"30px",fontWeight:"bold"}}>Eventos</p>
        <Grid Item style ={{width:"800px",height:"auto",display:"flex",justifyContent:"center"}}>
        <Box  id ="eventos" >              
    <img style={{width:"600px",position:"absolute"}} src={evento2} alt="evento" />
    <a style ={{textDecoration:"none",fontSize:"1.7rem"}} href="" target="_blank" id="perfil">
    <p style={{position:"relative",marginLeft:"250px",marginTop:"50%",color:"white", fontFamily:"SansSerif", fontWeight:"bold"}}id ="calle">Esdeveniments</p>
    </a>
           </Box>
           </Grid>
        </Grid>
    </Grid>
    </>
)
}
        
    