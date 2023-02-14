import React from "react";
import { Container, Typography, Card, CardContent, CardMedia, Button, CardActionArea, CardActions, Box, Paper } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useTranslation } from "react-i18next"
import foto from "../../Img/foto.jpeg"
import mediaQuery from "../../Utils/mediaQuery";
import TechSkills from "../Skills/Tech_skills";
import s from "./About_me.module.css"
import { padding } from "@mui/system";
import TechSkills2 from "../Skills/Tech_skills2";



export default function AboutMe() {

    const iconCollapse = {
        collapse: ArrowDropDownIcon,
        contract: ArrowRightIcon
    }

    const handleCollapseSkill = (e) => {
        // e.target.children
        if (e.currentTarget.className.includes('close')) {
            e.currentTarget.classList.add(`${s.skills_open}`)
            e.currentTarget.classList.remove(`${s.skills_close}`)
        } else {
            e.currentTarget.classList.add(`${s.skills_close}`)
            e.currentTarget.classList.remove(`${s.skills_open}`)
        }
        console.log(e.currentTarget.className);
    }
    const { t } = useTranslation();
    return (
        <Container>
            <Typography variant="h1" sx={{ fontSize: '4rem', padding: '10rem 0 5rem 0' }}>
                {t('about_me_link')}
            </Typography>
            <Card sx={{ padding: '2rem' }}>
                <Paper sx={{ display: mediaQuery('block', 'flex') }}>
                    <CardMedia
                        component="img"
                        image={foto}
                        alt="imagen personal"
                        sx={{
                            borderRadius: "50%",
                            height: mediaQuery('15rem', "20rem"),
                            width: mediaQuery('15rem', "20rem"),
                            margin: "auto",
                            padding: "1rem"
                        }}
                    />
                    <CardContent sx={{ width: mediaQuery('65vw', '30rem'), margin: 'auto' }}>
                        <Typography gutterBottom variant="h3" component="div">
                            {t("quien_soy")}
                        </Typography>
                        <Typography variant="h5" align="justify" color="text.secondary">
                            {t('quien_soy_text')}
                        </Typography>
                    </CardContent>
                </Paper>
                <Box>
                    <div onClick={handleCollapseSkill} className={`${s.skills_close}`}>
                        <div className={s.skill_header}>
                            <h2 className={s.skills_title}>
                                Skills
                            </h2>
                            <ArrowRightIcon className={s.arrowIcon} />
                        </div>
                        <div className={s.skills_list}>
                            <TechSkills />
                        </div>
                    </div>

                    <Box>

                    </Box>

                </Box>
            </Card>
        </Container>
    )
}