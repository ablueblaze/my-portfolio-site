// General content component with image and text
import React from 'react';

export default function AboutMe({ title, text }) {
  return (
    <div
      className='container mx-auto flex flex-col  justify-center items-center pb-32 flex flex-col pt-32 md:flex-row md:justify-between md:max-w-6xl'
      id='about'>
      <img
        className='object-cover max-w-full md:max-w-lg rounded-full'
        src='assets/Good_Profile_pic.jpg'
        alt='picture of Blaze'
      />
      <div className='my-8 max-w-xl text-left'>
        <h2 className='text-5xl indent-10'>{title}</h2>
        <p className='mt-6 text-left mx-auto indent-10'>{text}</p>
      </div>
    </div>
  );
}
