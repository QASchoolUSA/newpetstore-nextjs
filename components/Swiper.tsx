"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Image from 'next/image';

export default function SwiperWrapper() {
    return (
        <div className='container pb-5'>
        <Swiper className='swiper-container' pagination={{ clickable: true }} loop={true} >
            <SwiperSlide>
                <Image src="/assets/images/slider1.webp" alt="Slide 1" width={1400} height={700} />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/slider2.webp" alt="Slide 2" width={1400} height={700} />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/slider2.webp" alt="Slide 2" width={1400} height={700} />
            </SwiperSlide>
        </Swiper>
        </div>
    );
}