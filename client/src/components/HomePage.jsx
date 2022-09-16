
import { Grid, Box } from "@mui/material";
import React from 'react';
// import { flexbox } from "@mui/system";
// import escenario from '../imagenes/escenario.png';
// import escenario2 from '../imagenes/escenario2.png';
// import espacio from '../imagenes/espacio.png';
// import espai from '../imagenes/espai.png';
// import evento from '../imagenes/evento.png';
import mujer from '../imagenes/mujer.png';
import persona2 from '../imagenes/persona2.png';
import señor from '../imagenes/señor.png';
// import tambor from '../imagenes/tambor.png';
// import trompeta from '../imagenes/trompeta.png';

// import violin from '../imagenes/violin.png';

export default function HomePage() {
    return (

        <Grid container className="flow">

            <Box className="team">
                <Grid container className="auto-grid" role="list">

                    <a href="" target="_blank" className="profile">
                        <h2 className="profile__name">ruby Simmons</h2>
                        <p>Rock</p>
                        <img src={mujer} alt="mujer" />
                    </a>


                    <a href="" target="_blank" className="profile">
                        <h2 className="profile__name">Marcos Harris</h2>
                        <p>Jazz</p>
                        <img src={señor} alt="señor" />
                    </a>


                    <a href="" target="_blank" className="profile">
                        <h2 className="profile__name">Jim Morris</h2>
                        <p>Pop</p>
                        <img src={persona2} alt="persona2" />
                    </a>
                </Grid>
            </Box>
        </Grid>
    )
}