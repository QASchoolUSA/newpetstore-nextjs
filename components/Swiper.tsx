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
        <div className=''>
        <Swiper pagination={{ clickable: true }} loop={true} >
            <SwiperSlide>
                <Image layout="responsive" src="/assets/images/slider1.webp" alt="Slide 1" width={1100}  // Base width for desktop
      height={500} />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/slider2.webp" alt="Slide 2" layout="responsive" width={1100}  // Base width for desktop
      height={500} />
            </SwiperSlide>
            {/* <SwiperSlide>
                <Image src="/assets/images/slider2.webp" alt="Slide 2" className="w-full h-auto" />
            </SwiperSlide> */}
        </Swiper>
        </div>
    );
}