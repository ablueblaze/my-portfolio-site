// General content component with image and text
import { nanoid } from 'nanoid';
import React from 'react';

export default function AboutMe({ Contents }) {
  return (
    <section
      className='container mx-auto flex flex-col justify-center items-center mt-1/4% lg:items-start pt-32 lg:flex-row md:justify-between lg:max-w-6xl'
      id='about'>
      <img
        className='object-cover lg:w-[25vw] md:w-[50vw] rounded-full'
        //todo: Swap out image for a pixelated version
        src='assets/Good_Profile_pic.jpg'
        alt='picture of Blaze'
      />
      <div className='lg:ml-5 mt-10 lg:mt-0 max-w-xl text-left'>
        <h2 className='text-center text-7xl mb-4 underline'>
          {Contents.aboutMe.title}
        </h2>
        {Contents.aboutMe.blurbs.map((blurb) => {
          return (
            <p key={nanoid()} className='mt-4 text-left mx-auto indent-10 '>
              {blurb}
            </p>
          );
        })}
      </div>
    </section>
  );
}
