import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams, Link } from "react-router-dom";
import "../css/MediaCard.css";
//import "../db.json";

export default function MediaCard() {
  const [searchParams, setSearchParams]= useSearchParams ()
  const search= searchParams.get('search') || ''
  const [card, setCard] = useState([]);
  useEffect(() => {
    axios.get("db.json")
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