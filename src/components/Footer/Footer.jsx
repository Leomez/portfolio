import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useTranslation } from "react-i18next";
import React from "react";


export default function Footer() {
    const { t } = useTranslation();
    return (
        <Box sx={{ position: 'relative', bottom: 0, height: '3rem', backgroundColor: '#05263b', width: '100%', zIndex: '10', paddingTop: '1rem' }}>
            <Typography variant="h6">{t('footer')}</Typography>
        </Box>
    )
}