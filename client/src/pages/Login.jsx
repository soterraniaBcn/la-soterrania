import React, { useState } from 'react';
import {Grid, FormGroup, Box, Button} from '@mui/material';
import Header from '../components/Header';
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../services/authService";



export default function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState({ email, password });
  const navigation = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email: email, password: password };
    console.log(user)
    authService
      .login(user)
      .then((res) => {
        console.log(res.data.token)
        setUser(res.data.token);
        localStorage.setItem("user", res.data.token);
        if (res.data.token) {
          navigation("/myprofile", { replace: true })
        }
      })
      .catch(() => setError("Hubo un error"));
  };


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
                    
                }}
                onChange={(e) => setEmail(e.target.value)} />
            </Box>
              
            <Box sx={{mt:'3rem'}} style={{lineHeight:"1px"}}>
              <p>Contrasenya:</p>
              <input type="text"
              style={{fontSize: "1.2rem",
                      borderRadius: "10px",
                      border: "1px solid grey"
                }} 
                onChange={(e) => setPassword(e.target.value)}
                />
              </Box> 
              <Box style={{lineHeight:"1px", fontSize:'0.8rem'}}>
              <p>Encara no tens compte? </p>
            
              <p>Pots enregistrar-te</p>
              <a href="/register">aquí</a>
      
    
            </Box>


          </FormGroup> 
          </Grid>
                <Link to="/homepage">

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
                    onClick={handleSubmit}
                    >
                  Enviar </Button>

                      </Link>
        
        </Grid>
    
    
        </>
       
    )
}
