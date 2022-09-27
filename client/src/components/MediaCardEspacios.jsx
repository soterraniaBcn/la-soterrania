import React, { useState, useEffect } from "react";
import {Link } from 'react-router-dom';
import '../css/MediaCard.css'
import GetSpaces from '../services/getSpaces'

export default function MediaCard() {
  const [allSpaces, setAllSpaces] = useState([])

  useEffect(() => {
    GetSpaces.getAll().then((res) => {
      let spacesList = res
      setAllSpaces(spacesList)
    })
  }, [])

  return (
   
    <div className="div-cards">
  {allSpaces.map((place, i) =>(
  <article className="flows">
     <div className="teams" key={i}>
        <a href={'/espais/:id'} className="profiles">
          <h2 className="profile__names">{place.nombre}</h2>
          <p id="genero">{place.generomusical}</p>
          <img alt="Imagen de artista" src={place.foto} />
        </a>
    </div>
 </article>
    ))}
    </div>
  );
}