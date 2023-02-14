import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import s from "./Tech_skills2.module.css";

// import required modules
import { Pagination } from "swiper";

export default function TechSkills2() {
    return (
        <>
            <Swiper
                className="mySwiper swiper-h"
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
            >
                <SwiperSlide>
                    <Swiper
                        className={`mySwiper2 ${s.swiper_v}`}
                        direction={"vertical"}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                    >
                        <SwiperSlide>Javascript</SwiperSlide>
                        <SwiperSlide>React</SwiperSlide>
                        <SwiperSlide>Redux</SwiperSlide>
                        <SwiperSlide>HTML</SwiperSlide>
                        <SwiperSlide>CSS</SwiperSlide>
                    </Swiper>
                </SwiperSlide>
                <SwiperSlide>
                    <Swiper
                        className={`mySwiper2 ${s.swiper_v}`}
                        direction={"vertical"}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                    >
                        <SwiperSlide>Node.js</SwiperSlide>
                        <SwiperSlide>Express</SwiperSlide>
                        <SwiperSlide>Sequelize</SwiperSlide>
                        <SwiperSlide>PostgresSQL</SwiperSlide>                        
                    </Swiper>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
