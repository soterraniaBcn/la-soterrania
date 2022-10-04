import background5 from '../imagenes/background5.png';
import { Grid, Button } from "@mui/material";
import React from 'react';
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/FooterNegro";




export default function Home(){
    return(
     
        <>
   
       <Grid container className="padre2" style={{height:"100vh", width:"100vw", zIndex:"3"}}>
       <Header/>
    
                <img style={{zIndex:"-1"}}className="hero-image" src={background5} alt=""/>
    
                <Grid item>
                <h1 className ="hero-text">la soterrània</h1>
                <p className ="hero-texts">Plataforma de difusió cultural que promou vincles entre artistes i espais socials/culturals alternatius.</p>
            
                <Link className ="button1" to="/login" style={{textUnderline: "none"}}> 
                <Button  className="btn-grad">Login</Button>
                </Link>
                </Grid>
            </Grid>
                <Footer/>
           </> 

       



    )
}