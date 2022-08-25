import React from 'react';

export default function Hero() {
  return (
    <div className='flex justify-center items-center border-teal-600 border-solid border-2 sm:container mx-auto'>
      <div className='absolute  mr-60 mt-32 z-10 '>
        <h1 className='text-5xl drop-shadow-hero'>
          Home title <br /> example
        </h1>
        <p>Home sub-title example</p>
      </div>
      <img
        className='w-[550px] relative left-20'
        src='src/assets/undraw_reading_time_re_phf7.svg'
        alt=''
      />
    </div>
  );
}
