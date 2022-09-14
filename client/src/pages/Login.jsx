import React from 'react';
import {Grid, FormGroup, Box, Button} from '@mui/material';
import Header from '../components/Header';




export default function Login(){

    return (
            <>
         <Grid container
            style={{ backgroundColor: '#E2A0FF',
            height: '100vh',
            display: 'flex',
            justifyContent:'center', 
            alignItems: 'center', 
            flexDirection: 'column',
           }}>
              
              <Header/>
        
         <Grid item xs={8}
        
        style={{display:'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              backgroundColor:'white',
              width:'24rem',
              height:'26rem',
              borderRadius:"1rem",
              border: '5px solid #cdcecf',
              marginTop:"2rem"}}>

            <FormGroup className='form'xs={8}>
            <p style={{fontSize:'2rem', display: 'flex',
             justifyContent: 'center'}}>LOGIN</p>  
            <Box style={{lineHeight:"1px"}}>
              <p>Correu electrònic:</p>
              <input type="text"
                style={{ fontSize: "1.2rem",
                    borderRadius: "10px",
                    border:"1px solid grey"
                    
                }} />
            </Box>
              
            <Box sx={{mt:'3rem'}} style={{lineHeight:"1px"}}>
              <p>Contrasenya:</p>
              <input type="text"
              style={{fontSize: "1.2rem",
                      borderRadius: "10px",
                      border: "1px solid grey"
                    
                }} />
              </Box> 
              <Box style={{lineHeight:"1px", fontSize:'0.8rem'}}>
              <p>Encara no tens compte? </p>
            
              <p>Pots enregistrar-te</p>
              <a href="#register">aquí</a>
      
    
            </Box>


          </FormGroup> 
          </Grid>
                
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
                  Enviar </Button>

        
        </Grid>
    
    
        </>
       
    )
}
