import { Container, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import s from "./proyect.module.css"
import M from "materialize-css";
import imagen from "../../Img/imagen-de-prueba-320x240-1.jpg"
import { Box } from "@mui/system";
import mediaQuery from "../../Utils/mediaQuery";
import proyectos from "../../Utils/proyectos";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';


export default function Proyect() {

    proyectos().map(p => console.log(p.nombre))
    // console.log(proyectos());


    return (
        <Container>
            <Typography variant="h1" sx={{ fontSize: '4rem', padding: '10rem 0 5rem 0' }}>
                Mis Proyectos
            </Typography>
            <Box sx={{ display: mediaQuery('block', 'flex') }}>
                {proyectos().map(p => (
                    <div key={p.nombre} className={`${s.cardContainer} col s12 m6`}>
                        <Paper elevation={3}>
                            <div className={`${s.card} col s12 m9`}>
                                <div className="card">
                                    <div className="card-image">
                                        <img src={p.img} />
                                        <span className={`${s.cardTitle} card-title`}>{p.nombre}</span>

                                    </div>
                                    <div className="card-content">
                                        <p>{p.detalle}</p>
                                    </div>
                                    <div className="card-action">
                                        <a href={p.GitHub_link}>GitHubIcon</a> {/* los iconos estan inchando las pelotas*/}
                                        <a href={p.deploy_link}>LinkIcon</a>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    </div>
                ))}


            </Box>
        </Container>

    )

}