import React from 'react';
import {Grid, Box, Button} from '@mui/material';
import SearchBar from '../components/SearchBar';

export default function Login(){

    return (
   <>
         <Grid container
            style={{ backgroundColor: 'white',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
           
           }}>
              
        
         <Box item fluid
        
        style={{
            backgroundColor:'#E2A0FF',
            marginTop:0,
            height:'10rem',
            
        }}>
                  <SearchBar/>

            
                  </Box>
                <Button
                  style={{
                      backgroundColor: "#cdcecf",
                      width: "7rem",
                      height: "2rem",
                      borderRadius: "40px",
                      color: "black",
                      textTransform: "capitalize",
                      fontSize: "1rem",
                      fontWeight: "200",
                      border: "2.5px solid grey",
                      margin: "1.3em"
                    }}
                    >
                  Enviar
                </Button>

            
    

         
    
        </Grid>
        </>
      
      
      

    )
}