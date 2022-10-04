import React, { useState } from "react";
import { Grid, FormGroup, Box, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../services/authService";
import HeaderBlue from "../components/HeaderBlue";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState({ email, password });
  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email: email, password: password };
    authService
      .login(user)
      .then((res) => {
        setUser(res.data.token);
        localStorage.setItem("user", res.data.token);
        if (res.data.token) {
          navigation("/homepage", { replace: true });
        }
      })
      .catch(() => setError("Hubo un error"));
  };
  return (
    <>
      <Grid
        container
        style={{
          backgroundColor: "#E2A0FF",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
      
          
        }}
      >
        <HeaderBlue />
        <Grid
          item
          xs={10}
          style={{

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            width: "22rem",
            maxHeight: "27rem",
            borderRadius: "1rem",
            border: "5px solid #cdcecf",
            marginTop: "3rem"
      

          }}
        >
          <FormGroup className="form" xs={10}>
            <p
              style={{
                fontSize: "2rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Iniciar sessió
            </p>
            <Box style={{ lineHeight: "1px" }}>
              <p>Correu electrònic:</p>
              <input
                type="text"
                style={{
                  fontSize: "1.2rem",
                  borderRadius: "10px",
                  border: "1px solid grey",
                }}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>

           <Box sx={{ mt: "3rem" }} style={{ lineHeight: "1px" }}>

              <p>Contrasenya:</p>
              <input
                type="password"
                style={{
                  fontSize: "1.2rem",
                  borderRadius: "10px",
                  border: "1px solid grey",
                }}
                onChange={(e) => setPassword(e.target.value)} 
              />
            </Box>
            <Box style={{ lineHeight: "1px", fontSize: "0.8rem" }}>
              <p>Encara no tens compte? </p>
              <p>Pots enregistrar-te</p>
              <Link to="/register" style={{textDecoration:"none"}}>aquí</Link>
            </Box>
          </FormGroup>
        </Grid>
        <Link to="/homepage" style={{textDecoration:"none"}}>
          <Button
            onClick={handleSubmit}
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
              margin: "1.3em",
        
            }}
          >
            Enviar{" "}
          </Button>
        </Link>
      </Grid>
      {error}
    </>
  );
}
