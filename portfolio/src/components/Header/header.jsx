// import * as React from 'react';
import {React, useState} from 'react';
import s from "./header.module.css";
import "../Traductor/i18n";
import { useTranslation } from "react-i18next";
import {Select, MenuItem, Button, Container, Menu, Typography, IconButton, Toolbar, AppBar, Box} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../../Leomez_logo.png"





function Header() {

    const { t, i18n } = useTranslation()
    const pages = [t('proyects_link'), t('about_me_link'), t('contact_link')];


    const [anchorElNav, setAnchorElNav] = useState(null);

    const [lenguage, setLenguage] = useState('es');

    const handleChange = (event) => {
        setLenguage(event.target.value);
        i18n.changeLanguage(lenguage)
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                        <img className={s.logo} src={logo} alt="leomez" />
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center" color={"#5ce1e6"}>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
                        <img className={s.logo} src={logo} alt="leomez" />
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, flexDirection: 'row-reverse' }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#fff', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ minWidth: 120 }}>
                        <Select
                            value={lenguage}                            
                            onChange={handleChange}
                        >
                            <MenuItem value={'es'}>En</MenuItem>
                            <MenuItem value={'en'}>Es</MenuItem>
                        </Select>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;