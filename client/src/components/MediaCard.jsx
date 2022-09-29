import React, { useState, useEffect,useMemo,useRef, useCallback, useReducer } from "react";
import '../css/MediaCard.css'
import GetArtists from '../services/getArtists'
import {Container} from '@mui/material'
import SearchBar from './SearchBar'


export default function MediaCard() {
  const [allArtists, setAllArtists] = useState([])
  const [search, setSearch] = useState('')
  const searchInput = useRef()

  // Obtener datos  
  useEffect(() => {
  GetArtists.getAll().then((res) => {
   let artistsList = res
   setAllArtists(artistsList)
 })
}, [])

   
  // Capta valor que se escribe en la barra
    const handleSearch = useCallback(() => {
        setSearch(searchInput.current.value);
    }, [])

 
  // Filtra la info que coincide con el valor del campo de búsqueda
    const filterArtists = useMemo(() => 
        allArtists.filter((artist) => {
            return artist.nombre.toLowerCase().includes(search.toLocaleLowerCase())
        }), [allArtists, search])
  


  return (

   <Container>
    <SearchBar search={search} searchInput={searchInput} handleSearch={handleSearch}/>
    <div className="div-cards">
  {filterArtists.map((artist, i) =>(
  <article className="flows">
     <div className="teams" key={i}>
        <a href={'/artistes/:id'} className="profiles">
          <h2 className="profile__names">{artist.nombre}</h2>
          <p id="genero">{artist.generomusical}</p>
          <img alt="Imagen de artista" src={artist.foto} />
        </a>
    </div>
 </article>
    ))}
    </div>
    </Container>
  );
}