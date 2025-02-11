import img_henryPokemon from "../Img/pokemon_gif.gif";
import img_henry_gadget from "../Img/HenryGadget.gif"
import img_portalRRHH from "../Img/App-de-RRHH.gif"
import { useTranslation } from "react-i18next"


export default function Proyectos() {

    const { t } = useTranslation()

    const proyectos = [
        {
            nombre: 'HenryGadget',
            detalle: t('henryGadget_proyecto_descripcion'),
            deploy_link: 'https://pf-henrygadget-hbbo.onrender.com/ ',
            GitHub_link: 'https://github.com/G-085/PF-HenryGadget',
            img: img_henry_gadget
        },
        {
            nombre: 'Henry Pokemon',
            detalle: t('henryPokemon_proyecto_descripcion'),
            deploy_link: t('proximamente'),
            GitHub_link: 'https://github.com/Leomez/PI-Pokemon-Main',
            img: img_henryPokemon
        },
        {
            nombre: 'Portal RRHH',
            detalle: t('portalRRHH_proyecto_descripcion'),
            deploy_link: t('https://portalcoqhr.onrender.com'),
            GitHub_link: 'https://github.com/Leomez/RR-HH-Frontend',
            GitHub_link_backend: 'https://github.com/Leomez/RR-HH-Backend',
            img: img_portalRRHH
        }
    ]

    return proyectos
}