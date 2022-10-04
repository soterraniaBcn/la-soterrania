import React, { useState, useEffect, useMemo, useRef } from 'react'
import '../css/MediaCard.css'
import GetArtists from '../services/getArtists'
import { Grid, Button } from '@mui/material'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import HeaderPestBlue from '../components/HeaderPestBlue'

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
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  // Filtra la info que coincide con el valor del campo de búsqueda
  const filterArtists = useMemo(
    () =>
      allArtists.filter((artist) => {
        return artist.nombre.toLowerCase().includes(search.toLocaleLowerCase())
      }),
    [allArtists, search],
  )
  return (
    <>
      <Grid
        container
        style={{ height: '10rem', backgroundColor: '#1446A0', width: '100vw' }}
      >
        <HeaderPestBlue />
        <Grid
          item
          style={{
            marginTop: '-3rem',
            display: 'flex',
            alignItems: 'center',
            position: 'sticky',
          }}
        >
          <SearchBar
            search={search}
            searchInput={searchInput}
            handleSearch={handleSearch}
          />
        </Grid>
      </Grid>
      <Grid
        item
        style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}
      >
        <Link to="/admin/editarartista" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            style={{
              backgroundColor: '#E2A0FF',
              color: '#1446A0',
              borderRadius: '40px',
              height: '2rem',
              fontWeight: 'bold',
            }}
          >
            Afegir nou artista
          </Button>
        </Link>
      </Grid>
      <Grid container className="div-cards">
        {filterArtists.map((artist, i) => (
          <article className="flows">
            <div className="teams" key={i}>
              <Link to={`/artistes/${artist.id}`} className="profiles">
                <h2 className="profile__names">{artist.nombre}</h2>
                <p id="genero">{artist.generomusical}</p>
                <img alt="Imagen de artista" src={artist.foto} />
              </Link>
            </div>
          </article>
        ))}
      </Grid>
    </>
  )
}
