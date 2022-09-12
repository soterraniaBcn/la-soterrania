import React from 'react';
import {Container, FormGroup, FormControlLabel, Box, Button, Checkbox} from '@mui/material';
import Footer from '../components/Footer';
import HeaderSearch from '../components/HeaderSearch';

export default function PerfilAdmin(){

    return (
   <>
         <Container maxWidth="xl" position="fixed"
            style={{ backgroundColor: 'white',
            height: '100vh',
            display: 'flex',
            justifyContent:'center', 
            alignItems: 'center', 
            flexDirection: 'column'}}>
              
            
        
         

 

              
               
                
    
                <Button
                  style={{
                      backgroundColor: "#E2A0FF",
                      width: "9rem",
                      height: "2rem",
                      borderRadius: "40px",
                      color: "black",
                      textTransform: "capitalize",
                      fontSize: "1rem",
                      fontWeight: "200",
                      border: "2.5px solid black",
                      margin: "1.3em"
                    }}
                    >
                  Enviar
                </Button>

            
    

         
    
        </Container>
        <Footer/>
        </>
      
      
      

    )
}
