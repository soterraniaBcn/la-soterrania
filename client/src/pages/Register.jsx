import React from 'react';
import {Grid, FormGroup, RadioGroup, Radio, FormControlLabel, TextareaAutosize, Box, Button} from '@mui/material';
import Header from '../components/Header';
import {Link} from 'react-router-dom'


export default function Register(){

    return (
          <>

         <Grid container
         id="register"
            style={{ backgroundColor: '#cdcecf',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'center', 
            alignItems: 'center',
            position: 'absolute',
            paddingTop:'0'
      
           
            }}>
                   <Header/>
              
                    <Grid item xs={10} style={{ display: 'flex',flexDirection:'row',

                     alignItems: 'center', 
                     justifyContent: 'center',
                     backgroundColor:'white',
                     width:'25rem',
                     maxHeight:'30rem',
                     borderRadius:"1rem",
                     marginTop:"6rem",
                     border: '2px solid #ea20ff'
                    
                      }}>
                       
                    
                
    
                   <FormGroup className='checkbox'style={{lineHeight:"1px"}}>
             
                    <RadioGroup className="use-radio-group" defaultValue="disabled" style={{display:"flex", flexDirection:'row', fontFamily:'Consolas'}} >
                    <FormControlLabel  value="artista" label="Artista"  control={<Radio />} />
                    <FormControlLabel  value="espai" label="Espai"  control={<Radio />} />
                    </RadioGroup>

                  
                    <Grid item>
              
                    <Box style={{lineHeight:"1px"}}>
                        <p>Nom i cognoms:</p>
                        <input type="text"
                         style={{
                         width:'auto',
                         fontSize: "1.1rem",
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
                          fontSize: "1.1rem",
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
                           fontSize: "1.1rem",
                           borderRadius: "10px",
                           border:"1px solid grey"
                    
                          }} />
                    </Box> 
            
                    <Box style={{lineHeight:"1px"}}>
                           <p>Contrasenya:</p>
                           <input type="text"
                           style={{
                           fontSize: "1.1rem",
                           borderRadius: "10px",
                           border: "1px solid grey"
                    
                          }} />
                     </Box> 
                    </Grid>
                    

                    <Grid item xl={4}>
                     <Box style={{lineHeight:"1px"}}>
                           <p>Descripció:</p>
                          <TextareaAutosize
                               maxRows={6}
                               aria-label="maximum height"
                               placeholder="Escriu una breu descripció..."
                               defaultValue=""
                               style={{ fontFamily:'Consolas',
                               fontSize:'1.1rem',
                               marginTop:0, 
                               borderRadius: '10px', 
                               border:"1px solid grey" }}
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
                                fontSize: '1.1rem',
                                marginTop:0,  
                                borderRadius: '10px',
                                border:"1px solid grey" }}
                               />
                      </Box> 
                      </Grid>
                     </FormGroup>
                  
                     </Grid>
                <Link to='/espera'>
                <Button 
                  style={{
                        backgroundColor: "#E2A0FF",
                        width: "7rem",
                        height: "1.8rem",
                        borderRadius: "40px",
                        color: "black",
                        textTransform: "capitalize",
                        fontSize: "1rem",
                        fontWeight: "200",
                        border: "2.5px solid grey",
                        margin: "0.8rem"
                  }}
                  >
                  Enviar
                </Button>
                </Link>
           </Grid>
 
        </>
    )
  }

