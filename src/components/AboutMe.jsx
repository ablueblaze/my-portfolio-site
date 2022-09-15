// General content component with image and text
import React from 'react';

export default function AboutMe({ title, text }) {
  return (
    <div
      className='container mx-auto flex flex-col justify-center items-center lg:items-start py-32 lg:flex-row md:justify-between lg:max-w-6xl'
      id='about'>
      <img
        className='object-cover lg:w-[25vw] md:w-[50vw] rounded-full'
        src='assets/Good_Profile_pic.jpg'
        alt='picture of Blaze'
      />
      <div className='lg:ml-5 mt-10 lg:mt-0 max-w-xl text-left'>
        <h2 className='text-5xl indent-10'>{title}</h2>
        <p className='mt-6 text-left mx-auto indent-10'>{text}</p>
      </div>
    </div>
  );
}
