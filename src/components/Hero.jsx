import React from 'react';

export default function Hero() {
  return (
    <div className='container mx-auto'>
      <div className='relative flex flex-col items-center justify-center h-3/4-screen'>
        <div className='absolute md:mr-1/4-screen md:mt-20'>
          <h1 className='text-6xl font-bold text-text-dark md:text-9xl'>
            Blaze Scott
          </h1>
          <p className='text-2xl text-text-dark'>I'm a front-end developer.</p>
        </div>
        <img
          className='absolute opacity-5 max-w-screen-md md:ml-1/4-screen'
          src='../src/assets/yin-yang-solid.svg'
          alt=''
        />
      </div>
    </div>
  );
}
