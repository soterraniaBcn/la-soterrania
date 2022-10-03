import React, { useState, useEffect, useRef, useMemo } from "react";
import {Link } from 'react-router-dom';
import '../css/MediaCard.css'
import GetSpaces from '../services/getSpaces'
import SearchBar from '../components/SearchBar'
import { Grid } from "@mui/material"
import HeaderPestBlue from '../components/HeaderPestBlue'

export default function MediaCard() {
  const [allSpaces, setAllSpaces] = useState([])
  const [search, setSearch] = useState('')
  const searchInput = useRef()

  // Obtener datos  

useEffect(() => {
  GetSpaces.getAll().then((res) => {
    let spacesList = res
    setAllSpaces(spacesList)
  })
}, [])

   
  // Capta valor que se escribe en la barra
    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

 
  // Filtra la info que coincide con el valor del campo de búsqueda
    const filterSpaces = useMemo(() => 
        allSpaces.filter((espai) => {
            return espai.nombre.toLowerCase().includes(search.toLocaleLowerCase())
        }), [allSpaces, search])
  

  

  return (
    <>
    <Grid container style={{height:'10rem', backgroundColor:"#1446A0", width:"100vw"}}>
    <HeaderPestBlue/>
    <Grid item style={{marginTop:"-3rem",display:"flex", alignItems:"center", position:'sticky'}}>
    <SearchBar search={search} searchInput={searchInput} handleSearch={handleSearch}/>
    </Grid>
    </Grid>
    <Grid container className="div-cards">
   
  
  {filterSpaces.map((espai, i) =>(
  <article className="flows">
     <div className="teams" key={i}>
        <Link to={`/espais/${espai.id}`} className="profiles">
          <h2 className="profile__names">{espai.nombre}</h2>
          <p id="genero">{espai.telefono1}</p>
          <img alt="Imagen de la sala" src={espai.foto} />
        </Link>
    </div>
 </article>
    ))}
    </Grid>
    </>
  );
}