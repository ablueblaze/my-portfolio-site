import React from 'react';

export default function Hero() {
  return (
    <div
      className='relative container mx-auto flex flex-col items-center justify-center h-3/4-h-screen mb-1/4-h-screen'
      id='home'>
      <div className='absolute md:mr-1/4-h-screen md:mt-20'>
        <h1 className='text-6xl font-bold text-text-dark md:text-9xl'>
          Blaze Scott
        </h1>
        <p className='text-2xl text-text-dark'>
          I'm a front-end web developer.
        </p>
      </div>
      <div className='absolute flex items-center object-cover overflow-hidden w-full h-full  md:w-3/4 md:ml-1/4% xl:w-1/2'>
        <img
          className='opacity-5 animate-spin-slow  '
          src='../src/assets/yin-yang-solid.svg'
          alt=''
        />
      </div>
      <div className='absolute top-3/4-h-screen flex flex-col justify-center items-center'>
        {/* todo: Smaller word and longer pointer */}
        <a
          href='#about'
          className='text-8xl opacity-10 text-center rotate-90 pb-2 mt-24'>
          &#x27A2;
        </a>
      </div>
    </div>
  );
}
