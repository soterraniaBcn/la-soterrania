import React from 'react';
import {Grid, FormGroup, TextareaAutosize, Box, Button} from '@mui/material';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

export default function NewPost(){

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
           
            }}>
              
      {<Header/>}
        
                    <Grid item xs={8} style={{ display: 'flex',flexDirection:'row',
                     alignItems: 'center', 
                     justifyContent: 'center',
                     backgroundColor:'white',
                     width:'25rem',
                     height:'28rem',
                     borderRadius:"1rem",
                     marginTop:"3rem",
                     border: '2px solid #ea20ff'
                    
                      }}>
                    
                
    
                    <FormGroup sx={{paddingY:'10px'}} className='checkbox'style={{lineHeight:"1px"}}>
                 
                    <Grid item>
              
                    <Box style={{lineHeight:"1px"}}>
                        <p>Nombre del evento:</p>
                        <input type="text"
                         style={{
                         width:'auto',
                         fontSize: "1.1rem",
                         borderRadius: "1rem",
                         border:"0.1rem solid grey"
                    
                         }} />
                    </Box> 
              
                    <Box style={{lineHeight:"1px"}}>
                         <p>Artista/Banda:</p>
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
                    </Grid>                  
                    <Grid item xl={4}>
                     <Box style={{lineHeight:"1px"}}>
                           <p>Descripció:</p>
                          <TextareaAutosize
                               maxRows={6}
                               aria-label="maximum height"
                               placeholder="Escriu una breu descripció...          0/80"
                               defaultValue=""
                               style={{ fontFamily:'Consolas',
                               fontSize:'1.1rem',
                               marginTop:0, 
                               borderRadius: '10px', 
                               border:"1px solid grey" }}
                               />
                      </Box>
                      <Box style={{lineHeight:"1px"}}>
                          <p>Notas:</p>
                          <input type="text"
                           style={{
                           color: "#000000",
                           width: "auto",
                           fontSize: "1.1rem",
                           borderRadius: "10px",
                           border:"1px solid grey"
                    
                          }} />
                      </Box> 
                      </Grid>
                     </FormGroup>
                  
                     </Grid>
            <Link to="/espera">
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

