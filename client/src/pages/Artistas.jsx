import React from "react";
import SearchBar from '../components/SearchBar'
import { Container } from "@mui/material";
import Header from '../components/Header'
import MediaCardArtistas from "../components/MediaCardArtistas"
import FooterAzul from "../components/FooterAzul"



export default function Artistas (){

  
   
    return(
        <>
        <Container>
        <Container style={{height:'10rem', bgColor:'blue'}}>
        <Header />
            <SearchBar />
        </Container>
        <MediaCardArtistas/>
        <FooterAzul/>
        </Container>
        </>
    )
}