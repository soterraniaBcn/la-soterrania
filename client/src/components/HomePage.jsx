
import { Grid, Box } from "@mui/material";
import React, { useEffect, useState } from 'react';
import flecha from '../imagenes/flecha.png';
import Footer from './FooterAzul'
import Header from "./Header.jsx";
import { Link } from "react-router-dom";
import GetArtists from '../services/getArtists'
import GetSpaces from '../services/getSpaces'
import GetEvent from '../services/getInfo'


export default function HomePage() {
    const [allArtists, setAllArtists] = useState([])
    const [allSpaces, setAllSpaces] = useState([])
    const [allEvents, setAllEvents] = useState([])

    
    
    useEffect(() => {
        GetArtists.getAll().then((res) => {
            let artistsList = res.slice(0, 3)
            setAllArtists(artistsList)
        })
    }, [])
    
    useEffect(() => {
      GetSpaces.getAll().then((res) => {
        let spacesList = res.slice(0, 3)
        setAllSpaces(spacesList)
      })
    }, [])

  useEffect(() => {
    GetEvent.getAll().then((res) => {
      let eventsList = res.slice(0, 3)
      setAllEvents(eventsList)
    })
  }, [])

    
    return (

        <>

            <Box style={{ height: "10rem", width: "100vw", backgroundColor: "#1446A0" }}>
                <Header />
            </Box>


            <Grid container className="flow" >



                <Box className="team" >
                    <p className="artista" style={{ fontSize: "30px", fontWeight: "bold" }}>Artistas</p>

                    <Grid container className="auto-grid" role="list">
                        {allArtists.map((item, i) => (
                            <div className="Artists3" key={i}>
                                <a href="" target="_blank" className="profile">
                                    <h2 className="profile__name">{item.nombre}</h2>
                                    <p className="genero">{item.genero}</p>
                                    <img src={item.foto} alt="mujer" />
                                </a>
                            </div>
                        ))}

                        <Link to="/artistes">
                            <img src={flecha} alt="flecha" style={{ width: "5rem", height: "5rem", marginTop: "9rem", marginLeft: "3rem" }} />
                        </Link>


                    </Grid>
                </Box>


                <Box className="team" style={{ marginTop: "10rem" }}>
                    <p className="artista" style={{ fontSize: "30px", fontWeight: "bold" }}>Espais</p>
                    <Grid container className="auto-grid1" role="list">
                    {allSpaces.map((item, i) =>(
                        <div className="teams" key={i}>

                        <a href="" target="_blank" className="profile">
                            <h2 className="profile__name">{item.nombre}</h2>
                            <p className="genero">{item.genero}</p>
                            <img src={item.foto} alt="mujer" />
                        </a>

                              </div> ))}
                        
                        <Link to="/espais">
                            <img src={flecha} alt="flecha" style={{ width: "5rem", height: "5rem", marginTop: "9rem", marginLeft: "3rem" }} />
                        </Link>
                    </Grid>
                </Box>


                <Box className="team" style={{ marginTop: "10rem" }}>
                    <p className="artista" style={{ fontSize: "30px", fontWeight: "bold" }}>Esdeveniments
</p>
                    <Grid container className="auto-grid1" role="list">
                    {allEvents.map((e, i) => (
                      <div key={i}>

                       

                        <a href="" target="_blank" className="profile">
                            <h2 className="profile__name">{e.nombre}</h2>
                            <p className="genero">{e.genero}</p>
                            <img src={e.foto} alt="mujer" />
                        </a>

                              </div> ))}
                        
                        <Link to="/events">
                            <img src={flecha} alt="flecha" style={{ width: "5rem", height: "5rem", marginTop: "9rem", marginLeft: "3rem" }} />
                        </Link>
                    </Grid>
                </Box>
                


            </Grid>


            <Footer />
        </>
    )
}

