import background5 from '../imagenes/background5.png';
import { Grid, Container, Button,Box } from "@mui/material";
import React from 'react';
import { Link } from "react-router-dom";
import Menu from "./Menu.jsx";
import Header from "./Header.jsx";




export default function Home(){
    return(
     
   
       <Grid container className="padre2" style={{}}>
       <Header/>
        <Menu/>
    
                <img className="hero-image" src={background5} alt=""/>
    
                <h1 className ="hero-text">la soterrània</h1>
                <p className ="hero-texts">Plataforma de difusió cultural que promou vincles entre artistes i espais socials/culturals alternatius.</p>
                <Box style ={{width:"100%"}}>
                <Link className ="button1" to="/login" style={{textUnderline: "none"}}> 
                <Button className="btn-grad">Login</Button>
                </Link>
                </Box>

            </Grid>
            

       



    )
}