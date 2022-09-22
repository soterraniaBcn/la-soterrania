import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useSearchParams, Link } from 'react-router-dom';
import '../css/MediaCard.module.css'

export default function MediaCard() {
  const [searchParams, setSearchParams]= useSearchParams ()
  const search= searchParams.get('search') || ''
  const [card, setCard] = useState([]);
  useEffect(() => {
    axios({
      url: "http://localhost:3000/artistas",
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
  <article className="flow">
     <div className="team">
        <a href={item.link} className="profile">
          <h2 className="profile__name">{item.nombre}</h2>
          <p>{item.genero}</p>
          <img alt="Anita Simmons" src={item.img} />
        </a>
    </div>
 </article>
    ))}
    </div>
  );
}