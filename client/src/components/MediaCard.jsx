import * as React from 'react';
import '../Css/MediaCard.css'
//import {Card, CardContent, CardMedia, Typography } from '@mui/material';7
//import bandaMusical from '../assets/bandaMusical.jpg';

export default function MediaCard() {
  return (
    
    /*<Card sx={{ maxWidth: 345, m: 3 }} className="card2">
      <CardMedia
        component="img"
        height="140"
        img={bandaMusical}
        alt="banda musical"
      />
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Genero
        </Typography>
      </CardContent>
    </Card>*/ 

  <article className="flow">
     <div className="team">
        <a href="google.com" className="profile">
          <h2 className="profile__name">Nombre de la artista</h2>
          <p>Genero</p>
          <img alt="Anita Simmons" src="https://source.unsplash.com/BhcutpohYwg/800x800" />
        </a>
    </div>
 </article>
    
  );
}