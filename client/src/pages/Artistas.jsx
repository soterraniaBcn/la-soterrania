import React from "react";
import SearchBar from '../components/SearchBar'
import { Container } from "@mui/material";
import MediaCardArtistas from "../components/MediaCardArtistas"
import FooterAzul from "../components/FooterAzul"

export default function Artistas (){
   
    return(
        <>
        <Container style={{height:'10rem'}}>
        <SearchBar/>
        </Container>
        <MediaCardArtistas/>
        <FooterAzul/>
        </>
    )
}