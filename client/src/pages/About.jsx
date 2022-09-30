import React from "react";
import { Grid,Box, Typography } from "@mui/material";
import HeaderBlue from "../components/HeaderBlue";
import FooterGris from "../components/FooterGris";

export default function About() {
  return (
    <>
       
      <Grid
        container style={{display:"flex", justifyContent:"center"}}
        
      
      
          
    
      >
        <Box style={{
          backgroundColor: "#cdcecf",
          height: "10rem",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection:"column"}}>
    
        <HeaderBlue />
        </Box>
  

  
  
       <Grid container style={{justifyContent:"center", mt:5, backgroundColor:"white",maxWidth:"80%"}}>
        <p style={{fontSize:"2rem"}}>Sobre nosaltres</p>
        <Typography 
                variant="p"
                color="black"
                fontFamily="Consolas"
                component="div"
                padding="2rem"
                fontSize="1rem" 
                lineHeight="2rem"
              >
    
    La soterrània és un projecte de gestió i de difusió cultural que actua com a una plataforma artística, amb la idea de promoure vincles entre l'art i els usuaris de diferents espais socials i culturals.


La finalitat és generar xarxa entre entitats, centres socials i tot tipus d'artistes així com un intercanvi de continguts/idees, desenvolupar sinergies mitjançant valors i moviments d'empatia, comunitat i solidaritat, i oferir un circuit de difusió alternatiu a les grans plataformes per a tot tipus d'artistes (amateurs, no professionals i professionals).


Es desenvolupa mitjançant un esdeveniment que funciona com a un petit festival incloent un espai de micro obert on totes les disciplines artístiques són benvingudes (música, màgia, clown, poesia, teatre, performance...).


L'organització programa i selecciona tant els espais com els artistes participants en cartell i difon en diferents tipus de formats (xarxes socials, mailing, ràdio, cartelleria, web...).


La primera part és programada i consta de sis / set artistes que actuen 15 minuts i la segona part és lliure on s'obre l'escenari i es dóna peu a participar a tots els assistents 10 minuts.


La durada de l'esdeveniment és de tres hores aproximadament. Per altra banda sempre es fa un sorteig de diferents artesanies i objectes relacionats amb la música i el dibuix. 

La recaptació va destinada a causes socials com ara donacions a caixes de resistència, col·lectius socials o protectores d'animals.

De cada esdeveniment es genera un video-reportatge documental on s'exposa, de forma intercalada, el projecte social existent en l'espai on succeeix i les actuacions dels i les artistes participants que passen per l'escenari. 

Es penja al nostre canal youtube: <a href="https://www.youtube.com/c/lasoterr%C3%A0nia">la soterrània</a> i d'aquesta manera construïm un petit recull dels projectes artístics i els socials, sent un mitjà de consulta i creació de ponts entre espais i artistes que dinamitzen un teixit social i cultural.


Des de que va néixer el projecte ja són molts els espais que hem visitat: l'Ateneu Popular de Vallcarca, Ateneu Llibertari de Gràcia, PIC de Can Masdeu, Casa Okupa Cádiz, Centre cívic Can Basté, festes del barri de Gràcia i Sant Andreu, l'Ateneu La Torna, el Casal Popular 3 Voltes Rebel, entre d'altres.

Actualment, amb la situació de pandèmia de la Covid-19, hem hagut de reinventar-nos i fer esdeveniments online així com realitzar entrevistes variades. La nostra intenció és continuar fent esdeveniments amb totes les mesures de seguretat i garanties necessàries.


<p style={{mt:2}}>Organitzat per Andrei Marreane i Mar Mota.</p>

    Projecte nascut al 2013
               
              </Typography>
              </Grid>
        </Grid>
      
   <FooterGris/> 

      </>
  )}