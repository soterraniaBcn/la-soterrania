import React from "react";
import Header from "../components/Header";
import SearchBar from '../components/SearchBar'
import { Container } from "@mui/material";
import MediaCard from "../components/MediaCard"
import FooterAzul from "../components/FooterAzul"

export default function Artistas (){
   
    return(
        <>
        <Container style={{height:'10rem'}}>
        <SearchBar/>
        <Header/>
        </Container>
        <MediaCard/>
        <FooterAzul/>
        </>
    )
}