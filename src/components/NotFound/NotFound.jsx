import React from 'react';
import s from './NotFound.module.css'
import img from '../../Img/Not_found1.png'
import { useTranslation } from 'react-i18next'

const NotFound = () => {
    const { t } = useTranslation()
    return (
        <div className={s.main}>
            <img className={s.img} src={img} alt="" srcset="" />
            <h1>404 - {t("no_encontrado")}</h1>
            <p>{t("no_encontrado_message")}</p>
        </div>
    );
};

export default NotFound;
