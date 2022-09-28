import React from "react";
import SearchBar from '../components/SearchBar'
import { Container } from "@mui/material";
import MediaCardEspacios from "../components/MediaCardEspacios"
import FooterAzul from "../components/FooterAzul"

export default function Espacios (){
   
    return(
        <>
        <Container style={{height:'10rem'}}>
        <SearchBar/>
        </Container>
        <MediaCardEspacios/>
        <FooterAzul/>
        </>
    )
}