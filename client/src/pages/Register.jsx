import React from 'react';
import {Container, Item, Grid, FormGroup, FormControlLabel, TextareaAutosize, Box, Button, Checkbox} from '@mui/material';
import HeaderRight from '../components/Header'



export default function Register(){

    return (
          <>
         <Grid container position="fixed"
            style={{ backgroundColor: '#cdcecf',
            height: '100vh',
            display: 'flex',
            justifyContent:'center', 
            alignItems: 'center',
            flexDirection:'column' 
            }}>
              
              <HeaderRight/>
        
                    <Grid container xs={8} style={{ display: 'flex',flexDirection:'column',
                     alignItems: 'center', 
                     justifyContent: 'center',
                     backgroundColor:'white',
                     width:'28rem',
                     height:'33rem',
                     borderRadius:"0.5rem",
                     marginTop:"2rem",
                     border: '2px solid #ea20ff'
                    
                      }}>
                    
                
    
                    <FormGroup sx={{py:'1.8rem'}} className='checkbox'style={{lineHeight:"1px"}}>
                         <p>Sóc:</p>
                         <FormGroup style={{display:"flex", flexDirection:'row'}}>
                         <FormControlLabel control={<Checkbox style={{color:'#E2A0FF'}}/>} label="Artista" style={{fontFamily:'Consolas'}} />
                         <FormControlLabel control={<Checkbox style={{color:'#E2A0FF'}} />} label ="Espai" style={{fontFamily:'Consolas'}} />
                          </FormGroup>

          
              
                    <Box style={{lineHeight:"1px"}}>
                        <p>Nom i cognoms:</p>
                        <input type="text"
                         style={{
                         width:'auto',
                         fontSize: "1.2rem",
                         borderRadius: "1rem",
                         border:"0.1rem solid grey"
                    
                         }} />
                    </Box> 
              
                    <Box style={{lineHeight:"1px"}}>
                         <p>Nom del grup/espai:</p>
                         <input type="text"
                          style={{
                          color: "#000000",
                          width: "auto",
                          fontSize: "1.2rem",
                          borderRadius: "10px",
                          border:"1px solid grey"
                          }} />
                    </Box> 
              
                    <Box style={{lineHeight:"1px"}}>
                          <p>Correu electrònic:</p>
                          <input type="text"
                           style={{
                           color: "#000000",
                           width: "auto",
                           fontSize: "1.2rem",
                           borderRadius: "10px",
                           border:"1px solid grey"
                    
                          }} />
                    </Box> 
            
                    <Box style={{lineHeight:"1px"}}>
                           <p>Contrasenya:</p>
                           <input type="text"
                           style={{
                            display: 'block',
                           width: "autofix",
                           fontSize: "1.2rem",
                           borderRadius: "10px",
                           border: "1px solid grey"
                    
                          }} />
                     </Box> 
              
                     <Box style={{lineHeight:"1px"}}>
                           <p>Descripció:</p>
                          <TextareaAutosize
                               maxRows={6}
                               aria-label="maximum height"
                               placeholder="Escriu una breu descripció..."
                               defaultValue=""
                               style={{ fontFamily:'Consolas',fontSize:'1rem', marginTop:0, width:'13.3rem', borderRadius: '10px', border:"1px solid grey" }}
                               />
                      </Box>
                   
                    
                      <Box style={{lineHeight:"1px"}}>
                              <p>Links vídeos:</p>
                              <TextareaAutosize
                               maxRows={2}
                               aria-label="maximum height"
                               placeholder="Els teus links"
                               defaultValue=""
                               style={{ fontFamily: 'Consolas',
                                fontSize: '1rem',
                                marginTop:0, 
                                width:'13.3rem', 
                                borderRadius: '10px',
                                border:"1px solid grey" }}
                               />
                      </Box> 
                     </FormGroup>
                  
                     </Grid>
      
                <Button
                  style={{
                    backgroundColor: "#E2A0FF",
                    width: "7rem",
                    height: "2rem",
                    borderRadius: "40px",
                    color: "black",
                    textTransform: "capitalize",
                    fontSize: "1rem",
                    fontWeight: "200",
                    border: "2.5px solid grey",
                    margin: "1.2em"
                  }}
                  >
                  Enviar
                </Button>
                    
                      
        
        </Grid>
        </>
    )
}
