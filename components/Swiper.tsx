"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

export default function SwiperWrapper() {
    return (
        <Swiper
            pagination={{ clickable: true }}
            loop={true}
        >
            <SwiperSlide>
                <img src="/assets/images/slider1.webp" alt="Slide 1" className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/assets/images/slider2.webp" alt="Slide 2" className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/assets/images/slider2.webp" alt="Slide 2" className="w-full h-auto" />
            </SwiperSlide>
        </Swiper>
    );
}