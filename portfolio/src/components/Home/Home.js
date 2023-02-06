import { React } from "react";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useTranslation } from "react-i18next"
import s from "./Home.module.css"
import logo from "../../Img/logo_LM.png"

// const mediaQueryWidth = {xs: '100vw', md: '50vw'}
function mediaQuery(xsRegla, mdRegla) {
    return {
        xs: xsRegla,
        md: mdRegla
    }
}


export default function Home() {
    const { t } = useTranslation()
    return (
        <div className={s.main}>
            <Box sx={{ width: mediaQuery('100vw', '50vw'), margin: "auto" }}>
                <img className={s.logo} src={logo} alt="logo" />
            </Box>
            <Typography variant="h2" sx={{
                marginX: '1rem',
                fontSize: mediaQuery('2rem', '3rem'),
                fontWeight: 600
            }}>
                {t('saludo')}
            </Typography>
            <Typography>
                Soy Desarrollador Web
            </Typography>

        </div>
    )
}