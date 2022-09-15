// General content component with image and text
import React from 'react';

export default function AboutMe() {
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
        <h2 className='text-5xl indent-10'>Hi, I'm Blaze.</h2>
        <p className='mt-6 text-left mx-auto indent-10'>
          Thank you for taking the time out of your no doubt busy day to come by
          my little corner of the internet. I've been leveling up my skills in
          front-end web development for a little over a year now.
        </p>
        <p className='indent-10'>
          I've found the path to be rewarding, exhausting, fun, and much more. I
          am a creator at heart. I love to create things that are useful, and
          that solve small problems. I am a self taught developer, and I am
          always looking to learn more.{' '}
        </p>
        <p className='indent-10'>
          I am currently working on a few projects, and I am always looking for
          new opportunities. If you have any questions, or would like to work
          together, please feel free to contact me. I look forward to hearing
          from you.
        </p>
      </div>
    </div>
  );
}
