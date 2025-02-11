import { Container, Paper, Typography, Grid } from "@mui/material";
import React from "react";
import s from "./proyect.module.css"
import { useTranslation } from "react-i18next";
// import M from "materialize-css";
// import imagen from "../../Img/imagen-de-prueba-320x240-1.jpg"
import { Box } from "@mui/system";
import mediaQuery from "../../Utils/mediaQuery";
import proyectos from "../../Utils/proyectos";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';


export default function Proyect() {
    const { t } = useTranslation()
    proyectos().map(p => console.log(p.nombre))
    // console.log(proyectos());


    return (
        <Container>
            <Typography variant="h1" sx={{ fontSize: '4rem', padding: '10rem 0 5rem 0' }}>
                {t("proyects_link")}
            </Typography>
            <Grid container spacing={4}> {/* Contenedor Grid */}
                {proyectos().map(p => (
                    <Grid item xs={12} sm={6} key={p.nombre}> {/* 2 por fila en pantallas medianas y grandes */}
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <div className={s.card}>
                                <div className="card">
                                    <div className="card-image">
                                        <img src={p.img} alt={p.nombre} />
                                        <span className={`${s.cardTitle} card-title`}>{p.nombre}</span>
                                    </div>
                                    <div className="card-content">
                                        <p>{p.detalle}</p>
                                    </div>
                                    <div className="card-action">
                                        {p.GitHub_link_backend && <a href={p.GitHub_link_backend}><GitHubIcon/></a>} 
                                        <a href={p.GitHub_link}><GitHubIcon /></a>
                                        <a href={p.deploy_link}><LinkIcon /></a>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>


    )

}