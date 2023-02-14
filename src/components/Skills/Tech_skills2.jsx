import React, { useRef, useState } from "react";
import s from "./Tech_skills2.module.css"
import reactIcon from '../../Img/icons/react.png'
import cssIcon from '../../Img/icons/css.png'
import expressIcon from '../../Img/icons/express.png'
import htmlIcon from '../../Img/icons/html.png'
import jsIcon from '../../Img/icons/js.png'
import nodejsIcon from '../../Img/icons/nodejs.png'
import postgresIcon from '../../Img/icons/postgres.png'
import reduxIcon from '../../Img/icons/redux.png'
import { useEffect } from "react";

const iconsSkills = [
    { img: reactIcon, name: "react" },
    { img: cssIcon, name: "css" },
    { img: expressIcon, name: "express" },
    { img: htmlIcon, name: "html" },
    { img: jsIcon, name: "js" },
    { img: nodejsIcon, name: "node" },
    { img: postgresIcon, name: "postgres" },
    { img: reduxIcon, name: "redux" }
];
const delay = 2500



export default function TechSkills2() {
    const [index, setIndex] = useState(0)
    const timeoutRef = useRef(null);
    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }

    useEffect(() => {
        resetTimeout()
        timeoutRef.current = setTimeout(() =>
            setIndex((prevIndex) => prevIndex === iconsSkills.length - 1 ? 0
                : prevIndex + 1
            ),
            delay
        );
        return () => { resetTimeout()};
    }, [index]);

    return (
        <div className={s.slideShow}>
            <div className={s.slideShowSlider} style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {iconsSkills.map((icon, index) => (
                    <div
                        className={s.slide}
                        key={index}
                    >
                        <img className={s.slideImg} src={icon.img} alt={icon.name} />
                    </div>))}
            </div>
            <div className={s.slideshowDots}>
                {iconsSkills.map((_, idx) => (
                    <div
                        className={`${s.slideshowDot} ${index === idx ? s.active : ''}`}
                        onClick={() => {setIndex(idx)}}
                        key={idx}>
                    </div>
                ))}
            </div>

        </div>

    )
}
