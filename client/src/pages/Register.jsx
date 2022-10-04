import React, { useState, useRef } from "react";
import {
  Grid,
  FormGroup,
  RadioGroup,
  Radio,
  FormControlLabel,
  TextareaAutosize,
  Box,
  Button,
} from "@mui/material";
import HeaderBlue from "../components/HeaderBlue";
import { useNavigate } from "react-router-dom";
import FooterGris from "../components/FooterGris";
import { authService } from "../services/authService";

export default function Register() {
  const nameRef = useRef(null);
  const groupNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const descriptionRef = useRef(null);
  const linkRef = useRef(null);
  const [role, setRole] = useState("");
  const roleChange = (e, value) => {
    setRole(value);
  };

  const navigator = useNavigate();

  const handleClick = (e) => {
    const registerData = {
      rol: role,
      nombre: nameRef.current.value,
      nombre_artista_espacio: groupNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      descripcion: descriptionRef.current.value,
      link: linkRef.current.value,
    };
    authService.register(registerData).then(() => {
      navigator("/espera", { replace: true });
    });
  };
  return (
    <>
      <Grid
        container
        id="register"
        style={{
          backgroundColor: "#CDCECF",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
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
            width: "27rem",
            height: "auto",
            borderRadius: "1rem",
            marginTop: "3rem",
            padding: "3rem",
            border: "2px solid #EA20FF",
          }}
        >
          <FormGroup className="checkbox" style={{ lineHeight: "1px" }}>
            <RadioGroup
              onChange={roleChange}
              className="use-radio-group"
              defaultValue="disabled"
              style={{
                display: "flex",
                flexDirection: "row",
                fontFamily: "Consolas",
            
              }}
            >
              <FormControlLabel
                value="artista"
                label="Artista"
                control={<Radio />}
              />
              <FormControlLabel
                value="espai"
                label="Espai"
                control={<Radio />}
                
              />
            </RadioGroup>
            <Grid item>
              <Box style={{ lineHeight: "1px" }}>
                <p>Nom i cognoms:</p>
                <input
                  ref={nameRef}
                  type="text"
                  style={{
                    width: "auto",
                    fontSize: "1.1rem",
                    borderRadius: "1rem",
                    border: "0.1rem solid grey",
                  }}
                />
              </Box>
              <Box style={{ lineHeight: "1px" }}>
                <p>Nom del grup/espai:</p>
                <input
                  ref={groupNameRef}
                  type="text"
                  style={{
                    color: "#000000",
                    width: "auto",
                    fontSize: "1.1rem",
                    borderRadius: "10px",
                    border: "1px solid grey",
                  }}
                />
              </Box>
              <Box style={{ lineHeight: "1px" }}>
                <p>Correu electrònic:</p>
                <input
                  ref={emailRef}
                  type="text"
                  style={{
                    color: "#000000",
                    width: "auto",
                    fontSize: "1.1rem",
                    borderRadius: "10px",
                    border: "1px solid grey",
                  }}
                />
              </Box>
              <Box style={{ lineHeight: "1px" }}>
                <p>Contrasenya:</p>
                <input
                  ref={passwordRef}
                  type="text"
                  style={{
                    fontSize: "1.1rem",
                    borderRadius: "10px",
                    border: "1px solid grey",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xl={4}>
              <Box style={{ lineHeight: "1px" }}>
                <p>Descripció:</p>
                <TextareaAutosize
                  ref={descriptionRef}
                  maxRows={6}
                  aria-label="maximum height"
                  placeholder="Escriu una breu descripció..."
                  defaultValue=""
                  style={{
                    fontFamily: "Consolas",
                    fontSize: "1.1rem",
                    marginTop: 0,
                    borderRadius: "10px",
                    border: "1px solid grey",
                  }}
                />
              </Box>
              <Box style={{ lineHeight: "1px" }}>
                <p>Links vídeos:</p>
                <TextareaAutosize
                  ref={linkRef}
                  maxRows={2}
                  aria-label="maximum height"
                  placeholder="Els teus links"
                  defaultValue=""
                  style={{
                    fontFamily: "Consolas",
                    fontSize: "1.1rem",
                    marginTop: 0,
                    borderRadius: "10px",
                    border: "1px solid grey",
                  }}
                />
              </Box>
            </Grid>
          </FormGroup>
        </Grid>
        <Button
          onClick={handleClick}
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
            margin: "0.8rem",
          }}
        >
          Enviar
        </Button>
      </Grid>
      <FooterGris />
    </>
  );
}
