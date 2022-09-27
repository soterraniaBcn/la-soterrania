import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useSearchParams, Link } from 'react-router-dom';
import '../css/MediaCard.css'
import DATABASE_URL from '../.env'

export default function MediaCard() {
  const [searchParams, setSearchParams]= useSearchParams ()
  const search= searchParams.get('search') || ''
  const [card, setCard] = useState([]);
  useEffect(() => {
    axios({
      DATABASE_URL
    })
      .then((response) => {
        console.log(response)
        const filterArray=response.data.filter(element=>{
          if (search!='')
                   return element.nombre.toLowerCase().includes(search.toLocaleLowerCase())
         return element })
        setCard(filterArray)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [search]);
  return (
    <div className="div-cards">
  {card.map(item =>(
  <article className="flows">
     <div className="teams">
        <a href={item.link} className="profiles">
          <h2 className="profile__names">{item.nombre}</h2>
          <p id="genero">{item.genero}</p>
          <img alt="Imagen de artista" src={item.img} />
        </a>
    </div>
 </article>
    ))}
    </div>
  );
}