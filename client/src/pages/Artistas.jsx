import React from "react";
import SearchBar from '../components/SearchBar'
import { Container } from "@mui/material";
import MediaCard from "../components/MediaCard"
import FooterAzul from "../components/FooterAzul"

export default function Artistas (){
   
    return(
        <>
        <Container style={{height:'10rem'}}>
        <SearchBar/>
        </Container>
        <MediaCard/>
        <FooterAzul/>
        </>
    )
}