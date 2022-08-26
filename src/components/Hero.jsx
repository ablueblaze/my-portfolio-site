import React from 'react';

export default function Hero() {
  return (
    <div>
      <div className='border-2 border-solid border-black container mx-auto flex items-center justify-center relative'>
        <h1 className=''>Example Title</h1>
        <img
          className='w-3/12'
          src='../src/assets/feather-pointed-solid.svg'
          alt='feather icon'
        />
      </div>
    </div>
  );
}
