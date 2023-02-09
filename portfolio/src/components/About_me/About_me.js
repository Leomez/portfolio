import React from "react";
import { Container, Typography, Card, CardContent, CardMedia, Button, CardActionArea, CardActions, Paper } from "@mui/material";
import { useTranslation } from "react-i18next"
import foto from "../../Img/foto.jpeg"
import mediaQuery from "../../Utils/mediaQuery";
import { padding } from "@mui/system";



export default function AboutMe() {
    const {t} = useTranslation();
    return (
        <Container>
            <Typography variant="h1" sx={{fontSize: '4rem', padding: '10rem 0 5rem 0'}}>
                {t('about_me_link')}
            </Typography>
            <Card sx={{padding:'2rem'}}>
                <Paper sx={{display: mediaQuery('block', 'flex')}}>
                    <CardMedia
                        component="img"
                        image={foto}
                        alt="imagen personal"
                        sx={{
                            borderRadius: "50%",
                            height:  mediaQuery('15rem', "20rem"),
                            width: mediaQuery('15rem', "20rem"),
                            margin: "auto",
                            padding: "1rem"
                        }}
                    />
                    <CardContent sx={{width: mediaQuery('65vw', '30rem'), margin: 'auto'}}>
                        <Typography gutterBottom variant="h3" component="div">
                            {t("quien_soy")}
                        </Typography>
                        <Typography variant="h5" align="justify" color="text.secondary">
                            {t('quien_soy_text')}
                        </Typography>
                    </CardContent>
                </Paper>
                <CardActions>
                    <Button variant="outlined" size="small" color="primary">
                        Skill
                    </Button>
                </CardActions>
            </Card>
        </Container>
    )
}