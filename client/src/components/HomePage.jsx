
import { Grid, Box ,Container} from "@mui/material";
import React from 'react';
//import flecha2 from '../imagenes/flecha2.png';
import flecha from '../imagenes/flecha.png';
 import escenario from '../imagenes/escenario.png';
 import evento2 from '../imagenes/evento2.png';
 import espacio from '../imagenes/espacio.png';
 import espai from '../imagenes/espai.png';
 //import evento from '../imagenes/evento.png';
import mujer from '../imagenes/mujer.png';
//import persona2 from '../imagenes/persona2.png';
import señor from '../imagenes/señor.png';
// import tambor from '../imagenes/tambor.png';
// import trompeta from '../imagenes/trompeta.png';
 import usuario1 from '../imagenes/usuario1.png';
// import violin from '../imagenes/violin.png';
import Footer from './FooterAzul'
import Header from "./Header.jsx";
import { Link } from "react-router-dom";
//import { height } from "@mui/system";


export default function HomePage() {
    return ( 
   
    <>
  
            <Box style={{height:"10rem",width:"100vw",backgroundColor:"#1446A0"}}> 
            <Header/>
            </Box>
        <Grid container className="flow" >
           
         
        <Box className="team" >
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
                   <img src={flecha} alt="flecha" style={{width:"5rem",height:"5rem",marginTop:"9rem",marginLeft:"3rem"}}/>
                   </Link>
            </Grid>
        </Box>
       

        <Box className="team" style={{marginTop:"10rem"}}>
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
                <Link to = "/artistes">
                   <img src={flecha} alt="flecha" style={{width:"5rem",height:"5rem",marginTop:"9rem",marginLeft:"3rem"}}/>
                   </Link>
            </Grid>
        </Box>

       

             <Box className ="event" style={{marginTop:"10rem"}}>
        <p className="eventos" style={{ fontSize:"30px",fontWeight:"bold",color:"#1446A0",marginLeft:"-20rem"}}>Eventos</p>
        <Grid container style={{width:"100%",display:"flex",justifyContent:"center"}} >
    <img className="events" style={{width:"600px",height:"600px",position:"relative"}} src={evento2} alt="evento" />
    <Link style={{textDecoration:"none",fontSize:"1.7rem"}} to = "/esdeveniments">
    <p style={{ marginTop:"15rem",marginLeft:"-28rem",position:"relative",color:"#1446A0", fontFamily:"Inter", fontWeight:"bold",fontSize:"2rem",zIndex:"2"}}id ="calle">Veure més Esdeveniments</p>
    </Link>
 
        </Grid>
          
        </Box>
           
     
    </Grid>

    <Footer/>
    </>
)
}
        
    