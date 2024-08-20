import React from 'react';
import dynamic from 'next/dynamic';
import Products from '@/components/Products';

const SwiperComponent = dynamic(() => import('../components/Swiper'), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <h1 className='text-center font-semibold text-xl antialiased'>Welcome to New Pet Store</h1>
      <div className="slider">
      <SwiperComponent />
      </div>
      <Products/>
    </div>
  );
}
