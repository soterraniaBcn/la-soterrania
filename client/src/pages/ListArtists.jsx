/*import React, { useState, useEffect } from "react";
import ContentItem from "../components/ContentItem";
import { Grid } from "@mui/material";

export default function ContentList({artists}) {

  return (

    // Mapeado + Props
    
    <Grid container spacing={2} style={{paddingTop: "6rem"}}>
      {artists.map((artists) => {
        return (
          <ContentItem
            nombre={artist.nombre}
            generomusical={artist.generomusical}
            foto={artist.foto}
          
          />
        );
      })}
    </Grid>
  );
}
*/
























{/*
import { useState, useEffect } from "react";
import { getAllArtists } from "../components/GetData";
import {Container} from "@mui/material";
import SearchBar from "../components/SearchBar";
import ListPage from "../components/ListPage"



export default function ListArtists() {
    const [artists, setArtists] = useState([])
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
      getAllArtists().then(data => {
            setArtists(data.artists)
            setSearchResults(data.results)
console.log (setSearchResults())     })
    },[])
   

    
    return (

      <>
      <Container style={{height:'10rem'}}>
      <SearchBar artists={artists} setSearchResults={setSearchResults}/>
      </Container>
      <ListPage searchResults={searchResults}/>
  
        </>
      )
    }
  */}