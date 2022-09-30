import React, { useState, useEffect } from "react";
import {Link } from 'react-router-dom';
import '../css/MediaCard.css'
import GetArtists from '../services/getArtists'


export default function MediaCard() {
  const [allArtists, setAllArtists] = useState([])


  useEffect(() => {
    GetArtists.getAll().then((res) => {
      let artistsList = res
      setAllArtists(artistsList)
    })
  }, [])


  return (
   
    <div className="div-cards">
  {allArtists.map((item, i) =>(
  <article className="flows">
     <div className="teams" key={i}>
        <Link to={`/artistes/${i}`} className="profiles">
          <h2 className="profile__names">{item.nombre}</h2>
          <p id="genero">{item.generomusical}</p>
          <img alt="Imagen de artista" src={item.foto} />
        </Link>
    </div>
 </article>
    ))}
    </div>
  );
}