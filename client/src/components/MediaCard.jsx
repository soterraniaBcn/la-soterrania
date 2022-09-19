import React, { useState, useEffect } from "react";
//import axios from 'axios';
//import { useSearchParams, Link } from 'react-router-dom';
import '../css/MediaCard.css'

export default function MediaCard() {
  return (

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