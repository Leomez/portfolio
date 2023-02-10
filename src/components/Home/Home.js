import { React } from "react";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useTranslation } from "react-i18next";
import s from "./Home.module.css";
import logo from "../../Img/logo_LM.png";
import Contact from "../Contact/Contact";
import { Link } from "react-router-dom";
import mediaQuery from "../../Utils/mediaQuery";
// import ContactLargeScreen from "../Contact/Contact_large_screen";




export default function Home() {
    const { t } = useTranslation()
    return (
        <div className={s.main}>
            <Box sx={{ width: mediaQuery('100vw', '50vw'), margin: "auto" }}>
                <img className={s.logo} src={logo} alt="logo" />
            </Box>
            <Box sx={{
                padding: mediaQuery('2rem', '0'),
                marginBottom: mediaQuery('0','3rem')
                }}>
                <Typography variant="h1" sx={{
                    marginX: '1rem',
                    fontSize: mediaQuery('3.2rem', '4.2rem'),
                    lineHeight: mediaQuery('3.2rem', '5rem'),
                    fontWeight: 700
                }}>
                    {t('saludo')}
                </Typography>
                <Typography variant="h5" sx={{fontSize: '1.5rem', fontWeight: '200', color:'beige'}}>
                    {t('presentacionP1')}
                </Typography>
                <Typography variant="h5" sx={{fontSize: '1.5rem', fontWeight: '200', color:'beige'}}>
                {t('presentacionP2_1')} <span className={s.link}>{t('presentacionP2_2')}</span> {t('presentacionP2_3')} <Link to={"/aboutMe"}><span className={s.link}>{t('presentacionP2_4')}</span></Link>
                </Typography>
            </Box>
            <Box sx={{width: '100%', marginTop: mediaQuery('3rem', '4rem')}}>                
                <Contact />
            </Box>
            {/* <Box sx={{width: '100%', border: '1px solid red', display: mediaQuery('none', 'flex')}}>
                <ContactLargeScreen/>
            </Box> */}

        </div>
    )
}